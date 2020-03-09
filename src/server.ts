import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3001;

app.use('/', express.static(path.join(__dirname, 'ui')));

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );