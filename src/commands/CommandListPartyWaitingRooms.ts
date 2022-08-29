import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import RequestListPartyMatchingWaitingRoom from "../network/outgoing/game/RequestListPartyMatchingWaitingRoom";

export default class CommandListPartyWaitingRooms extends AbstractGameCommand<GameClient> {
  execute(text: string): void {
    this.Client?.sendPacket(new RequestListPartyMatchingWaitingRoom(0, 0, 20, 0));
  }
}
