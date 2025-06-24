import express from 'express';
import  Router  from './routes/index'
import cors from 'cors';
import {PORT} from '@repo/backend-common/config'

const port = PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors())
app.use('/api', Router);


app.get('/', (req, res) => {
    res.send('Server online!')
})

app.listen(port, () => {
    console.log("Server running on port : ", port)
})