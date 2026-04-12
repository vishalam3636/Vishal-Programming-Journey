// Ek In Memory DB banate hain
// save("user-1", {fname, lname})

// HashMap (key, value)
//        String String

// 1{fname, lname, email, contact:{mobile}, address:{street, pin, country}}

type UserId = string;

interface User {
    id: UserId
    fname: string,
    lname?: string,
    email: string,
    contact: {
        mobile: string
    },
    address: {
        street: number,
        pin: number,
        country: string
    }
}

class InMemoryDb{
    private _db: Map<UserId, User>
    constructor(){

    }

    public insertUser(data: User): UserId{
        if(this._db.has(data.id)){
            throw new Error(`User with ID ${data.id} already exists`)
        }
        this._db.set(data.id, data);
        return data.id;
    }

    public updateUser(id: UserId, updateData: Omit<User, "id">){
        if(!this._db.has(id)) throw new Error(`User with ID ${id} does not exists`);
        this._db.set(id, {...updateData, id})
        return true;
    }
}

const myDb =  new InMemoryDb();
myDb.insertUser({
    id: "1",
    fname: "Vishal",
    email: "vishal@gmail.com",
    address: {
        street: 123,
        pin: 4230348,
        country: "India"
    },
    contact: {mobile:"56432"}
})

myDb.updateUser("1",{
    fname: "Vishal",
    email: "vishal@gmail.com",
    address: {
        street: 123,
        pin: 4230348,
        country: "India"
    },
    contact: {mobile:"56432"}
})