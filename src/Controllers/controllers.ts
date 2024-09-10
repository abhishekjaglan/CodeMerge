import { Request, Response } from "express";

export const sum = async (req: Request, res: Response) => {
    const body = req.body;

    if (body && typeof body === 'object') {
        const a = parseInt(body.a);
        const b = parseInt(body.b);
        console.log("A:", a);
        console.log("B:", b);

        if (typeof a === 'number' && typeof b === 'number') {
            const sum = a + b;
            return res.status(200).json({ sum });
        } else {
            return res.status(400).json({ error: 'Invlaid input, a and b must be numbers' });
        }
    } else {
        return res.status(400).json({ error: 'Invalid request body' });
    }

};

export const subtract = async (req: Request, res: Response) => {
    const body = req.body;

    if (body && typeof body === 'object') {
        const a = parseInt(body.a);
        const b = parseInt(body.b);
        console.log("A:", a)

        if (typeof a === 'number' && typeof b === 'number') {
            const subtract = a - b;
            return res.status(200).json({ result: subtract });
        } else {
            return res.status(400).json({ error: 'Invlaid input, a and b must be numbers' });
        }
    } else {
        return res.status(400).json({ error: 'Invalid request body' });
    }

};

export const multiply = async (req: Request, res: Response) => {
    const body = req.body;

    if (body && typeof body === 'object') {
        const a = parseInt(body.a);
        const b = parseInt(body.b);

        if (typeof a === 'number' && typeof b === 'number') {
            const result = a * b;
            return res.status(200).json({ result });
        } else {
            return res.status(400).json({ error: 'Invlaid input, a and b must be numbers' });
        }
    } else {
        return res.status(400).json({ error: 'Invalid request body' });
    }

};

export const divide = async (req: Request, res: Response) => {
    const body = req.body;

    if (body && typeof body === 'object') {
        const a = parseInt(body.a);
        const b = parseInt(body.b);

        if (typeof a === 'number' && typeof b === 'number') {
            const result = a / b;
            return res.status(200).json({ result });
        } else {
            return res.status(400).json({ error: 'Invlaid input, a and b must be numbers' });
        }
    } else {
        return res.status(400).json({ error: 'Invalid request body' });
    }

};