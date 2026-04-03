using Data;
using DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;
using System.Security.Claims;
using Helpers;
using Security;
using Validators;
using Services;
using System.ComponentModel.DataAnnotations;

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
      var authResult = AuthorizationService.CanAccessUser(user, id);
      if (authResult is not null) return authResult;

      var currentUser = await db.users
      .AsNoTracking()
      .FirstOrDefaultAsync(user => user.id == id);

      if (currentUser is null) return ResultsHelper.NotFound("Usuário não encontrado.");

      return ResultsHelper.Success(
        new { currentUser.id, currentUser.email, currentUser.nome, currentUser.telefone, currentUser.role_id },
        "Usuário encontrado"
      );
    }

    public static async Task<IResult> CreateUser(
      [FromServices] ConsultorioDbContext db,
      [FromBody] CreateUserDTO dto
    )
    {

      if (!ValidateUserInfos.ValidateIfUserInfosIsNotEmpty(dto)) return ResultsHelper.BadRequest("Campo(s) preenchido incorretamente");
      if (!ValidateUserInfos.isEmailValid(dto.Email)) return ResultsHelper.BadRequest("Email inválido");

      var checkIfUserExists = await db.users.FirstOrDefaultAsync(user => user.email == dto.Email);
      if (checkIfUserExists is not null) return ResultsHelper.Conflict("Email já cadastrado");

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

      return ResultsHelper.Created(new { user.id, user.email, user.telefone }, user.id, "/users", "Usuário cadastrado com sucesso");
    }

    public static async Task<IResult> GetUserLogged(ClaimsPrincipal user)
    {
      var id = user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
      var email = user.FindFirst(ClaimTypes.Email)?.Value;
      var role = user.FindFirst(ClaimTypes.Role)?.Value;
      var telefone = user.FindFirst(ClaimTypes.MobilePhone)?.Value;
      var nome = user.FindFirst(ClaimTypes.Name)?.Value;

      return ResultsHelper.Success(new { id, nome, email, role, telefone });
    }

    public static async Task<IResult> LoginUser(
      [FromServices] ConsultorioDbContext db,
      [FromBody] LoginUserDTO dto,
      HttpContext httpContext
      )
    {
      var user = await db.users.AsNoTracking().FirstOrDefaultAsync(user => user.email == dto.Email);
      if (user is null) return ResultsHelper.Unauthorized("Autenticação Inválida");

      bool checkPassword = BCrypt.Net.BCrypt.Verify(dto.Password, user.password_hash);
      if (!checkPassword) return ResultsHelper.Unauthorized("Autenticação inválida");

      await Cookie.CreateAsync(httpContext, user);

      return ResultsHelper.Success(new { user.id, user.email, user.nome, user.telefone, user.role_id }, "Usuário autenticado com sucesso");
    }

    public static async Task<IResult> UpdateUser(
      [FromServices] ConsultorioDbContext db,
      [FromBody] PatchUserDTO dto,
      ClaimsPrincipal user,
      int id
    )
    {
      var authResult = AuthorizationService.CanAccessUser(user, id);
      if (authResult is not null) return authResult;

      var currentUser = await db.users.FindAsync(id);
      if (currentUser is null) return ResultsHelper.NotFound("Usuário não encontrado");

      try
      {
        UserService.UpdateFields(currentUser, dto);
        await db.SaveChangesAsync();

        return ResultsHelper.Success(
          new { currentUser.id, currentUser.email, currentUser.nome, currentUser.telefone, currentUser.role_id },
          "Usuário atualizado com sucesso"
        );
      }
      catch (ValidationException error)
      {
        return ResultsHelper.BadRequest(error.Message);
      }
    }

    public static async Task<IResult> DeleteUser(
      [FromServices] ConsultorioDbContext db,
      ClaimsPrincipal user,
      int id
    )
    {
      var authResult = AuthorizationService.CanAccessUser(user, id);
      if (authResult is not null) return authResult;

      var currentUser = await db.users.
        Where(user => user.id == id)
        .ExecuteDeleteAsync();

      if (currentUser == 0) return ResultsHelper.NotFound("Usuário não encontrado.");

      return Results.NoContent();
    }
  }
}