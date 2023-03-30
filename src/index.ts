const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.listen(3000, (): void => {
    console.log(`Server Started at ${3000}`)
})