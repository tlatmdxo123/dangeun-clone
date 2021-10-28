import { NextApiRequest, NextApiResponse } from "next";
import MongDB from '../../../../db';
import {ObjectId} from 'mongodb'

export default function handler(req:NextApiRequest,res:NextApiResponse){
    const {id} = req.query
    const db = new MongDB();

    db.findOne('products',{_id:new ObjectId(id as string)},(fail:any,succ:any) => {
        res.status(200).json(succ);
    })
}