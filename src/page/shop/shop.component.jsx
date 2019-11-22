import React from 'react';
import ColectionsOverview from './../../components/collections-overview/collections-overview.component.jsx'
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component.jsx';
import {firestore, convertCollectionsSnapshotsToMap} from '../../firebase/firebase.utils'
import {updateCollections} from './../../redux/shop/shop.actions'
import {connect} from 'react-redux'

class ShopPage extends React.Component {

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotsToMap(snapshot)
            console.log(snapshot)

            updateCollections(collectionsMap)
        })


    }

    render() {
        const {match} = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={ColectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
        dispatch(updateCollections(collectionsMap))
})



export default connect(null, mapDispatchToProps)(ShopPage);
