using System.ComponentModel.DataAnnotations;
using DTOs;
using Models;

namespace Services
{
  public static class ServiceDentistService
  {
    public static void UpdateFields(GetServiceDTO dto, Service service) {
      if(!string.IsNullOrWhiteSpace(dto.Nome)) service.nome = dto.Nome;
      if(!string.IsNullOrWhiteSpace(dto.Descricao)) service.descricao = dto.Descricao;
      if(dto.Preco.HasValue)  service.preco = dto.Preco.Value;
      if(dto.Duracao_min.HasValue)  service.duracao_min = dto.Duracao_min.Value;
    }
  }
}