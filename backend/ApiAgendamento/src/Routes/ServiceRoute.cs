using Data;
using DTOs;
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
      [FromBody] CreateServiceDTO dto
    )
    {
      Service service = new Service
      {
        nome = dto.Nome,
        descricao = dto.Descricao,
        preco = dto.Preco,
        duracao_min = dto.Duracao_min
      };

      db.Add(service);
      await db.SaveChangesAsync();

      return Results.Ok(service);
    }

    public static async Task<IResult> UpdateService(
      [FromServices] ConsultorioDbContext db, 
      [FromBody] GetServiceDTO dto,
      int id
    )
    {
      var service = await db.services.FindAsync(id);

      if(service is null) return Results.NotFound("Serviço não encontrado");
      
      service.nome = dto.Nome;
      service.descricao = dto.Descricao;
      service.preco = dto.Preco;
      service.duracao_min = dto.Duracao_min;

      await db.SaveChangesAsync();

      return Results.Ok("Serviço atualizado");
    }

    public static async Task<IResult> DeleteService(
      [FromServices] ConsultorioDbContext db, 
      [FromBody] GetServiceDTO dto,
      int id
    )
    {
      await db.services
      .Where(service => service.id == id)
      .ExecuteDeleteAsync();

      return Results.NoContent();
    }
  }
}