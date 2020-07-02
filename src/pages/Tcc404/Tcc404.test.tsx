import React from 'react';
import { shallow, mount, render } from 'enzyme';

import { Box, Button, Theme, Link } from '@material-ui/core';


import Tcc404 from "./Tcc404"

// it("\n\n*** Checks isDbType() method", function (done) {
//   done()
// })

it('renders Tcc404 without crashing', () => {

  const render = shallow(<div><Tcc404 /></div>);
  expect(render.find(Tcc404).length).toEqual(1);


});

it('Tcc404 contains 3 <Box>', () => {

  const render = shallow(<Tcc404 />);
  const children = render.children()
  expect(children.length).toEqual(3);

  // expect(children[2].find(<img />)).toEqual(1)


});

it("Fails during test development", () => {
  expect(1).toEqual(0)
})

