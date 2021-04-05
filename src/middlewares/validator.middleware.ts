import { Request, Response, NextFunction } from 'express';
import { Schema } from '@hapi/joi';

import { errorResponse } from '@utils/http';

export default function validatorMiddleware(
  schema: Schema,
  property: keyof Request,
): (req: Request, res: Response, next: NextFunction) => Response | void {
  return (req, res, next): Response | void => {
    try {
      const validated = schema.validate(req[property]);

      if (validated.error) {
        return errorResponse(res, validated.error);
      }
    } catch (error) {
      return errorResponse(res, error);
    }

    next();
  };
}
