import { connect } from 'react-redux';
import { SearchButton } from '../templates/SearchButton';
import { changeSearchButton } from '../actions/PopularActions';
const mapStateToProps = (state) => ({
    searchBtn: state.popularReducer.searchBtn
});

const mapDispatchToProps = (dispatch) => ({
    searchButton: () => {
        dispatch(changeSearchButton());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);