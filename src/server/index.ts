import morgan from "morgan";
import express from "express";
import cors from "cors";
import { app } from "./app.js";
import { corsOptions } from "./utils/cors.js";
import {
  generalError,
  notFound,
} from "./middlewares/errors/errorsMiddleware.js";
import pingRouter from "../features/ping/router/pingRouter.js";
import tattoosRouter from "../features/tattoos/router/tattoosRouter.js";

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());

app.use("/tattoos", tattoosRouter);
app.get("/", pingRouter);

app.use(notFound);
app.use(generalError);
