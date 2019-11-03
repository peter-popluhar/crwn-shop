import React from 'react';
import ColectionsOverview from './../../components/collections-overview/collections-overview.component.jsx'
import {Route} from 'react-router-dom';

const ShopPage = ({match}) => (
    <div className="shop-page">
        <Route path={`${match.path}`} component={ColectionsOverview} />
    </div>
)



export default ShopPage;
