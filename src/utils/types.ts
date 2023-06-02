export interface User{
    id:String,
    name?:String,
    email?:String,
    image?:String,
    expenses?:Expense[]
}


export interface Category {
    id:String,
    name:String,
    description:String,
}

export interface Expense{
    id?:String,
    vendor?:String,
    created_at:Date,
    description?:String,
    status?:String,
    amount?:number,
    user:User,
    userId:String,
    categories?: Category[],
}