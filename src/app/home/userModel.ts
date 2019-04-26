export interface User {
    id: number,
    _id: string,
    balance: number,
    picture: string,
    age: number,
    name: string,
    email: string,
    phone: string,
    address: string,
    about: string,
    tags: Array<string>,
    registered: string
}