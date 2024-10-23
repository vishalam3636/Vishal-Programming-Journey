const user = {
    name: "Vishal",
    email: "vishal@gmail.com",
    isActive: true
}

// function createUser({name:string, isPaid:boolean}){}

// createUser()

function createUser({name:string, isPaid:boolean}){}
createUser({name: "Vishal", isPaid:false});

function createCourse():{name:string, price:number}{
    return {name:"Vishal", price:499}
}


function makeUser({name:string, isPaid:boolean}){}
// makeUser({name:"Vishal", isPaid:false, email:"v@s.com"}) /// error
let newUser = {name:"Vishal", isPaid:false, email:"v@s.com"};
makeUser(newUser);




type user = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUserAgain(user: user):user{
    return {name:"", email:"", isActive:false}
}
createUserAgain({name:"Vishal", email:"Vishal@gmail.com", isActive:false})

export{}

