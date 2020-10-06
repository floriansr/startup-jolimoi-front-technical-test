import * as React from 'react';

import SearchBar from 'components/SearchBar';
import Suggestions from 'components/Suggestions';
import { Div, Col } from 'atomize';

const Query = () => {
  return (
    <>
      <Div
        d="flex"
        w={{ xs: '90%', md: '50%', lg: '50%' }}
        m={{ t: '2rem', l: 'auto', r: 'auto' }}
      >
        <Col>
          <SearchBar />
          <Suggestions />
        </Col>
      </Div>
    </>
  );
};
export default Query;
