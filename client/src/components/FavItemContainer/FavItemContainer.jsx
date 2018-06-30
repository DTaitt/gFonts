// @flow
import React, { Component } from 'react';
import FavItem from 'components/FavItem/FavItem';
import {deleteFavorite} from 'redux/actions/actions';
import {connect} from 'react-redux';

type Props = {
	family: string,
	category: string,
    url: string,
    deleteFavorite():void,
}

class FavItemContainer extends Component<Props, State> {
	render() { 
		return (
			<FavItem {...this.props} deleteFavorite = {this.props.deleteFavorite} />
		);
	}
}

const mapDispatchToProps = ({
	deleteFavorite,
});

const ConnectedFavItemContainer = connect(null, mapDispatchToProps)(FavItemContainer);

export default ConnectedFavItemContainer;