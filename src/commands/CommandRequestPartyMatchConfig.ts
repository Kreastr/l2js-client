import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import RequestPartyMatchConfig from "../network/outgoing/game/RequestPartyMatchConfig";

export default class CommandRequestPartyMatchConfig extends AbstractGameCommand {
  execute(auto: number, location: number, myLevel: number): void {
    this.GameClient?.sendPacket(new RequestPartyMatchConfig(auto, location, myLevel));
  }
}
