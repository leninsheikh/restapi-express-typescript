import jwt from 'jsonwebtoken';
import User from '@src/database/models/user';
import bcrypt from 'bcrypt'; 
import { Request, Response } from 'express';
import UserRepository from '@src/database/repositories/user/user.repository';


const repo = new UserRepository();

export default {
    /**
     * login user
     * @method login
     * @param {Request} req
     * @param {Response} res
     * @returns {Promise<*|createServer.NextHandleFunction|Json|Response|Promise<any>|*>}
     */
    async login(req: Request, res: Response) {
        let {email, password} = req.body;
        let secret = process.env.JWT_SECRET || '';

        // res.send(user);
        try {
            let user = await User.findOne({where: {email}});
            if (user) {
                if (await bcrypt.compare(password, user.password)) {
                    let expiresIn = 60 * 60;
                    const opts = {expiresIn};
                    const token = jwt.sign({email: user.email, id: user.id}, secret, opts);
                    return res.status(200).send({token, expiresIn})
                }
                return res.status(422).json({message: 'password incorrect!'})
            }
            res.status(422).json({message: `${email} does not exist in database`})
        } catch (e) {
            res.status(400).send('error' + e,)
        }
    },
    /**
     * user registration
     * @method register
     * @param {Request} req 
     * @param {Response} res
     * @returns {Promise<User> | JSON | Response}
     */
    async register(req: Request, res: Response) {
        console.log('i m register')
        try {
            let user = await repo.save(req.body);
            res.json(user);
        } catch (e) {
            console.log(e);
            res.json(e);
        }
    },

    /**
     * get authenticated user details
     * @param req
     * @param res
     * @returns {Promise<*|createServer.NextHandleFunction|Json|Response|Promise<User>>}
     */
    async user(req: Request, res: Response) {
        return res.status(200).json(req.user)
    }
};
