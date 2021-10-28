import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import index from './routes/api';
import errorsHandler from './utils/handler';
import cors from 'cors';
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "./documentation/swagger.json"

export default function createServer(){
    dotenv.config();
    const app = express();

    app.use("/apiDocs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
    app.use(express.json());
    app.use(cors());
    app.use(index);
    app.use(errorsHandler);

    return app;
}

