import GameClientPacket from "./GameClientPacket";

export default class PartyMatchDetail extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _roomId = this.readD();
    const _roomMaxMembers = this.readD();
    const _roomMinLevel = this.readD();
    const _roomMaxLevel = this.readD();
    const _roomLootType = this.readD();
    const _roomLocation = this.readD();
    const _roomTitle = this.readS();

    return true;
  }
}
