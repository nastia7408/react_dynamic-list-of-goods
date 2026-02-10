import React, {useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';


export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [allGoods, setAllGoods] = useState(false);

  const handleLoadAll = () => {
    getAll().then(data => {
      setGoods(data);
      setAllGoods(true);
    });
  };

  const handleLoadFive = () => {
    get5First().then(data => {
      setGoods(data);
      setAllGoods(true);
    });
  };

  const handleLoadRed = () => {
    getRedGoods().then(data => {
      setGoods(data);
      setAllGoods(true);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={handleLoadAll} data-cy="all-button">
        Load all goods
      </button>

      <button
        type="button"
        onClick={handleLoadFive}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button type="button" onClick={handleLoadRed} data-cy="red-button">
        Load red goods
      </button>

      {allGoods && <GoodsList goods={goods} />}
    </div>
  );
};
