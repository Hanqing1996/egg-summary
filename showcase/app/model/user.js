'use strict';

const users = [{
    id: 1,
    username: 'user1',
    password: '123456'
}, {
    id: 2,
    username: 'user2',
    password: '123456'
}, {
    id: 3,
    username: 'user3',
    password: '123456'
}]

class UserModel {
    async list() {
        return users
    }

    async getOneById(id) {
        const user = users.find(p => p.id == id);
        return user
    }

    async addOne(user) {
        if (!user.id&&!user.name) users.push(user);
    }

    async login(username,password){
        const user = users.find(u => u.username == username&&u.password==password);
        return user
    }

    async isUserIdValidate(userId){
        const result=await this.getOneById(userId);
        console.log(!!result);
        return !!result
    }

}

module.exports = UserModel;