import GameServerPacket from "./GameServerPacket";

export default class RequestPartyMatchConfig extends GameServerPacket {
  constructor(public auto: number, public location: number, public myLevel: number) {
    super();
  }

  write(): void {
    this.writeC(0x7F);
    this.writeD(this.auto);
    this.writeD(this.location);
    this.writeD(this.myLevel);
  }
}
