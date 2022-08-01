import React from 'react';
import { Categories, SortPopup } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchSushi } from '../redux/actions/sushi';
import ProductBlock from '../components/ProductBlock';

const categoryNames = ['All', 'Temaki', 'Sets', 'Rolls', 'Maki'];
const sortItems = [
  { name: 'price', type: 'currentPrice', order: 'asc' },
  { name: 'alphabet', type: 'name', order: 'asc' },
  { name: 'popular', type: 'popular', order: 'desc' },
];
function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ sushi }) => sushi.items);
  // const isLoaded = useSelector(({ sushi }) => sushi.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchSushi(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => dispatch(setCategory(index)), []);

  const onSelectSortType = React.useCallback((type) => dispatch(setSortBy(type)), []);

  const handleAddSushiToCart = (obj) => {
    dispatch({
      type: 'ADD_SUSHI_CART',
      payload: obj,
    });
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>

      <h2 className="content__title">All Rolls</h2>
      <div className="content__items">
        {items.map((obj) => (
          <ProductBlock
            onClickAddSushi={handleAddSushiToCart}
            key={obj.id}
            isLoading={true}
            {...obj}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
