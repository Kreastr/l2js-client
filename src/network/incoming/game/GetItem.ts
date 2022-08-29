import GameClientPacket from "./GameClientPacket";

export default class GetItem extends GameClientPacket {
  objId : number = 0;
  x: number = 0;
  y: number = 0;
  z: number = 0;
  
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _playerId = this.readD();
    this.objId = this.readD();

    const [x, y, z] = this.readLoc();
    this.x = x;
    this.y = y;
    this.z = z;

    return true;
  }
}
