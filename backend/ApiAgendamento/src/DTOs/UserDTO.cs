namespace DTOs
{
  public record CreateUserDTO(string Nome, string Password, string Telefone, string Email);
  public record LoginUserDTO(string Email, string Password);

}