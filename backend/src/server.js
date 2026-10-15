import "dotenv/config";

import app from './app.js';
import { connectDB } from './config/database.js';

const PORT = Number(process.env.PORT) || 4000;

async function startServer()
{
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Devconnect API running on PORT http://localhost${PORT}`);
        })
    } catch (error)
    {
        console.error('Failed to starty Devconnect : ', error.message);
        process.exit(1);
    }
}

startServer();