import Express from "express";
export class BaseController {
    constructor() {
        this._router = Express.Router();
    }
    getRouter() {
        return this._router;
    }
}
