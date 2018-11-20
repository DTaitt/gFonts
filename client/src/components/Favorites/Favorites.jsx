// @flow
import React, { Fragment, PureComponent } from 'react';
import {connect} from 'react-redux';
import {initializeFavData} from 'redux/actions/actions';
import FavItem from '../FavItem/FavItem';

type Props = {
    initializeFavData():void,
    favorites: Object[],
}
type State = {}

class Favorites extends PureComponent<Props, State> {

	componentDidMount() {
		this.props.initializeFavData();
	}

	render() {
		return(
			<Fragment>
				{
					this.props.favorites.map(fav => {
						return(
							<FavItem 
								key = {fav.family}
								{...fav}
							/>
						);
					})
				}
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => ({
	favorites: state.favorites,
})

const mapDispatchToProps = ({
	initializeFavData
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);