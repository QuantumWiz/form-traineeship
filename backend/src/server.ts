import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import 'express-async-errors';
import { State } from './models/state-model';
import { stdout } from 'process';

const { execFile } = require("child_process");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

app.post("/submit", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "Bad request" });
    }
    const { firstname, surname, email }: State = req.body;
    if (!firstname || !surname || !email) {
        return res.status(400).json({ message: "Bad request" });
    }
    const scriptPath: string = "/root/systools/bin/ai/email-recruit-trainee-ipr.sh";
    execFile(scriptPath, [firstname, surname, email], (error:Error, stdout:string, stderr:string) => {
        console.log("stdout:");
        console.log(stdout);
        console.log("stderr:");
        console.log(stderr);
        console.log("error:");
        console.log(error);
    });
    return res.status(200).json({ message: "Success" });
})

export default app;
