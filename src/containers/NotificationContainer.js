import { connect } from 'react-redux';
import { NotificationFavorite } from '../templates/Notification';

const mapStateToProps = (state) => ({
    amount: state.popularReducer.amountFavorite,
    statusFavorite: state.popularReducer.statusFavorite
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect (mapStateToProps,mapDispatchToProps) (NotificationFavorite);