using System.Security.Claims;
using Data;
using Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Routes
{
  class AgendaRoute
  {
    public static async Task<IResult> CreateAgendamento(
      [FromServices] ConsultorioDbContext db,
      ClaimsPrincipal user,
      DateTime data_hora,
      int service_id
    )
    {
      var busy = await db.agenda.AnyAsync(a => a.data_hora == data_hora && a.service_id == service_id);
      if (busy) return Results.BadRequest("Horário indisponível");

      var service = await db.services.FindAsync(service_id);
      if (service is null) return Results.NotFound("Serviço inexistente");

      if (data_hora <= DateTime.Now) return Results.BadRequest("Data inválida");

      var endOfService = data_hora.AddMinutes(service.duracao_min);
      var conflict = await db.agenda.AnyAsync(a =>
        a.service_id == service_id &&
        a.data_hora < endOfService &&
        a.data_hora.AddMinutes(a.duracao_min) > data_hora
      );
      if (conflict) return Results.BadRequest("Já existe um serviço agendado neste horário");

      Agenda agendamento = new Agenda
      {
        data_hora = data_hora,
        service_id = service_id,
        user_id = int.Parse(user.FindFirst(ClaimTypes.NameIdentifier)!.Value),
        duracao_min = service.duracao_min,
      };

      db.Add(agendamento);
      await db.SaveChangesAsync();

      return Results.Created($"/agendamento/{agendamento.id}", agendamento);
    }

    public static async Task<IResult> GetAllAgendamentos(
      [FromServices] ConsultorioDbContext db,
      ClaimsPrincipal user
    )
    {
      var agendamentos = await db.agenda
        .OrderByDescending(agendamento => agendamento.data_hora)
        .ToListAsync();

      if (!VerifyRole.IsAdmin(user))
      {
        var userId = int.Parse(user.FindFirst(ClaimTypes.NameIdentifier)!.Value);

        agendamentos = agendamentos
          .Where(agendamento => agendamento.user_id == userId)
          .ToList();
      }

      return Results.Ok(agendamentos);
    }

    public static async Task<IResult> GetAgendamentoByUser(
      [FromServices] ConsultorioDbContext db,
      int user_id
    )
    {
      var agendamentos = await db.agenda
      .Where(agendamento => agendamento.user_id == user_id)
      .OrderByDescending(agendamento => agendamento.data_hora)
      .ToListAsync();

      return agendamentos.Any() ? Results.Ok(agendamentos) : Results.NotFound();
    }

    public static async Task<IResult> GetAgendamentoByService(
      [FromServices] ConsultorioDbContext db,
      int service_id
    )
    {
      var agendamentos = await db.agenda
      .Where(agendamento => agendamento.service_id == service_id)
      .OrderByDescending(agendamento => agendamento.data_hora)
      .ToListAsync();

      return agendamentos.Any() ? Results.Ok(agendamentos) : Results.NotFound();
    }

    public static async Task<IResult> GetAgendamentosByDate(
      [FromServices] ConsultorioDbContext db,
      DateTime date
    )
    {
      var startDate = date.Date;
      var nextDay = date.Date.AddDays(1);

      var agendamentos = await db.agenda
      .Where(agendamento =>
        agendamento.data_hora >= startDate
        && agendamento.data_hora < nextDay
      )
      .OrderBy(agendamento => agendamento.data_hora)
      .ToListAsync();

      return agendamentos.Any() ? Results.Ok(agendamentos) : Results.NotFound();
    }

    public static async Task<IResult> ChangeDateTimeAgendamento(
      [FromServices] ConsultorioDbContext db,
      int id,
      DateTime new_date
    )
    {
      var agendamento = await db.agenda.FindAsync(id);

      if (agendamento is null) return Results.NotFound("Agendamento não encontrado");

      var endOfService = new_date.AddMinutes(agendamento.duracao_min);

      var conflict = await db.agenda
        .Include(a => a.duracao_min)
        .AnyAsync(a =>
          a.id != id &&
          a.service_id == agendamento.service_id &&
          a.data_hora < endOfService &&
          a.data_hora.AddMinutes(a.duracao_min) > new_date
        );

      var service = await db.services.FindAsync(agendamento.service_id);
      if (service is null) return Results.NotFound("Serviço inexistente");

      if (new_date <= DateTime.Now) return Results.BadRequest("Data inválida");

      agendamento.data_hora = new_date;
      await db.SaveChangesAsync();

      return Results.Ok(agendamento);
    }

    public static async Task<IResult> DeleteAgendamento(
      [FromServices] ConsultorioDbContext db,
      ClaimsPrincipal user,
      int id
    )
    {
      var userId = int.Parse(user.FindFirst(ClaimTypes.NameIdentifier)!.Value);
      var agendamento = await db.agenda.FindAsync(id);

      if (agendamento?.user_id != userId && !VerifyRole.IsAdmin(user)) return Results.Forbid();

      var linhasAfetadas = await db.agenda
        .Where(a => a.id == id)
        .ExecuteDeleteAsync();

      if (linhasAfetadas == 0) return Results.NotFound("Agendamento não encontrado.");

      return Results.Ok("Agendamento cancelado");
    }
  }
}