import React from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module';
import App from './App';

const tagManagerArgs = {
  gtmId: 'GTM-5CXDRSV',
  auth: 'SSwicRhO1Vd4xZXNROLuCg',
  preview: 'env-1',
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(<App />, document.getElementById('root'));
