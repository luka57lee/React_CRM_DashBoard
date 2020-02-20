import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

import Header from 'components/App/Header';
import MenuHeader from 'components/App/MenuHeader';
import ProspectList from 'components/App/ProspectList';

const key = 'prospectPage';

export default function ProspectPage(props) {
  
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <Fragment>
      <Header />
      <MenuHeader />
      <ProspectList />
    </Fragment>
  );
}
