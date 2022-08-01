import React, { useState } from 'react';

function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };
  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Categories;
