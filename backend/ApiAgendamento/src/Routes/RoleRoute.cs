using System.Security.Claims;
using Data;
using DTOs;
using Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Routes
{
  public class RoleRoute
  {
    public static async Task<IResult> CreateRole(
      [FromServices] ConsultorioDbContext db,
      [FromBody] CreateRoleDTO dto,
      ClaimsPrincipal user
    )
    {
      var roleVerify = VerifyRole.IsAdmin(user);
      if (!roleVerify) return Results.Forbid();

      if (string.IsNullOrWhiteSpace(dto.Role)) return Results.BadRequest("Nome da role é obrigatório");

      Role role = new Role { role = dto.Role };
      db.Add(role);
      await db.SaveChangesAsync();

      return Results.Created($"/roles/{role.id}", role);
    }

    public static async Task<IResult> ChangeRoleName(
      [FromServices] ConsultorioDbContext db,
      ClaimsPrincipal user,
      [FromBody] UpdateRoleDTO dto
    )
    {
      var roleVerify = VerifyRole.IsAdmin(user);
      if (!roleVerify) return Results.Forbid();

      var role = await db.roles.FindAsync(dto.Id);

      if (role is null) return Results.NotFound("Role não encontrado");

      role.role = dto.Role;

      await db.SaveChangesAsync();

      return Results.Ok("Role editado com sucesso");
    }

    public static async Task<IResult> DeleteRole(
      [FromServices] ConsultorioDbContext db,
      ClaimsPrincipal user,
      int id
    )
    {
      var roleVerify = VerifyRole.IsAdmin(user);
      if (!roleVerify) return Results.Forbid();

      var linhasAfetadas = await db.roles.Where(role => role.id == id).ExecuteDeleteAsync();

      if (linhasAfetadas == 0) return Results.NotFound("Role não encontrado");

      return Results.NoContent();
    }

  }
}