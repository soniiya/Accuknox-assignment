import React from 'react';
import { Grid, Box, Typography, Button, Card, CardContent } from '@mui/material';

const DashboardLayout = ({ children, category, openModal }) => {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography sx={{ mb: 3 }} variant="h5">
                {category.name}
            </Typography>
            <Grid container spacing={3}>
                {React.Children.map(children, (child) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        {child}
                    </Grid>
                ))} 
    
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card
                        onClick={() => openModal(category.id)}
                        sx={{ cursor: 'pointer', height: '250px' }}
                    >
                        <CardContent
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                            }}
                        >
                            <Button variant="contained">+ Add Widget</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashboardLayout;
