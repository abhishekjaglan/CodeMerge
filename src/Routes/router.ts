import express from "express";
import { divide, multiply, subtract, sum } from "../Controllers/controllers";

const router = express.Router();

router.post('/sum', sum);
router.post('/subtract', subtract);
router.post('/multiply', multiply);
router.post('/divide', divide);

export default router;