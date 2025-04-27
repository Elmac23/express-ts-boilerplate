var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "reflect-metadata";
import { injectable } from "tsyringe";
import { todoMiddleware } from "./middleware.js";
import { TodoService } from "./todoService.js";
import { BaseController } from "../baseController.js";
let TodoController = class TodoController extends BaseController {
    constructor(todoService) {
        super();
        this.addTodo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { title } = req.body;
            const todo = yield this._todoService.createTodo(title);
            res.status(200).json(todo);
        });
        this.getTodos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const todos = yield this._todoService.getTodos();
            res.status(200).json(todos);
        });
        this.getTodoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const todo = yield this._todoService.getTodoById(id);
            res.status(200).json(todo);
        });
        this._todoService = todoService;
        this._router.post("/", todoMiddleware, this.addTodo);
        this._router.get("/", this.getTodos);
        this._router.get("/:id", this.getTodoById);
    }
};
TodoController = __decorate([
    injectable(),
    __metadata("design:paramtypes", [TodoService])
], TodoController);
export { TodoController };
