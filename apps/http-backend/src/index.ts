import express from 'express';
import  Router  from './routes/index'

const app = express();

app.use(express.json());
app.use('/api', Router);


app.get('/', (req, res) => {
    res.send('Server online!')
})

app.listen(3001, () => {
    console.log("Server running on port 3001")
})