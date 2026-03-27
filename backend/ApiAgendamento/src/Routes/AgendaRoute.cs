using Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;
using Sprache;

namespace Routes
{
  class AgendaRoute
  {
    public static async Task<IResult> CreateAgendamento(
      [FromServices] ConsultorioDbContext db, 
      DateTime data_hora,
      int service_id,
      int user_id
    )
    {
      Agenda agenda = new Agenda { 
        data_hora = data_hora,
        service_id = service_id,
        user_id = user_id
      };

      db.Add(agenda);
      await db.SaveChangesAsync();

      return Results.NoContent();
    }

    public static async Task<IResult> GetAllAgendamentos([FromServices] ConsultorioDbContext db)
    {
      var agendamentos = await db.agenda
        .OrderByDescending(agendamento => agendamento.data_hora)
        .ToListAsync();

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

      bool ocupado = await db.agenda.AnyAsync(agendamento => agendamento.data_hora == new_date);
      if (ocupado) return Results.BadRequest("Horário não disponível");

      agendamento.data_hora = new_date;
      await db.SaveChangesAsync();

      return Results.Ok(agendamento);
    }

    public static async Task<IResult> DeleteAgendamento(
      [FromServices] ConsultorioDbContext db, 
      int id
    )
    {
      var linhasAfetadas = await db.agenda
        .Where(a => a.id == id)
        .ExecuteDeleteAsync();

      if (linhasAfetadas == 0) return Results.NotFound("Agendamento não encontrado.");

      return Results.Ok("Agendamento cancelado");
    }
  }
}