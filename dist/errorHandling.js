var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { StatusCodes } from "http-status-codes";
export function errorHandling(err, req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(err.message);
        const { statusCode } = err;
        res
            .status(statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ data: err.message });
    });
}
