
import React from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Button,
    TextField,
    Typography,
    CssBaseline,
    Toolbar
} from '@mui/material';
import DashboardNav from '../../components/schooladmin/DashboardNav';

const AddEditTeacher = () => {
    const { id } = useParams();
    const isEdit = id !== undefined;

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
                    {isEdit ? 'Edit Teacher' : 'Add Teacher'}
                </Typography>
                <form>
                    <TextField
                        fullWidth
                        label="Name"
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Subject"
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Experience"
                        margin="normal"
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                    >
                        {isEdit ? 'Save' : 'Add'}
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default AddEditTeacher;
