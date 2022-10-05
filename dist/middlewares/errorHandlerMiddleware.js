"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ERRORS = {
    unauthorized: 401,
    conflict: 409,
    not_found: 404,
    bad_request: 400,
    token_invalid: 498,
    unprocessable_entity: 422
};
function errorHandlerMiddleware(err, req, res, next) {
    console.log(err);
    const type = err.type;
    let statusCode = ERRORS[type];
    if (!statusCode)
        statusCode = 500; // any other types
    return res.sendStatus(statusCode); // internal server error
}
exports.default = errorHandlerMiddleware;
;
