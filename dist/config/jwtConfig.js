"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const jwtConfig = {
    secret: process.env.JWT_SECRET || 'chave_mestra_olympia_2026',
    expiresIn: '7d' // Garante que o TS veja isso como uma string válida
};
exports.default = jwtConfig;
