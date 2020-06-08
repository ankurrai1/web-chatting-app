const Users = [];

const addUser = function({id, name, room}){
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUsers = Users.find(user => user.name === name && user.room === room);
    if(existingUsers){
        return "User name already Taken";
    }
    const user = {id,  name, room};
    Users.push(user);

    return user;
}