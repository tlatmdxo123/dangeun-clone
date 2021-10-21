export type ProductInfo = {
    _id:string,
    userId:string,
    images:string[],
    title:string,
    price:number,
    address:string,
    category:string,
    content:string,
    createdAt:Date,
    like:number,
    chat:number
}

export type User = {
    _id:string,
    name:string,
    email:string,
    image:string,
    emailVerified:boolean,
    createdAt:Date,
    updatedAt:Date
}