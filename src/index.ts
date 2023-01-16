import express, { Application, Request, Response} from 'express'
import { updateBalance } from './controllers/userController';

const app: Application = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/updateBalance', async (req: Request, res: Response) =>{
    try{
    const result = await updateBalance(req.body.id, req.body.minus);
    res.send(result);
    } catch(err){
        let error = err as Error;
        res.json({message: `${error.message}`})
    }
})

try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
} catch (error) {
    throw new Error(`${error}`);
}