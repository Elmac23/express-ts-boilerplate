import Express from "express";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import { errorHandling } from "./middleware/errorHandling.js";
import { TodoService } from "./todo/todoService.js";
import { TodoController } from "./todo/todoController.js";
import { container } from "tsyringe";

class Server {
  private _server: Express.Application;
  private _prismaClient = new PrismaClient();
  constructor() {
    this._server = Express();
    this._prismaClient = new PrismaClient();

    container.registerInstance(PrismaClient, this._prismaClient);
    const todoController = container.resolve(TodoController);
    const todoRouter = todoController.getRouter();

    this._server.use(bodyParser.json());
    this._server.use("/", todoRouter);
    this._server.use(errorHandling);
  }

  run = async (port: number = 5000) => {
    this._server.listen(port, async () => {
      try {
        await this._prismaClient.$connect();
        console.log(`Server is running on http://localhost:${port}`);
      } catch (error) {
        console.error(error);
      } finally {
        await this._prismaClient.$disconnect();
      }
    });
  };
}

const server = new Server();
server.run(5000);
