// src/components/IndentedList.js
import React from 'react';

const IndentedList = ({ items, level = 1 }) => {
    const indentStyle = { paddingLeft: `${level * 20}px` };
    
    return (
        <ul style={indentStyle}>
            {items.map((item, index) => (
                <li key={index}>
                    {item.text}
                    {item.children && item.children.length > 0 && (
                        <IndentedList items={item.children} level={level + 1} />
                    )}
                </li>
            ))}
        </ul>
    );
};

export default IndentedList;
