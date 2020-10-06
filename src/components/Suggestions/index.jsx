import * as React from 'react';
import shortid from 'shortid';
import { useSelector } from 'react-redux';

const Suggestions = () => {
  const suggestions = useSelector((state) => state.products.data);

  return (
    <>
      {suggestions.length !== 0 ? (
        <ul
          style={{
            color: 'white',
            paddingLeft: '0.5rem',
            marginTop: '1rem',
          }}
        >
          {suggestions.map((x) => (
            <li key={shortid.generate()} data-testid="product-contains">
              <strong>{x.brand}</strong> - {x.name}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
export default Suggestions;
