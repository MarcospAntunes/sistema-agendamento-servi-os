using System.Net.Mail;
using System.Text.RegularExpressions;
using DTOs;

namespace Validators
{
  public static class ValidateUserInfos
  {
    public static bool ValidateIfUserInfosIsNotEmpty(CreateUserDTO dto)
    {
      if (string.IsNullOrWhiteSpace(dto.Email)) return false;
      if (string.IsNullOrWhiteSpace(dto.Nome)) return false;
      if (string.IsNullOrWhiteSpace(dto.Telefone)) return false;
      if (string.IsNullOrWhiteSpace(dto.Password)) return false;

      return true;
    }

    public static bool isEmailValid(string email)
    {
      bool valid = true;

      try
      {
        var emailAdress = new MailAddress(email);
      } catch
      {
        valid = false;
      }

      return valid;
    }

    public static bool isPhoneNumberValid(string telefone)
    {
      if(telefone.StartsWith("+55")) return Regex.IsMatch(telefone, @"^\+55[0-9]{10,11}$");
      return Regex.IsMatch(telefone, @"^\+[0-9]{7,15}$");
    }

    public static bool isPasswordValid(string password)
    {
      if(!Regex.IsMatch(password, @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$")) return false;

      return true;
    }

    public static bool isNameValid(string nome)
    {
      if (!string.IsNullOrWhiteSpace(nome)) return false;
      if(nome.Length < 3) return false;
      return Regex.IsMatch(nome, @"^[\p{L}''-'\s]+$");
    }
  }
}