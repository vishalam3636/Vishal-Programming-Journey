import React, {useState, useEffect} from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function TableDisplay({gotUsersData}) {
    const [usersName, setUsersName] = useState({});
    const [usersData, setUsersData] = useState(null);


    useEffect(()=>{
        if(gotUsersData){
            let keys = Object.keys(gotUsersData);
            let vals = Object.values(gotUsersData);

            setUsersName(keys);
            setUsersData(vals);
        }
    }, [])


    console.log(gotUsersData, ">>>>>gotUsersData in table comp");
    console.log(usersName, ">>>>keys");
    console.log(usersData, ">>>>>vals");
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow style={{backgroundColor: "crimson"}}>
                <TableCell align="right" style={{color: "white", fontSize:"17px", fontWeight: "600"}}>Id</TableCell>
                <TableCell align="right" style={{color: "white", fontSize:"17px", fontWeight: "600"}}>First Name</TableCell>
                <TableCell align="right" style={{color: "white", fontSize:"17px", fontWeight: "600"}}>Last Name</TableCell>
                <TableCell align="right" style={{color: "white", fontSize:"17px", fontWeight: "600"}}>Email</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {gotUsersData && Object.values(gotUsersData).map((user, key) => (
                    <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="right">{key+1}</TableCell>
                        <TableCell align="right">
                            {user.firstName}
                        </TableCell>
                        <TableCell align="right">{user.lastName}</TableCell>
                        <TableCell align="right">{user.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}