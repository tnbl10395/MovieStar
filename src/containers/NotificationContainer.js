import { connect } from 'react-redux';
import { NotificationFavorite } from '../templates/Notification';

const mapStateToProps = (state) => ({
    amount: state.dataReducer.amountFavorite,
    statusFavorite: state.dataReducer.statusFavorite
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect (mapStateToProps,mapDispatchToProps) (NotificationFavorite);