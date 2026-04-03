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
      [FromBody] RoleDTO dto,
      ClaimsPrincipal user
    )
    {
      if (!VerifyRole.IsAdmin(user)) return ResultsHelper.Forbidden("Acesso negado");

      if (string.IsNullOrWhiteSpace(dto.Role)) return ResultsHelper.BadRequest("Nome da role é obrigatório");

      Role role = new Role { role = dto.Role };
      db.Add(role);
      await db.SaveChangesAsync();

      return ResultsHelper.Created(role, role.id, "/roles", "Role criada com sucesso");
    }

    public static async Task<IResult> ChangeRoleName(
      [FromServices] ConsultorioDbContext db,
      ClaimsPrincipal user,
      [FromBody] RoleDTO dto,
      int id
    )
    {
      if (!VerifyRole.IsAdmin(user)) return ResultsHelper.Forbidden("Acesso negado");

      var role = await db.roles.FindAsync(id);
      if (role is null) return ResultsHelper.NotFound("Role não encontrado");

      role.role = dto.Role;

      await db.SaveChangesAsync();
      return ResultsHelper.Success(role, "Role editado com sucesso");
    }

    public static async Task<IResult> DeleteRole(
      [FromServices] ConsultorioDbContext db,
      ClaimsPrincipal user,
      int id
    )
    {
      if (!VerifyRole.IsAdmin(user)) return ResultsHelper.Forbidden("Acesso negado");

      var linhasAfetadas = await db.roles.Where(role => role.id == id).ExecuteDeleteAsync();
      if (linhasAfetadas == 0) return ResultsHelper.NotFound("Role não encontrado");

      return Results.NoContent();
    }

  }
}