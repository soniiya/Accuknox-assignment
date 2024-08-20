import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import Widget from './Widget';
import WidgetModal from './WidgetModal';
import { categories as categoriesJson } from './categories'; 

const Dashboard = () => {
    const [categories, setCategories] = useState(categoriesJson.categories);
    const [modalOpen, setModalOpen] = useState(false);

    const selectedWidgets = categories.reduce((acc, category) => {
        category.widgets.forEach(widget => {
            if (widget.isAdded) {
                acc[widget.id] = true;
            }
        });
        return acc;
    }, {});

    const handleToggleWidget = (widgetId, categoryId) => {
        setCategories(prevCategories =>
            prevCategories.map(category => {
                if (category.id === categoryId) {
                    const updatedWidgets = category.widgets.map(widget =>
                        widget.id === widgetId
                            ? { ...widget, isAdded: !widget.isAdded }
                            : widget
                    );
                    return { ...category, widgets: updatedWidgets };
                }
                return category;
            })
        );
    };

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const removeWidget = (widgetId, categoryId) => {
        handleToggleWidget(widgetId, categoryId);
    };

    const handleAddWidget = (newWidget, categoryId) => {
        setCategories(prevCategories =>
            prevCategories.map(category => {
                if (category.id === categoryId) {
                    return {
                        ...category,
                        widgets: [...category.widgets, newWidget],
                    };
                }
                return category;
            })
        );
    };

    return (
        <div>
            {categories.map(category => (
                <DashboardLayout key={category.id} category={category} openModal={handleOpenModal}>
                    {category.widgets
                        .filter(widget => widget.isAdded)
                        .map(widget => (
                            <Widget
                                key={widget.id}
                                title={widget.name}
                                onRemove={() => removeWidget(widget.id, category.id)}
                            >
                                {widget.text}
                            </Widget>
                        ))}
                </DashboardLayout>
            ))}

            <WidgetModal
                open={modalOpen}
                handleClose={handleCloseModal}
                availableWidgets={categories}
                onToggleWidget={handleToggleWidget}
                onAddWidget={handleAddWidget}
                selectedWidgets={selectedWidgets}
            />
        </div>
    );
};

export default Dashboard;
