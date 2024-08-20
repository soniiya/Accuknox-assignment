import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Widget = ({ title, children, onRemove }) => {
    return (
        <Card sx={{height: '250px'}}>
            <CardContent sx={{display: 'flex', justifyContent:'space-between'}}>
            <div>
            <Typography variant='body1'>{title}</Typography>
            <Typography variant='body2' color='textSecondary'>{children}</Typography>
            </div>

            <IconButton onClick={onRemove}>
                <DeleteIcon />
            </IconButton>

            </CardContent>
        </Card>
    );
};

export default Widget;
