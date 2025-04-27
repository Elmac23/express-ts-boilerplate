import "reflect-metadata";

import Express, { RequestHandler } from "express";
import { Todo, Prisma, PrismaClient } from "@prisma/client";
import { injectable } from "tsyringe";
import { todoMiddleware } from "./middleware.js";
import { TodoService } from "./todoService.js";
import { BaseController } from "../baseController.js";

@injectable()
export class TodoController extends BaseController {
  private _todoService: TodoService;

  constructor(todoService: TodoService) {
    super();
    this._todoService = todoService;
    this._router.post("/", todoMiddleware, this.addTodo);
    this._router.get("/", this.getTodos);
    this._router.get("/:id", this.getTodoById);
  }

  addTodo: RequestHandler<{}, Todo, Prisma.TodoCreateInput> = async (
    req,
    res
  ) => {
    const { title } = req.body;

    const todo = await this._todoService.createTodo(title);
    res.status(200).json(todo);
  };

  getTodos: RequestHandler = async (req, res) => {
    const todos = await this._todoService.getTodos();
    res.status(200).json(todos);
  };

  getTodoById: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const todo = await this._todoService.getTodoById(id);
    res.status(200).json(todo);
  };
}
