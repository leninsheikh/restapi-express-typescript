import BaseRepository from '@src/database/repositories/base.repository';
import User from '@src/database/models/user';
import bcrypt from 'bcrypt';

interface UserData {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    
}

export default class UserRepository extends BaseRepository<User> {
    constructor() {
        super(User)
    }
    async save(data: UserData): Promise<User> {
        const m = User.build(data);
        m.password = await bcrypt.hash(data.password, 10)
        return m.save();
    }
}

