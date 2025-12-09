import express from 'express';
import dotenv from 'dotenv'
import askRoutes from './routes/ask.route.js';
import cors from 'cors'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())


app.use('/api', askRoutes)


const PORT = process.env.PORT

app.listen(PORT, ()=> console.log(`Aplicação rodando na porta ${PORT}`))


