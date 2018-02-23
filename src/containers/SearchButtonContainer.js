import { connect } from 'react-redux';
import { SearchButton } from '../templates/SearchButton';
import { changeSearchButton, searchFavorite } from '../actions/PopularActions';
import { searchDataFavorite } from '../localDatabase/localdatabase';
const mapStateToProps = (state) => ({
    searchBtn: state.popularReducer.searchBtn,
    input: state.popularReducer.inputSearch
});

const mapDispatchToProps = (dispatch) => ({
    searchButton: () => {
        dispatch(changeSearchButton());
    },
    searchData: (str) => {
        searchDataFavorite(dispatch,str,searchFavorite)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);