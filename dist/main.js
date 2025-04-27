var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Express from "express";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import { errorHandling } from "./middleware/errorHandling.js";
import { TodoController } from "./todo/todoController.js";
import { container } from "tsyringe";
class Server {
    constructor() {
        this._prismaClient = new PrismaClient();
        this.run = (...args_1) => __awaiter(this, [...args_1], void 0, function* (port = 5000) {
            this._server.listen(port, () => __awaiter(this, void 0, void 0, function* () {
                try {
                    yield this._prismaClient.$connect();
                    console.log(`Server is running on http://localhost:${port}`);
                }
                catch (error) {
                    console.error(error);
                }
                finally {
                    yield this._prismaClient.$disconnect();
                }
            }));
        });
        this._server = Express();
        this._prismaClient = new PrismaClient();
        container.registerInstance(PrismaClient, this._prismaClient);
        const todoController = container.resolve(TodoController);
        const todoRouter = todoController.getRouter();
        this._server.use(bodyParser.json());
        this._server.use("/", todoRouter);
        this._server.use(errorHandling);
    }
}
const server = new Server();
server.run(5000);
