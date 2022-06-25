import { useState } from 'react';
import MyPaintingColor from './MyPaintingColor';
import MySearch from './MySearch';

const Colors = () => {
  const [search, setSearch] = useState('Empty Value');

  const setColor = (colorSelected) => {
    setSearch(colorSelected);
  };

  return (
    <div>
      <h1>My Colors</h1>
      <MyPaintingColor search={search} />
      <br />
      <MySearch setColor={setColor} />
    </div>
  );
};

export default Colors;
