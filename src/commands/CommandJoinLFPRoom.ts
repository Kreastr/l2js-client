import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import RequestPartyMatchDetail from "../network/outgoing/game/RequestPartyMatchDetail";

export default class CommandJoinLFPRoom extends AbstractGameCommand {
  execute(roomId: number, auto: boolean): void {
    this.GameClient?.sendPacket(new RequestPartyMatchDetail(roomId, auto));
  }
}
