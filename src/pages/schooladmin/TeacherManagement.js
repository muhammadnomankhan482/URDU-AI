
import React from 'react';
import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    CssBaseline,
    Toolbar
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import DashboardNav from '../../components/schooladmin/DashboardNav';

const createData = (id, name, subject, experience) => {
    return { id, name, subject, experience };
}

const rows = [
    createData(1, 'Mr. Smith', 'Math', '10 years'),
    createData(2, 'Mrs. Jones', 'Science', '5 years'),
    createData(3, 'Mr. Williams', 'History', '15 years'),
];

const TeacherManagement = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <DashboardNav />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Typography variant="h4" component="h1" gutterBottom>
                    Teacher Management
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to="/schooladmin/teachers/add"
                >
                    Add Teacher
                </Button>
                <TableContainer component={Paper} sx={{ mt: 4 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Subject</TableCell>
                                <TableCell align="right">Experience</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.subject}</TableCell>
                                    <TableCell align="right">{row.experience}</TableCell>
                                    <TableCell align="right">
                                        <Button component={RouterLink} to={`/schooladmin/teachers/edit/${row.id}`}>Edit</Button>
                                        <Button color="secondary">Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default TeacherManagement;
