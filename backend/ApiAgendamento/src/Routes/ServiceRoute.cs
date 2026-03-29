using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using Data;
using DTOs;
using Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;
using Services;
using Sprache;

namespace Routes
{
  public class ServiceRoute
  {
    public static async Task<IResult> GetAllServices([FromServices] ConsultorioDbContext db)
    {
      var servicies = await db.services.ToListAsync();

      return ResultsHelper.Success(servicies, "Serviços listados");
    }

    public static async Task<IResult> GetServiceById(
      [FromServices] ConsultorioDbContext db,
      int id
    )
    {
      var service = await db.services.FindAsync(id);
      if (service is null) return ResultsHelper.NotFound("Serviço não encontrado");

      return ResultsHelper.Success(service, "Serviço encontrado");
    }

    public static async Task<IResult> CreateService(
      [FromServices] ConsultorioDbContext db,
      [FromBody] CreateServiceDTO dto,
      ClaimsPrincipal user
    )
    {
      if (!VerifyRole.IsAdmin(user)) return ResultsHelper.Forbidden("Acesso negado");

      Service service = new Service
      {
        nome = dto.Nome,
        descricao = dto.Descricao,
        preco = dto.Preco,
        duracao_min = dto.Duracao_min
      };

      db.Add(service);
      await db.SaveChangesAsync();

      return ResultsHelper.Created(service, service.id, "/services", "Serviço criado com sucesso");
    }

    public static async Task<IResult> UpdateService(
      [FromServices] ConsultorioDbContext db,
      [FromBody] GetServiceDTO dto,
      ClaimsPrincipal user,
      int id
    )
    {
      if (!VerifyRole.IsAdmin(user)) return ResultsHelper.Forbidden("Acesso negado");

      var service = await db.services.FindAsync(id);
      if (service is null) return ResultsHelper.NotFound("Serviço não encontrado");

      try
      {
        ServiceDentistService.UpdateFields(dto, service);
        await db.SaveChangesAsync();

        return ResultsHelper.Success("Serviço atualizado");

      } catch (ValidationException error)
      {
        return Results.BadRequest(error.Message);
      }
    }

    public static async Task<IResult> DeleteService(
      [FromServices] ConsultorioDbContext db,
      ClaimsPrincipal user,
      int id
    )
    {
      if (!VerifyRole.IsAdmin(user)) return ResultsHelper.Forbidden("Acesso negado");

      var linhasAfetadas = await db.services
      .Where(service => service.id == id)
      .ExecuteDeleteAsync();

      if (linhasAfetadas == 0) return ResultsHelper.NotFound("Serviço não encontrado");

      return Results.NoContent();
    }
  }
}