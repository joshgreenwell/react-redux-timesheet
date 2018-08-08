import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Hello from './hello/Hello';

describe('App Component', () => {
  it('renders without exploding', () => {
    expect(shallow(<App />)).toHaveLength(1);
  });
  it('renders Hello', () => {
    shallow(<App />)
    expect(Hello).toHaveLength(1);
  });
});
