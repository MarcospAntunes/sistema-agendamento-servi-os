using Data;
using DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Routes
{
  public class RoleRoute
  {
    public static async Task<IResult> CreateRole(
      [FromServices] ConsultorioDbContext db, 
      [FromBody] CreateRoleDTO dto
    )
    {
      Role role = new Role { role = dto.Role };
      db.Add(role);
      await db.SaveChangesAsync();

      return Results.Ok("Role cadastrado");
    }

    public static async Task<IResult> ChangeRoleName(
      [FromServices] ConsultorioDbContext db, 
      string role, 
      int id
    )
    {
      var Role = await db.roles.FindAsync(id);

      if (Role is null) return Results.NotFound("Role não encontrado");

      Role.role = role;

      await db.SaveChangesAsync();

      return Results.Ok("Role editado com sucesso");
    }

    public static async Task<IResult> DeleteRole(
      [FromServices] ConsultorioDbContext db, 
      int id
    )
    {
      await db.roles.Where(role => role.id == id).ExecuteDeleteAsync();

      return Results.NoContent();
    }

  }
}