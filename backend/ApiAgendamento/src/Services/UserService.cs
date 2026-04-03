using System.ComponentModel.DataAnnotations;
using DTOs;
using Models;
using Validators;

namespace Services
{
  public static class UserService
  {
    public static void UpdateFields(User user, PatchUserDTO dto)
    {
      if (!string.IsNullOrWhiteSpace(dto.Email))
      {
        if (ValidateUserInfos.isEmailValid(dto.Email)) throw new ValidationException("Email inválido");
        user.email = dto.Email;
      }

      if (!string.IsNullOrWhiteSpace(dto.Telefone))
      {
        if (ValidateUserInfos.isPhoneNumberValid(dto.Telefone)) throw new ValidationException("Telefone incorreto");
        user.telefone = dto.Telefone;
      }

      if (!string.IsNullOrWhiteSpace(dto.Password))
      {
        if (!ValidateUserInfos.isPasswordValid(dto.Password)) throw new ValidationException("Senha não atende os requisitos");
        user.password_hash = BCrypt.Net.BCrypt.HashPassword(dto.Password, 12);
      }

      if (!string.IsNullOrWhiteSpace(dto.Nome))
      {
        if (!ValidateUserInfos.isNameValid(dto.Nome)) throw new ValidationException("Nome inválido");
        user.nome = dto.Nome;
      }
    }
  }
}