import Express, { Application, Request, Response } from 'express';
import BodyParser from 'body-parser';

import './settings';
import '@src/services/passport.service';
import { loggerMiddleware } from '@src/middlewares/func';
import demo from '@src/deep/demo';
import routes from '@src/routes'


/**
 * logging Application name
 */
demo.appName();

/**
 * initializing Express application
 */
const app: Application = Express();

/**
 * registering body-parser
 */
app.use(BodyParser.urlencoded({extended: false}));


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
 * registering routes
 */
app.use(routes);


/**
 * listening to port 3000
 */
app.listen(3000, () => console.log("Server started at localhost:3000"));