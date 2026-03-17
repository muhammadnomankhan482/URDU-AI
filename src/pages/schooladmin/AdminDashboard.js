
import React from 'react';
import {
    Box,
    CssBaseline,
    Toolbar,
    Typography
} from '@mui/material';
import DashboardNav from '../../components/schooladmin/DashboardNav';

const AdminDashboard = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <DashboardNav />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Typography variant="h4" gutterBottom>
                    School Admin Dashboard
                </Typography>
                <Typography paragraph>
                    Welcome to the School Admin Dashboard. Here you can manage students, teachers, classes, and more.
                </Typography>
                <div>
                    <h2>Key Metrics</h2>
                    {/* Add components to display key metrics */}
                </div>
                <div>
                    <h2>Recent Activity</h2>
                    {/* Add components to display recent activity */}
                </div>
                <div>
                    <h2>Quick Links</h2>
                    {/* Add components for quick links */}
                </div>
            </Box>
        </Box>
    );
};

export default AdminDashboard;
