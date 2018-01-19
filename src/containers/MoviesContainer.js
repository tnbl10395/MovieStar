import { connect } from 'react-redux';
import MoviesComponent from '../components/MoviesComponent';
import { getPopular } from '../api/api';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    loadData: () => {
        getPopular();
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(MoviesComponent);