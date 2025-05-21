import React from 'react';

const items = ['Apple', 'Banana', 'Cherry'];

function ItemList() {
    return (
        <ul>
            {items.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
    );
}

export default ItemList;