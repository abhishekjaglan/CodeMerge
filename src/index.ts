import express from 'express';
import dotenv from 'dotenv';
import router from './Routes/router';

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api', router);

app.listen(process.env.PORT, () => {
    console.log(`Http server running on port ${process.env.PORT}!`);
});