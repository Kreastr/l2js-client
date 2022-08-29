import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import RequestListPartyMatchingWaitingRoom from "../network/outgoing/game/RequestListPartyMatchingWaitingRoom";

export default class CommandListPartyWaitingRooms extends AbstractGameCommand {
  execute(page: number, minLevel: number, maxLevel: number, mode: number): void {
    this.GameClient?.sendPacket(new RequestListPartyMatchingWaitingRoom(page, minLevel, maxLevel, mode));
  }
}
