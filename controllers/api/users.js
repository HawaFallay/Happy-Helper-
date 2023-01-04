const { Router } = require("express");

const userRouter = new Router();

userRouter.post("/login", async (req, res) => {
    console.log(req.body);

    res
})