import './settings';
import Express, { Application, Request, Response } from 'express';
import { loggerMiddleware } from '@src/middlewares/func';
import demo from '@src/deep/demo';


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