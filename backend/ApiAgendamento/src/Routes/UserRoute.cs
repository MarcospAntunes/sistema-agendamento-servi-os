using Data;
using DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Routes
{
  public class UserRoute
  {
    public static async Task<IResult> GetUserById(
      [FromServices] ConsultorioDbContext db,
      int id
    )
    {
      var user = await db.users
      .AsNoTracking()
      .FirstOrDefaultAsync(user => user.id == id);

      if (user is null) return Results.NotFound("Usuário não encontrado.");
      return Results.Ok(new { user.id, user.email, user.nome, user.telefone, user.role_id });
    }

    public static async Task<IResult> CreateUser(
      [FromServices] ConsultorioDbContext db,
      [FromBody] UserDTO dto
    )
    {
      var checkIfUserExists = await db.users.FirstOrDefaultAsync(user => user.email == dto.Email);

      if(checkIfUserExists is not null) return Results.Unauthorized();

      var password_hash = BCrypt.Net.BCrypt.HashPassword(dto.Password, workFactor: 12);

      User user = new User
      {
        nome = dto.Nome,
        password_hash = password_hash,
        email = dto.Email,
        telefone = dto.Telefone
      };

      db.users.Add(user);
      await db.SaveChangesAsync();

      return Results.NoContent();
    }

    public static async Task<IResult> LoginUser(
      [FromServices] ConsultorioDbContext db, string email, string password)
    {
      var user = await db.users.FirstOrDefaultAsync(user => user.email == email);

      if(user is null) return Results.Unauthorized();

      bool checkPassword = BCrypt.Net.BCrypt.Verify(password, user.password_hash);

      if(!checkPassword) return Results.Unauthorized();
      
      return Results.Ok(new { user.id, user.email, user.nome, user.telefone, user.role_id });
    }

    public static async Task<IResult> UpdateUser(
      [FromServices] ConsultorioDbContext db,
      [FromBody] UserDTO dto,
      int id
    )
    {
      var user = await db.users.FindAsync(id);

      if (user is null) return Results.NotFound("Usuário não encontrado");

      user.email = dto.Email;
      user.password_hash = BCrypt.Net.BCrypt.HashPassword(dto.Password, workFactor: 12);
      user.telefone = dto.Telefone;
      user.nome = dto.Nome;

      await db.SaveChangesAsync();

      return Results.Ok("Usuário atualizado com sucesso");
    }

    public static async Task<IResult> DeleteUser(
      [FromServices] ConsultorioDbContext db,
      int id
    )
    {
      var user = await db.users.
        Where(user => user.id == id)
        .ExecuteDeleteAsync();

      if (user == 0) return Results.NotFound("Usuário não encontrado.");

      return Results.Ok("Usuário deletado");
    }
  }
}