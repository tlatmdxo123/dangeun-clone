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
    public async find(name:string,then:any){
        const db = await this.connectToDB()
        return db.collection(name).find({},then)
    }

    public async findOne(name:string,query:any,then:any){
        const db = await this.connectToDB()
        db.collection(name).findOne(query,then)
    }

    public async updateOne(name:string,filter:any,update:any,then:any){
        const db = await this.connectToDB()
        db.collection(name).updateOne(filter,update,then)
    }

    public async insertOne(name:string,data:any,then:any){
        const db = await this.connectToDB()
        db.collection(name).insertOne(data,then)
    }

    
}
