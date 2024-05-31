import ClassRoom from "./0-classroom";

export default function initializeRooms() {
let list = [];
let value = 0;
    for (let i=0; i < 3; i++){
        if(i===0){
            value = 19;
        } else if (i===1){
            value = 20;
        } else{
            value = 34
        }
        const room = new ClassRoom(value);
        list.push(room);
    }
    return list;
}