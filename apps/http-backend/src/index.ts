import express from 'express';
import  Router  from './routes/index'
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors())
app.use('/api', Router);


app.get('/', (req, res) => {
    res.send('Server online!')
})

app.listen(3001, () => {
    console.log("Server running on port 3001")
})