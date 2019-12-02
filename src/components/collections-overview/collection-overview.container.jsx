import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from './../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from './../../components/collections-overview/collections-overview.component.jsx'
import  {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;
