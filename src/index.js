import React from 'react';
import { render } from 'react-dom';

import App from './App';
import generateData from './generate-data';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

render(<App data={generateData(100)}/>, document.getElementById('root'));
