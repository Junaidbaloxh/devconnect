import express from 'express';
import cors from 'cors';
import helmet from 'helmet';


import healthRoutes from './routes/health.routes.js';
import { notFound } from './middleware/not-found.js';
import { errorHandler } from './middleware/error-handler.js';

const app = express();

app.disable('x-powered-by');

app.use(helmet());

app.use(
    cors({
        origin : process.env.FRONTEND_URL || "http://localhost:5173"
    })
)

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

app.use("/api/v1/health", healthRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;