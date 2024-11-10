"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = __importDefault(require("../knexfile")); // Import your Knex config directly
// Initialize Knex with the appropriate environment configuration
const db = (0, knex_1.default)(knexfile_1.default.development); // or use knexConfig[process.env.NODE_ENV || 'development'] if you're working with multiple environments
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield db('users').select('*'); // Ensure 'users' is the correct table name
        console.log(users);
        res.status(200).json(users); // Uncomment this line to send response back to the client
    }
    catch (err) {
        res.status(400).send(`Error retrieving user: ${err.message}`);
    }
});
exports.getUsers = getUsers;
