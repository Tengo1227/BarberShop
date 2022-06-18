export const barberList = [
    {
        id:1,
        firstName: "Joe",
        lastName: "Rogan",
        email: "fas@fas.com",
        address: "qwe 32",
        price: 500
    },
    {
        id:2,
        firstName: "Mike",
        lastName: "Boyd",
        email: "yt@yt.com",
        address: "add 32",
        price: 1000
    }

]

const users = [
    {
        email: "tew",
        password: "123"
    }
]


export function loginUser(user){
    return users.find(u=>u.email===user.email && u.password===user.pass);
}

export function registerBarber(barber){
    barberList.push(barber);
}

export function registerUser(user){
    users.push(user);
}