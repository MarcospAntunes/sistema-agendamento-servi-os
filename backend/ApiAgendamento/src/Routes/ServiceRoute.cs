using System.Security.Claims;
using Constants;
using Data;
using DTOs;
using Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;
using Sprache;

namespace Routes
{
  public class ServiceRoute
  {
    public static async Task<IResult> GetAllServices([FromServices] ConsultorioDbContext db)
    {
      var servicies = await db.services.ToListAsync();

      return Results.Ok(servicies);
    }

    public static async Task<IResult> GetServiceById(
      [FromServices] ConsultorioDbContext db, 
      int id
    )
    {
      var service = await db.services.FindAsync(id);

      if(service is null) return Results.NotFound("Serviço não encontrado");
      return Results.Ok(service);
    }

    public static async Task<IResult> CreateService(
      [FromServices] ConsultorioDbContext db, 
      [FromBody] CreateServiceDTO dto,
      ClaimsPrincipal user
    )
    {
      var roleVerify = VerifyRole.IsAdmin(user);
      if(!roleVerify) return Results.Forbid();

      Service service = new Service
      {
        nome = dto.Nome,
        descricao = dto.Descricao,
        preco = dto.Preco,
        duracao_min = dto.Duracao_min
      };

      db.Add(service);
      await db.SaveChangesAsync();

      return Results.Created($"/services/{service.id}", service);
    }

    public static async Task<IResult> UpdateService(
      [FromServices] ConsultorioDbContext db, 
      [FromBody] GetServiceDTO dto,
      ClaimsPrincipal user,
      int id
    )
    {
      var roleVerify = VerifyRole.IsAdmin(user);
      if(!roleVerify) return Results.Forbid();

      var service = await db.services.FindAsync(id);

      if(service is null) return Results.NotFound("Serviço não encontrado");
      
      if(!string.IsNullOrWhiteSpace(dto.Nome)) service.nome = dto.Nome;
      if(!string.IsNullOrWhiteSpace(dto.Descricao))service.descricao = dto.Descricao;
      if(dto.Preco > 0) service.preco = dto.Preco;
      if(dto.Duracao_min > 0) service.duracao_min = dto.Duracao_min;

      await db.SaveChangesAsync();

      return Results.Ok("Serviço atualizado");
    }

    public static async Task<IResult> DeleteService(
      [FromServices] ConsultorioDbContext db, 
      ClaimsPrincipal user,
      int id
    )
    {
      var roleVerify = VerifyRole.IsAdmin(user);
      if(!roleVerify) return Results.Forbid();

      var linhasAfetadas = await db.services
      .Where(service => service.id == id)
      .ExecuteDeleteAsync();

      if(linhasAfetadas == 0) return Results.NotFound("Serviço não encontrado");

      return Results.NoContent();
    }
  }
}