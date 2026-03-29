using System.Security.Claims;
using Helpers;

namespace Security
{
  public static class AuthorizationService
  {
    public static IResult? CanAccessUser(ClaimsPrincipal user, int id)
    {
      var loggedId  = user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
      if(loggedId is null) return ResultsHelper.Unauthorized("Autenticação inválida");
      if(int.Parse(loggedId) != id && !VerifyRole.IsAdmin(user)) return ResultsHelper.Forbidden("Acesso negado");

      return null; 
    }
  }
}