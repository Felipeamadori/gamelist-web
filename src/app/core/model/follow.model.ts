import { UsuarioDto } from "../dto/usuario-dto";

export class Follow {
  id: Number;
  followe: UsuarioDto;
  following: UsuarioDto;
}