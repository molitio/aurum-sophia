import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { App } from '../client/_components/app';
import { AurumSophia } from '../components/AurumSophia';
import { AppContextProvider } from '../components/context/AppContextProvider';

export const startViewServer = () => {
    const server = express();

    server.set('view engine', 'ejs');
    console.log(__dirname);
    server.set('views', path.join(__dirname, 'views'));

    server.use('/', express.static(path.join(__dirname, 'public')));

    const manifest = fs.readFileSync(path.join(__dirname, 'public/manifest.json'), 'utf-8');

    const assets = JSON.parse(manifest);

    server.get('/*', (req, res, next) => {
        const context = {};
        const aurum = React.createElement(AurumSophia);
        const contextProvider = React.createElement(AppContextProvider, null, aurum);
        const staticRouter = React.createElement(StaticRouter, { location: req.url, context }, contextProvider);
        const component = ReactDOMServer.renderToString(staticRouter);
        res.render('client', { assets, component });
    });

    return server;
};
