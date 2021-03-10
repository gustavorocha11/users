import * as express from "express";

import userCntroller from './../controllers/user';

class Router{
    public router = express.Router();
    constructor(){
        this.router.post("/user/create", userCntroller.create);
        this.router.post("/user/update", userCntroller.update);
        this.router.get("/user/:id", userCntroller.findByEmail);
        this.router.delete("/user/:id", userCntroller.delete);
    }
}

export default new Router().router;