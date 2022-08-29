import GameServerPacket from "./GameServerPacket";

export default class RequestPartyMatchDetail extends GameServerPacket {
  constructor(public roomId: number, public auto: boolean) {
    super();
  }

  write(): void {
    this.writeC(0x81);
    this.writeD(this.roomId);
    if (this.auto)
    {
        this.writeD(-1);
        this.writeD(1);
        this.writeD(1);
    }
    else
    {
        this.writeD(0);
        this.writeD(0);
        this.writeD(0);
    }
  }
}
