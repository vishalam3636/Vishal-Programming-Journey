
////////////////////////////////////////////////////////////////////////
///////////////////////////// WORKING FINE MY //////////////////////////
////////////////////////////////////////////////////////////////////////
const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require("fs");
const app = express();
const PORT = 8000;


// Midleware - plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) =>{
    fs.appendFile("log.txt", `\n${Date.now()}: ${req.method}: ${req.path} \n`, (err, data) =>{
        // return res.json({msg: "return from middleware-1"})
        next();
    });

})

// Routes
app.get('/users', (req, res) => {
    const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
  `;

    res.send(html);
});

//======== REST API ==========//
app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.post('/api/users', (req, res) => {
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg: "All fields are req..."})
    }

    users.push({...body, id: users.length+1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) =>{
        res.status(201).json({ status: 'Success', id: users.length });
    })
});

/**
 * NOTE: We can see that in above GET,PATCH and DELETE APIs, "/api/users/:id" is same, so we can merge it to make single.
 * Above GET, PATCH and DELETE is removed
 */
app
    .route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if(!user) return res.status(404).json({error: "User not found !!"})
        return res.json(user);
    })
    .patch((req, res) => {
        const body = req.body;
        let userId =  Number(req.params.id);
        let findUser = users.find(user => user.id === userId);
        let indexOfUser = users.indexOf(findUser);
        
        let updatedUser = {...findUser, ...body}

        users[indexOfUser] = updatedUser;

        // TODO: Edit the user with id
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) =>{
            return res.json({status: "success", user:{...updatedUser}})
        })
    })
    .delete((req, res) => {
        let userId = Number(req.params.id);

        let findUser = users.find(user => user.id === userId)

        let indexOfUser = users.indexOf(findUser);

        users.splice(indexOfUser, 1);

        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) =>{
            return res.json({ status: 'Success', message: `${userId} Successfuly deleted !!` });
        })
    });

app.listen(PORT, () => {
    console.log('Server started at port 8000');
});



// ////////////////////////////////////////////////////////////////////////
// ////////////////////////// WORKING FINE CHATGPT ////////////////////////
// ////////////////////////////////////////////////////////////////////////
// const express = require('express');
// const users = require('./MOCK_DATA.json');
// const fs = require("fs");
// const app = express();
// const PORT = 8000;

// // Middleware to parse incoming JSON requests
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Routes
// app.get('/users', (req, res) => {
//     const html = `
//     <ul>
//       ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
//     </ul>
//   `;
//     res.send(html);
// });

// // REST API
// app.get('/api/users', (req, res) => {
//     return res.json(users);
// });

// app.post('/api/users', (req, res) => {
//     const body = req.body;
//     users.push({...body, id: users.length + 1});
//     fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
//         if (err) {
//             return res.status(500).json({ status: 'Error', message: 'Failed to write data to file' });
//         }
//         res.json({ status: 'Success', id: users.length });
//     });
// });

// // Merged GET, PATCH, and DELETE
// app.route('/api/users/:id')
//     .get((req, res) => {
//         const id = Number(req.params.id);
//         const user = users.find((user) => user.id === id);
//         return res.json(user);
//     })
//     .patch((req, res) => {
//         return res.json({ status: 'pending' });
//     })
//     .delete((req, res) => {
//         const userId = Number(req.params.id);
//         const userIndex = users.findIndex((user) => user.id === userId);

//         if (userIndex === -1) {
//             return res.status(404).json({ status: 'Error', message: 'User not found' });
//         }

//         users.splice(userIndex, 1);

//         // Write the updated users array to the file
//         fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
//             if (err) {
//                 return res.status(500).json({ status: 'Error', message: 'Failed to delete user from file' });
//             }
//             res.json({ status: 'Success', message: `${userId} successfully deleted!` });
//         });
//     });

// app.listen(PORT, () => {
//     console.log(`Server started at port ${PORT}`);
// });
