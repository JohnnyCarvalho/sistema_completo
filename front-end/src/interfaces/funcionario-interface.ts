export interface FuncionarioInterface {

  // Essa interface será utilizada tando na lista de funcionarios como na lista de horários de atendimento
  nome?: string;
  segunda?: string;
  terca?: string;
  quarta?: string;
  quinta?: string;
  sexta?: string;
  sabado?: string;
  domingo?: string;
  horarios?: Array<string | number>;
}

