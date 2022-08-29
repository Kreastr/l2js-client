import GameClientPacket from "./GameClientPacket";

export default class ListPartyWaiting extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _listIsNotEmpty = this.readD();
    const _roomId = this.readD();
    const _roomsCount = this.readD();
    
    const _rooms: any[] = [];
    
    for (let i = 0; i < _roomsCount; i++)
    {
        let room: { id: number,
                    title: string,
                    location: number,
                    minLevel: number,
                    maxLevel: number,
                    maxMembers: number,
                    owner: string,
                    membersCount: number,
                    members: any[]} = {id: 0,
                        title: "",
                        location: 0,
                        minLevel: 0,
                        maxLevel: 0,
                        maxMembers: 0,
                        owner: "",
                        membersCount: 0,
                        members: []};
        room.id = this.readD();
        room.title = this.readS();
        room.location = this.readD();
        room.minLevel = this.readD();
        room.maxLevel = this.readD();
        room.maxMembers = this.readD();
        room.owner = this.readS();
        room.membersCount = this.readD();
        room.members = [];
        for (let j = 0; j < _roomsCount; j++)
        {
            let member = {classId: 0,
                          name: ""};

            member.classId = this.readD();
            member.name = this.readS();

            room.members.push(member);
        }
        _rooms.push(room);
    }

    return true;
  }
}
