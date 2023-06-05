export interface User{
    id:string,
    name?:string,
    email?:string,
    image?:string,
    expenses?:Expense[]
}


export interface Category {
    id:string,
    name:string,
    description:string,
}

export interface Expense{
    id?:string,
    vendor?:string,
    created_at:Date,
    description?:string,
    status?:string,
    amount?:number,
    user:User,
    userId:string,
    categories?: Category[],
}