import React from 'react';
import { shallow } from 'enzyme';
import TacheronApp from './TacheronApp';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import AppPanel from '../components/AppPanel';

it('should render the material-ui css baseline', () => {
  // Given
  // no test fixture required

  // When
  const wrapper = shallow(<TacheronApp/>);
  
  // Then
  expect(wrapper).toContainReact(<CssBaseline/>);
})

it('should render the application panel', () => {
  // Given
  // no test fixture required

  // When
  const wrapper = shallow(<TacheronApp/>);

  // Then
  expect(wrapper).toContainReact(<AppPanel/>);
})
