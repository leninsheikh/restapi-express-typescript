import './settings';
import Express, { Application, Request, Response } from 'express';
import { loggerMiddleware } from '@src/middlewares/func';
import demo from '@src/deep/demo';
import User from '@src/database/models/user';


/**
 * logging Application name
 */
demo.appName();

/**
 * initializing Express application
 */
const app: Application = Express();


/**
 * adding logger middleware
 */
app.use(loggerMiddleware);

User.create({
    'firstName': 'Ursa',
    'email': 'u@u.uu',
    "lastName": "last"
}).then((user: User) => {
    console.log(user.lastName);
}).catch( (e: Error) => {
    console.log(e.message)
})

/**
 * routes
 */
app.get('/', (req: Request, res: Response) => {
    res.send("haha");
})




/**
 * listening to port 3000
 */
app.listen(3000, () => console.log("Server started at localhost:3000"));