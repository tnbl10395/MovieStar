import { connect } from 'react-redux';
import { Header } from '../templates/Header';
import { changeShowListPopular } from '../actions/PopularActions';

const mapStateToProps = (state) => ({
    list: state.popularReducer.list
});

const mapDispatchToProps = (dispatch) => ({
    changeShowList: () => {
        dispatch(changeShowListPopular());
    },
    changeTitle: () => {
        dispatch(changeTitles());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);