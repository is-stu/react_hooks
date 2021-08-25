import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';

describe('Test for HookApp component', () => {
  test('Should show it correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
