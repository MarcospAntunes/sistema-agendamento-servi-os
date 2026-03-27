using System.Security.Claims;
using Constants;

namespace Helpers
{
  static class VerifyRole
  {
    public static bool IsAdmin(ClaimsPrincipal user)
    {
      var role = user.FindFirst(ClaimTypes.Role)?.Value;
      return role == Roles.Admin;
    }
  }
}