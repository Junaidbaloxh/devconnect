import mongoose from "mongoose";

export function getHealth(req, res) {
    const databaseConnected = mongoose.connection.readyState === 1;

    return res.status(databaseConnected ? 200 : 503).json({
        success: databaseConnected,
        message: databaseConnected ? "Devconnect API is healthy" : "Database is not connected",

        data: {
            database: databaseConnected ? "connected" : "disconnected",
            environtment: process.env.NODE_ENV,
            timestamp: new Date().toISOString(),
        }
    })

}