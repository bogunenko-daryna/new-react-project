import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import ProductBlock from './components/ProductBlock';
import products from './assets/db.json';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              onClick={(name) => console.log(name)}
              items={['All', 'Temaki', 'Sets', 'Rolls', 'Maki']}
            />
            <Sort
              items={[
                { name: 'popular', type: 'popular' },
                { name: 'price', type: 'price' },
                { name: 'alphabet', type: 'alphabet' },
              ]}
            />
          </div>
          <h2 className="content__title">All Rolls</h2>
          <div className="content__items">
            {products.map((obj) => (
              <ProductBlock key={obj.key} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
