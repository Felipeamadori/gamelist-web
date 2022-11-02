import { Game } from "./game.model";
import { Usuario } from "./usuario.model";

export class UsuarioGame {
    id: Number;
    game: Game;
    usuario: Usuario;
    nota: Number;
    comentario: String;
}