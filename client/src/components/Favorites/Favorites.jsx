import './Favorites.css'

import FavItem from 'components/FavItem/FavItem';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initializeFavData } from 'redux/state/favorites/actions';

const Favorites = (props) => {
	useEffect(() => {
		props.initializeFavData()
	}, [])

	return props.favorites.map(fav => <FavItem key = {fav.family} {...fav} />
	)
}

const mapStateToProps = (state) => ({ favorites: state.favorites })
const mapDispatchToProps = ({ initializeFavData });

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);