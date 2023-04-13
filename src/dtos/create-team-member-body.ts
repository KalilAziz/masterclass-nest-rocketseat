import { IsNotEmpty, Length } from 'class-validator';
export class CreateTeamMemberBody {
  id: string;
  @IsNotEmpty({
    message: 'Nome não pode ser vazio',
  })
  @Length(3, 255, {
    message: 'Nome deve ter entre 3 e 255 caracteres',
  })
  name?: string;
  function?: string;
}

// instalar o pacote class validator: npm i class-validator
