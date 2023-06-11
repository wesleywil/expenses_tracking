export interface User{
    id:string,
    name?:string,
    email?:string,
    image?:string,
    expenses?:Expense[],
    userIncome: UserIncome[]
}


export interface Category {
    id:string,
    name:string,
    color:string,
    textColor:string,
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

export interface UserIncome{
    id?:string,
    title:string,
    at_date:Date,
    description?:string,
    amount:number,
    fixed:boolean,
    user?: User,
}
