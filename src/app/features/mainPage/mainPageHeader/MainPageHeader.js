import React from 'react';

import { Filter, Header }   from '../../../components';

const MainPageHeader = () => (
    <Header isShowSearchBtn={false}>
        <Filter />
    </Header>
);

export default MainPageHeader;