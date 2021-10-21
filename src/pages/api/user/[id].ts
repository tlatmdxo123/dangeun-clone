import type {NextApiRequest,NextApiResponse} from 'next';
import MongDB from '../../../../db';
import {ObjectId} from 'mongodb'

export default function defaults(req:NextApiRequest,res:NextApiResponse){
    const {id} = req.query
    const db = new MongDB();
    if(req.method === 'POST'){
        db.updateOne('users',{_id:new ObjectId(id as string)},{$set:req.body},(fail:any,succ:any) => {
            res.status(200).json(succ)
        })
    }else{
        db.findOne('users',{_id:new ObjectId(id as string)},(fail:any,succ:any) => {
            res.status(200).json(succ)
        })
    }
    
}