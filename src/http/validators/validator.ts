import { Request, Response, NextFunction } from "express";

import {validationResult, ValidationChain}  from "express-validator";

/**
 * validating the incoming request
 * @param validations
 */
export default (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        await Promise.all(validations.map((validation: ValidationChain) => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(422).json({ errors: errors.array() });
    };
};
