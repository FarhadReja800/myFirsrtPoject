"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("node:inspector/promises");
const node_process_1 = require("node:process");
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
promises_1.console.log(process, (0, node_process_1.cwd)());
