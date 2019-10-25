import passportJwt from 'passport-jwt'
import passport from 'passport';
import User from '@src/database/models/user';


const opts = {
    jwtFromRequest : passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

interface JwtPayload {
    email: string
}

/**
 * verifying token
 * @type {Authenticator}
 */
module.exports = passport.use(new passportJwt.Strategy(opts, async (payload: JwtPayload , done: Function) => {
    try {
        let user = await User.findOne({where:{email: payload.email}});
        if (user) {
            return done(null, user)
        }
        return done(null, false)
    } catch (e) {
        return e;
    }
}) );
