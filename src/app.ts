import express from "express";
import cors from "cors";
require('dotenv').config();

import route from "./routes";

const app = express();

app.use(cors());

app.use(route);

app.listen(3000, () => {
  console.log('server is running! 🔥');
});