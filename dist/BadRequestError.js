import { APIError } from "./APIError.js";
export class BadRequestError extends APIError {
    constructor(message) {
        super(message, 400);
    }
}
