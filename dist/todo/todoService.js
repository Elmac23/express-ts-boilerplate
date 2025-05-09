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
import { PrismaClient } from "@prisma/client";
import { injectable } from "tsyringe";
let TodoService = class TodoService {
    constructor(prismaClient) {
        this._prismaClient = prismaClient;
    }
    createTodo(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield this._prismaClient.todo.create({
                data: {
                    title,
                },
            });
            return todo;
        });
    }
    getTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield this._prismaClient.todo.findMany({});
            return todos;
        });
    }
    getTodoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield this._prismaClient.todo.findUnique({ where: { id } });
            return todo;
        });
    }
};
TodoService = __decorate([
    injectable(),
    __metadata("design:paramtypes", [PrismaClient])
], TodoService);
export { TodoService };
