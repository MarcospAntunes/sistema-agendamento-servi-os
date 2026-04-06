interface CreateUserParams {
  nome: string;
  email: string;
  telefone: string;
  password: string;
}

interface CreateServiceParams {
  nome: string;
  descricao: string;
  preco: string; // Definido como string para não haver perda de precisão
  duracao_min: number;
}

interface CreateAgendamentoParams {
  data_hora: string;
  service_id: number;
}

interface PatchServiceParams {
  id: number;
  nome?: string;
  descricao?: string;
  preco?: string; // Definido como string para não haver perda de precisão
  duracao_min?: number;
}

interface PatchUserParams {
  id: number;
  nome?: string;
  email?: string;
  telefone?: string;
  password?: string;
}

interface LoginUserParams {
  email: string;
  password: string;
}

export type { CreateUserParams, CreateServiceParams, CreateAgendamentoParams, PatchServiceParams, PatchUserParams, LoginUserParams };