"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes")); // Corrected to include semicolon
const path = require("path");
// Load environment variables from a .env file
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8989;
app.use(express_1.default.static(path.join(__dirname, 'public')));
app.use(express_1.default.json());
app.use('/api', usersRoutes_1.default);
app.get('/api', (req, res) => {
    res.send('Hello, TypeScript with Node.js!');
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});
