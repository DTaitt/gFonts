// @flow
import React from 'react';
import FavItem from 'components/FavItem/FavItem';
import {deleteFavorite} from 'redux/actions/actions';
import {connect} from 'react-redux';

type Props = {
	family: string,
	category: string,
    url: string,
    deleteFavorite():void,
}

function FavItemContainer(props: Props) {
	return <FavItem {...props} deleteFavorite = {props.deleteFavorite} />;
}

const mapDispatchToProps = ({
	deleteFavorite,
});

const ConnectedFavItemContainer = connect(null, mapDispatchToProps)(FavItemContainer);

export default ConnectedFavItemContainer;