namespace Models
{
  public class Service
  {
    public int id {get; set;}
    public required string nome { get; set; }
    public required string descricao { get; set; }
    public required decimal preco { get; set; }
    public required int duracao_min { get; set; }

  }
}