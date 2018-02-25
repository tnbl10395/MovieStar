import { connect } from 'react-redux';
import SettingsComponent from '../components/SettingsComponent';
import { changeTitles, changeSlider, chooseYearRelease, selectSorting } from '../actions/PopularActions';

const mapStateToProps = (state) => ({
    checkPopular: state.dataReducer.checkPopular,
    checkTopRated: state.dataReducer.checkTopRated,
    checkUpcoming: state.dataReducer.checkUpcoming,
    checkNowPlaying: state.dataReducer.checkNowPlaying,
    valueSlider: state.dataReducer.valueSlider,
    valueYearRelease: state.dataReducer.valueYearRelease,
    checkReleaseDate: state.dataReducer.checkReleaseDate,
    checkRating: state.dataReducer.checkRating
})

const mapDispatchToProps = (dispatch) => ({
    changeTitles: (title) => {
        dispatch(changeTitles(title))
    },
    changeSlider: (value) => {
        dispatch(changeSlider(value))
    },
    chooseYearRelease: (value) => {
        dispatch(chooseYearRelease(value))
    },
    selectSorting: (value) => {
        dispatch(selectSorting(value))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(SettingsComponent)