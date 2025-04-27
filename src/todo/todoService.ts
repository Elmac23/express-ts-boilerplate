import "reflect-metadata";

import { PrismaClient } from "@prisma/client";
import { injectable } from "tsyringe";

@injectable()
export class TodoService {
  private _prismaClient: PrismaClient;
  constructor(prismaClient: PrismaClient) {
    this._prismaClient = prismaClient;
  }

  async createTodo(title: string) {
    const todo = await this._prismaClient.todo.create({
      data: {
        title,
      },
    });
    return todo;
  }

  async getTodos() {
    const todos = await this._prismaClient.todo.findMany({});
    return todos;
  }

  async getTodoById(id: string) {
    const todo = await this._prismaClient.todo.findUnique({ where: { id } });
    return todo;
  }
}
