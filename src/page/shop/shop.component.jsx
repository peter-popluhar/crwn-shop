import React from 'react';
import ColectionsOverview from './../../components/collections-overview/collections-overview.component.jsx'
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component.jsx';

const ShopPage = ({match}) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={ColectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)



export default ShopPage;
