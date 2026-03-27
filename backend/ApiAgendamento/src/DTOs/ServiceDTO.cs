namespace DTOs
{
  public record GetServiceDTO(string Nome, string Descricao, decimal Preco, int Duracao_min);
  public record CreateServiceDTO(string Nome, string Descricao, decimal Preco, int Duracao_min);
}