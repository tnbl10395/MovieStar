import { connect } from 'react-redux';
import { SearchButton } from '../templates/SearchButton';
import { changeSearchButton, searchFavorite, inputDataSearch } from '../actions/PopularActions';
import { searchDataFavorite } from '../localDatabase/localdatabase';
const mapStateToProps = (state) => ({
    searchBtn: state.popularReducer.searchBtn,
    input: state.popularReducer.inputSearch
});

const mapDispatchToProps = (dispatch) => ({
    searchButton: () => {
        dispatch(changeSearchButton());
    },
    inputData: (str) => {
        dispatch(inputDataSearch(str));
    },
    searchData: (str) => {
        searchDataFavorite(dispatch,str,searchFavorite)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);