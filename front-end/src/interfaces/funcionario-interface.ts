export interface FuncionarioInterface {

  // Essa interface será utilizada tando na lista de funcionarios como na lista de horários de atendimento
  name?: string;
  segunda?: string | boolean;
  terca?: string | boolean;
  quarta?: string | boolean;
  quinta?: string | boolean;
  sexta?: string | boolean;
  sabado?: string | boolean;
  domingo?: string | boolean;
  horarios?: Array<string | number>;
}

