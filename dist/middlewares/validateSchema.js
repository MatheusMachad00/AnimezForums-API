"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchemaMiddleware = void 0;
function validateSchemaMiddleware(schema) {
    return (req, res, next) => {
        const validation = schema.validate(req.body);
        if (validation.error) {
            return res.status(422).send(validation.error.details.map(detail => detail.message));
        }
        next();
    };
}
exports.validateSchemaMiddleware = validateSchemaMiddleware;
;
