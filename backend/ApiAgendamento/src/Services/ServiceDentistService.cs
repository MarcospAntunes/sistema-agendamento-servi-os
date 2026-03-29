using System.ComponentModel.DataAnnotations;
using DTOs;
using Models;

namespace Services
{
  public static class ServiceDentistService
  {
    public static void UpdateFields(GetServiceDTO dto, Service service) {
      
      if(string.IsNullOrWhiteSpace(dto.Nome)) throw new ValidationException("Nome é obrigatório");
      service.nome = dto.Nome;

      if(string.IsNullOrWhiteSpace(dto.Descricao)) throw new ValidationException("Descrição é obrigatória");
      service.descricao = dto.Descricao;

      if(dto.Preco > 0)  throw new ValidationException("Preço tem que ser maior que 0");
      service.preco = dto.Preco;

      if(dto.Duracao_min > 0)  throw new ValidationException("Duração do serviço precisa ser maior que 0 minutos");
      service.duracao_min = dto.Duracao_min;
    }
  }
}