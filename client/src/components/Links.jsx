import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';


export default function BasicTable({ rooms }) {
    return (
        <TableContainer component={Paper} style={{ marginLeft: "20px", marginRight: "20px;" }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Room Number</TableCell>
                        <TableCell >Links</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rooms.map((room) => (
                        <TableRow
                            key={room._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {room.number}
                            </TableCell>
                            <Link to={`/room/${room._id}`}><TableCell >Click here</TableCell></Link>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}