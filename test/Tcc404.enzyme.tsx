import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { shallow, mount } from 'enzyme';

import { Box, Button, Theme, Link } from '@material-ui/core';

// Transitioned to react-testing-library

import Tcc404 from "./Tcc404"

// no children, only shallow rendering required
// no props

it('renders Tcc404 without crashing', () => {
  mount(<Router><Tcc404 /></Router>);
  // expect(wrapper.find(Tcc404).length).toEqual(1);
});

it('Tcc404 contains 3 children, an image, title, <a> and Button component', () => {
  const wrapper = mount(<Router><Tcc404 /></Router>);
  const c1 = wrapper.children()
  const children = c1.children()
  console.log(`wrapper: \n${wrapper.debug()}`)
  console.log(`c1: \n${c1.debug()}`)

  // console.log(`h3: \n${wrapper.find('h3')}`)

  expect(children.length).toEqual(3);
  expect(wrapper.find('img[alt="A meditating dog, just what you need for a 404"]').length).toEqual(1)
  expect(wrapper.find('h3').text()).toEqual("Whoops, that was a 404 ! That page doesn't exist")
  // expect(wrapper.find('a[href="/Home"]').length).toEqual(1)
  expect(wrapper.find(Button).length).toEqual(1)
  expect(wrapper.find(Button).text()).toEqual("Take me back to the home page")
});

// it('Check button pressed behavior', () => {
//   const wrapper = shallow(<Tcc404 />)
//   const myButton = wrapper.find(Button)
//   console.log(`myButton:\n${myButton.debug()}`)
//   myButton.simulate('click')
//     console.log(`wrapper: \n${wrapper.debug()}`)
// }) 


