import * as React from 'react';
import { useState } from 'react';

import APIManager from 'services/APIManager';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { Row, Div, Button, Input } from 'atomize';
import { setProducts } from '../../redux';

const SearchBar = () => {
  const [userProductChoice, setUserProductChoice] = useState(null);
  const dispatch = useDispatch();

  const searchBarOnSubmit = async (e) => {
    e.preventDefault();

    if (!userProductChoice) return message.error('Please choose a product');
    try {
      const res = await APIManager.lookingForProducts(userProductChoice);
      dispatch(setProducts(res));
      return message.success(`${res.length} products found`, 3);
    } catch (error) {
      console.error(error);
      return message.error('Server error occurred.', 3);
    }
  };

  const handleChange = async (e) => {
    setUserProductChoice(e.target.value);
  };

  return (
    <>
      <form onSubmit={(e) => searchBarOnSubmit(e)}>
        <Row justify="space-between">
          <Div w="70%">
            <Input
              data-testid="input-search"
              placeholder="Product"
              onChange={(e) => handleChange(e)}
            />
          </Div>

          <Button
            data-testid="button-search"
            type="submit"
            m={{ l: '1rem' }}
            w="25%"
            bg="#55D7FF"
            textColor="black"
          >
            Search
          </Button>
        </Row>
      </form>
    </>
  );
};
export default SearchBar;
