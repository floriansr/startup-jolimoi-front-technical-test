import * as React from 'react';

import { Div, Image, Text, Col, Row } from 'atomize';
import image from 'assets/images/beauty-products.jpg';

const DesignSketches = () => {
  return (
    <>
      <Row>
        <Col
          bg="#55D7FF"
          size={{ xs: '12', md: '6', lg: '6' }}
          h={{ xs: '33vh', md: '33vh', lg: '50vh' }}
        >
          <Div d="flex" h="100%" justify="center" align="center">
            <Text tag="h3" textWeight="600">
              This is a page for beauty product search
            </Text>
          </Div>
        </Col>

        <Col size={{ xs: '12', md: '6', lg: '6' }} p="0">
          <Image src={image} h={{ xs: '33vh', md: '33vh', lg: '50vh' }} />
        </Col>
      </Row>
    </>
  );
};

export default DesignSketches;
