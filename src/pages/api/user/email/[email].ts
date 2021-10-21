import type {NextApiRequest,NextApiResponse} from 'next';
import MongDB from '../../../../../db';
import {ObjectId} from 'mongodb'

export default function defaults(req:NextApiRequest,res:NextApiResponse){
    const {email} = req.query
    const db = new MongDB();
    db.findOne('users',{email},(fail:any,succ:any) => {
        res.status(200).json(succ)
    })
}