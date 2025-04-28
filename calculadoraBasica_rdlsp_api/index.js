import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())
// app.use(cors({
//     origin: 'http://localhost:3000/suma',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }));

app.post('/suma',(req, res)=>{
    const suma = req.body;
    const rsl = suma.v1 + suma.v2;
    const sumaRsl = {
        ...suma,
        resultado: parseFloat(rsl.toFixed(2)),
        tipo: "Suma",
        formula: `${suma.v1} + ${suma.v2}`
    }
    res.status(200).json(sumaRsl);
});

app.post('/division',(req, res)=>{
    const div = req.body;
    const rsl = div.v1 / div.v2;
    const divRsl = {
        ...div,
        resultado: parseFloat(rsl.toFixed(2)),
        tipo: "División",
        formula: `${div.v1} / ${div.v2}`
    }
    res.status(200).json(divRsl);
});

app.post('/resta',(req, res)=>{
    const res_ = req.body;
    const rsl = res_.v1 - res_.v2;
    const resRsl = {
        ...res_,
        resultado: parseFloat(rsl.toFixed(2)),
        tipo: "Resta",
        formula: `${res_.v1} - ${res_.v2}`
    }
    res.status(200).json(resRsl);
});

app.post('/multiplicacion',(req, res)=>{
    const mult = req.body;
    const rsl = mult.v1 * mult.v2;
    Math.r
    const multRsl = {
        ...mult,
        resultado: parseFloat(rsl.toFixed(2)),
        tipo: 'Multiplicación',
        formula: `${mult.v1} x ${mult.v2}`
    }
    res.status(200).json(multRsl);
});

app.get('/info',(req, res)=>{
    const info = {
        creador: 'Ronny De Los Santos',
        portafolio: 'https://ronnydls.github.io/ronny_portafolio/',
        tecnologia: 'Nodejs con Express',
        nombreApp: 'CalcRon'
    }
    res.json(info);
});

app.listen(port, ()=>{
    console.log('Servidor en ejecucion...');
    console.log(`http://localhost:${port}`);
});