import react from 'react';
import { renderToString } from 'react-dom/server';
import express, { Application, Request, Response, NextFunction } from 'express';
import indexHTML from './indexHtml';
import App from '../App';
import { createElement } from 'react';

const app: Application = express();

const config = {
    apiPort: 4224,
};

app.use(express.static('build'));

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/', (req: Request, res: Response) => {
    const body = renderToString(createElement(App));
    res.send(indexHTML({ body }));
});

app.listen(config.apiPort, () => {
    console.log(`Running on port: ${config.apiPort}`);
});
