import { connect } from 'react-redux';
import { Header } from '../templates/Header';
import { changeShowListPopular, changeTitles } from '../actions/PopularActions';

const mapStateToProps = (state) => ({
    list: state.popularReducer.list,
    title: state.popularReducer.title
});

const mapDispatchToProps = (dispatch) => ({
    changeShowList: () => {
        dispatch(changeShowListPopular());
    },
    changeTitle: (title) => {
        dispatch(changeTitles(title));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);