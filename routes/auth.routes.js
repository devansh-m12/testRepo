import { Router } from "express";
import Auth from "../controllers/auth.controllers.js";

const auth = new Auth();

const authRouter = Router();

authRouter.post("/start",auth.start);
authRouter.post("/delusr", auth.deleteuser)
authRouter.get('/',(req,res)=>{
    res.send("inside auth router");
});
export default authRouter;