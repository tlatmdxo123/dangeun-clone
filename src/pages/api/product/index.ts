import { NextApiRequest, NextApiResponse } from "next";
import nc from 'next-connect'
import multer from 'multer'
import MongDB from '../../../../db';

const app = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
})

const storage = multer.diskStorage({
    destination(req,file,cb){
        cb(null,'public/images')
    },
    filename(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage})

const db = new MongDB();

app.post(upload.array('images',10),(req,res) => {
    const images:string[] = (req.files as Express.Multer.File[]).map((file:any) => `/images/${file.originalname}`)
    const data = {
        ...req.body,
        chat:0,
        like:0,
        createdAt:new Date(),
        images
    }
    db.insertOne("products",data,(fail:any,succ:any) => {
        res.status(200).json(succ);
    })
})

app.get((req,res) => {

    db.find("products",async (err:any,succ:any) => {
        const resp = await succ.toArray()
        res.status(200).json(resp)
    })
})

export default app

export const config = {
    api:{
        bodyParser:false
    }
}