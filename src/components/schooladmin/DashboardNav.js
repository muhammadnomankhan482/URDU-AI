
import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    Drawer,
    Toolbar,
    Typography
} from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const DashboardNav = () => {
    const navItems = [
        { text: 'Dashboard', path: '/schooladmin/dashboard' },
        { text: 'Students', path: '/schooladmin/students' },
        { text: 'Teachers', path: '/schooladmin/teachers' },
        { text: 'Classes', path: '/schooladmin/classes' },
        { text: 'Attendance', path: '/schooladmin/attendance' },
        { text: 'Gradebook', path: '/schooladmin/gradebook' },
        { text: 'Communication', path: '/schooladmin/communication' },
        { text: 'Reports', path: '/schooladmin/reports' },
        { text: 'Fees', path: '/schooladmin/fees' },
        { text: 'Exams', path: '/schooladmin/exams' },
        { text: 'Timetable', path: '/schooladmin/timetable' },
        { text: 'Subjects', path: '/schooladmin/subjects' },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <List>
                {navItems.map((item) => (
                    <ListItem button component={Link} to={item.path} key={item.text}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default DashboardNav;
