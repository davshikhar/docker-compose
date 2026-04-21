import express from "express"
import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

const app = express();

app.get("/",async (req,res)=>{
    const data  = await prismaClient.user.findMany();
    res.json({message:"GET ENDPONint",data:data});
})

app.get("/",async (req,res)=>{
    await prismaClient.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })
    res.json({message:"POST ENDPONint"})
})

app.listen(3000);