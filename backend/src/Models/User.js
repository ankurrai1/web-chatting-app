let Users = [];

const addUser = function({id, name, room}){
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = Users.find(user => user.name === name && user.room === room);
    if(!name || !room) return { error: 'Username and room are required.' };
    if(existingUser) return { error: 'Username is taken.' };
  
    const user = {id,  name, room};
    Users.push(user);
    return {user};
}

const removeUser = function(id) {
    const index = Users.find(user => user.id === id);
    if(index != -1){
        return Users.splice(index, 1)[0];
    }
}

const getUser = function(id){
    return Users.find(user => user.id === id);
}

const getUsersInRoom = function(room){
    room = room.trim().toLowerCase();
    return Users.filter(user => user.room === room);
}


module.exports = {addUser, getUser, getUsersInRoom, removeUser};