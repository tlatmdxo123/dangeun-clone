import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

export default class MongDB{
    private static CONS: number;
    private static CONN: mongoose.Connection;
    constructor(){
        
    }
    private async connectToDB(){
        if(MongDB.CONS!== 1){
            const db = await mongoose.connect(process.env.DATABASE_URL as string)
            MongDB.CONS = mongoose.connection.readyState || 0;
            MongDB.CONN = db.connection;
            return db.connection
        }else{
            return MongDB.CONN
        }
    }
    public async findOne(name:string,query:any,then:any){
        const db = await this.connectToDB()
        db.collection(name).findOne(query,then)
    }
}
