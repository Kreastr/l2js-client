import GameServerPacket from "./GameServerPacket";

export default class RequestListPartyMatchingWaitingRoom extends GameServerPacket {
  constructor(public page: number, public minLevel: number, public maxLevel: number, public mode: number) {
    super();
  }

  write(): void {
    this.writeC(0x31);
    this.writeD(this.page);
    this.writeD(this.minLevel);
    this.writeD(this.maxLevel);
    this.writeD(this.mode);
  }
}
