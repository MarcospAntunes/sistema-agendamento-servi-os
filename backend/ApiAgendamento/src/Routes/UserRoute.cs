using Data;
using DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Constants;
using Helpers;

namespace Routes
{
  public class UserRoute
  {
    public static async Task<IResult> GetUserById(
      [FromServices] ConsultorioDbContext db,
      ClaimsPrincipal user,
      int id
    )
    {
      var loggedId  = user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
      if(loggedId is null) return Results.Unauthorized();
      if(int.Parse(loggedId) != id && !VerifyRole.IsAdmin(user)) return Results.Forbid();

      var currentUser = await db.users
      .AsNoTracking()
      .FirstOrDefaultAsync(user => user.id == id);

      if (currentUser is null) return Results.NotFound("Usuário não encontrado.");
      return Results.Ok(new { currentUser.id, currentUser.email, currentUser.nome, currentUser.telefone, currentUser.role_id });
    }

    public static async Task<IResult> CreateUser(
      [FromServices] ConsultorioDbContext db,
      [FromBody] CreateUserDTO dto
    )
    {
      var checkIfUserExists = await db.users.FirstOrDefaultAsync(user => user.email == dto.Email);

      if (checkIfUserExists is not null) return Results.Conflict("Email já cadastrado");

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

      return Results.Created($"/users/{user.id}", new { user.id, user.email });
    }

    public static async Task<IResult> GetUserLogged(ClaimsPrincipal user)
    {
      var id = user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
      var email = user.FindFirst(ClaimTypes.Email)?.Value;
      var role = user.FindFirst(ClaimTypes.Role)?.Value;

      return Results.Ok(new { id, email, role });
    }

    public static async Task<IResult> LoginUser(
      [FromServices] ConsultorioDbContext db,
      [FromBody] LoginUserDTO dto,
      HttpContext httpContext
      )
    {
      var user = await db.users.FirstOrDefaultAsync(user => user.email == dto.Email);
      if (user is null) return Results.Unauthorized();

      bool checkPassword = BCrypt.Net.BCrypt.Verify(dto.Password, user.password_hash);
      if (!checkPassword) return Results.Unauthorized();

      var claims = new List<Claim>
      {
        new Claim(ClaimTypes.NameIdentifier, user.id.ToString()),
        new Claim(ClaimTypes.Email, user.email),
        new Claim(ClaimTypes.Role, user.role_id.ToString())
      };

      var claimsIdentify = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

      var authProperties = new AuthenticationProperties
      {
        IsPersistent = true,
        ExpiresUtc = DateTimeOffset.UtcNow.UtcDateTime.AddHours(2)
      };

      //Criar cookie no navegador do usuário
      await httpContext.SignInAsync(
        CookieAuthenticationDefaults.AuthenticationScheme,
        new ClaimsPrincipal(claimsIdentify),
        authProperties
      );

      return Results.Ok(new { user.id, user.email, user.nome, user.telefone, user.role_id });
    }

    public static async Task<IResult> UpdateUser(
      [FromServices] ConsultorioDbContext db,
      [FromBody] CreateUserDTO dto,
      ClaimsPrincipal user,
      int id
    )
    {
      var loggedId = user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
      if (loggedId != id.ToString()) return Results.Unauthorized();

      var currentUser = await db.users.FindAsync(id);
      if (currentUser is null) return Results.NotFound("Usuário não encontrado");

      if (!string.IsNullOrWhiteSpace(dto.Email)) currentUser.email = dto.Email;
      if (!string.IsNullOrWhiteSpace(dto.Nome)) currentUser.nome = dto.Nome;
      if (!string.IsNullOrWhiteSpace(dto.Telefone)) currentUser.telefone = dto.Telefone;
      if (!string.IsNullOrWhiteSpace(dto.Password)) currentUser.password_hash = BCrypt.Net.BCrypt.HashPassword(dto.Password, 12);

      await db.SaveChangesAsync();

      return Results.Ok("Usuário atualizado com sucesso");
    }

    public static async Task<IResult> DeleteUser(
      [FromServices] ConsultorioDbContext db,
      ClaimsPrincipal user,
      int id
    )
    {
      var loggedId = user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
      if (loggedId != id.ToString()) return Results.Unauthorized();

      var currentUser = await db.users.
        Where(user => user.id == id)
        .ExecuteDeleteAsync();

      if (currentUser == 0) return Results.NotFound("Usuário não encontrado.");

      return Results.NoContent();
    }
  }
}