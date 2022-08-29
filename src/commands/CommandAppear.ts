import L2Object from "../entities/L2Object";
import Appearing from "../network/outgoing/game/Appearing";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandAppear extends AbstractGameCommand {
  execute(): void {
  this.GameClient?.sendPacket(
    new Appearing()
  );
  }
}
