import express from "express"
import buildingNumbersRouter from "./routers/buildingNumbersRouter.js";
import infoRouter from "./routers/infoRouter.js";

const app = express();

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    next()
})
app.use(buildingNumbersRouter)
   .use(infoRouter)

app.listen(3000, ()=>console.log('http://localhost:3000'))