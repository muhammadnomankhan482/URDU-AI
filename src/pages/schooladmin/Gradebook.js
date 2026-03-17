
import React from 'react';
import {
    Box,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    TextField
} from '@mui/material';

const createData = (id, studentName, className, grade) => {
    return { id, studentName, className, grade };
}

const rows = [
    createData(1, 'John Doe', 'Math 101', 'A'),
    createData(2, 'Jane Smith', 'Science 101', 'B'),
    createData(3, 'Peter Jones', 'History 101', 'C'),
];

const Gradebook = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Gradebook
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                    <TextField label="Filter by Class" />
                    <TextField label="Filter by Student" />
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Student Name</TableCell>
                                <TableCell align="right">Class</TableCell>
                                <TableCell align="right">Grade</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.studentName}
                                    </TableCell>
                                    <TableCell align="right">{row.className}</TableCell>
                                    <TableCell align="right">{row.grade}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
};

export default Gradebook;
