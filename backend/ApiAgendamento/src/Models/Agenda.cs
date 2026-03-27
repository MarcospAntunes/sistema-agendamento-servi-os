using System.ComponentModel.DataAnnotations;

namespace Models
{
  public class Agenda
  {
    [Key]
    public int id { get; set; }
    public int service_id { get; set; }
    public int user_id { get; set; }
    public required DateTime data_hora { get; set; }
    public required int duracao_min {get; set;}
  }
}