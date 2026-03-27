namespace Models
{
  public class User
  {
    public int id {get; set;}
    public int role_id {get; set;}
    public required string nome { get; set; }
    public required string password_hash { get; set; } 
    public required string telefone { get; set; }
    public required string email { get; set; }
    public DateOnly createdAt { get; }
  }
}