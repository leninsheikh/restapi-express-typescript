import BaseRepository from '@src/database/repositories/base.repository';
import User from '@src/database/models/user';
import bcrypt from 'bcrypt';

interface UserInterface {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    
}

export default class UserRepository extends BaseRepository<User> {
    /**
     * constructor of UserRepository
     * @constructor
     */
    constructor() {
        super(User)
    }

    /**
     * @method save
     * @param {UserInterface} data 
     * @returns {Promise<User>}
     */
    async save(data: UserInterface): Promise<User> {
        const m = User.build(data);
        m.password = await bcrypt.hash(data.password, 10)
        return m.save();
    }
}

