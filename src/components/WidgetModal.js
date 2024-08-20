import React, { useState } from 'react';
import { Modal, Box, TextField, Button, List, ListItem, Checkbox, Tabs, Tab, Typography } from '@mui/material';

const WidgetModal = ({ open, handleClose, availableWidgets, onToggleWidget, selectedWidgets, onAddWidget }) => {
    const [currentTab, setCurrentTab] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [widgetName, setWidgetName] = useState('');
    const [widgetText, setWidgetText] = useState('');

    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
        setSearchTerm(''); 
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filterWidgets = (widgets) => {
        return widgets.filter(widget => 
            widget.name.toLowerCase().includes(searchTerm)
        );
    };

    const widgetsInCategory = availableWidgets[currentTab].widgets;
    const filteredWidgets = filterWidgets(widgetsInCategory);

    const handleAddWidget = () => {
        if (widgetName.trim() === '' || widgetText.trim() === '') {
            alert('Please fill in both Widget Name and Widget Text.');
            return;
        }

        const newWidget = {
            id: `widget${Date.now()}`,
            name: widgetName,
            text: widgetText,
            isAdded: true, 
        };

        onAddWidget(newWidget, availableWidgets[currentTab].id);
        setWidgetName('');
        setWidgetText('');
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{ position: 'fixed', right: 0, width: '50%', height: '100%', bgcolor: 'white', p: 2 }}>
                <Tabs value={currentTab} onChange={handleTabChange}>
                    {availableWidgets.map((category, index) => (
                        <Tab key={category.id} label={category.name} />
                    ))}
                </Tabs>

                <TextField 
                    fullWidth 
                    placeholder="Search widgets" 
                    value={searchTerm} 
                    onChange={handleSearch} 
                    sx={{ my: 2 }} 
                />

                <List>
                    {filteredWidgets.length > 0 ? (
                        filteredWidgets.map(widget => (
                            <ListItem key={widget.id}>
                                <Checkbox
                                    checked={!!selectedWidgets[widget.id]}
                                    onChange={() => onToggleWidget(widget.id, availableWidgets[currentTab].id)}
                                />
                                <Typography>{widget.name}</Typography>
                            </ListItem>
                        ))
                    ) : (
                        <Typography>No widgets found</Typography>
                    )}
                </List>

                <TextField
                    label="Widget Name"
                    value={widgetName}
                    onChange={(e) => setWidgetName(e.target.value)}
                    fullWidth
                    sx={{ mt: 2 }}
                    required
                />
                <TextField
                    label="Widget Text"
                    value={widgetText}
                    onChange={(e) => setWidgetText(e.target.value)}
                    fullWidth
                    sx={{ mt: 2 }}
                    required
                />

                <Box mt={2}
                sx={{
                    position: 'relative',
                    display: 'flex',
                    gap: 2,
                }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddWidget}
                    sx={{ width: '200px', mx: 2, }}
                >
                    Add Widget
                </Button>

                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleClose}
                    sx={{ width: '200px' }}
                >
                    Cancel
                </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default WidgetModal;
