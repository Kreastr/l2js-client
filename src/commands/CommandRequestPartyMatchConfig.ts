import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import RequestPartyMatchConfig from "../network/outgoing/game/RequestPartyMatchConfig";

export default class CommandRequestPartyMatchConfig extends AbstractGameCommand {
  execute(text: string): void {
    this.GameClient?.sendPacket(new RequestPartyMatchConfig(0, 5, 0));
  }
}
