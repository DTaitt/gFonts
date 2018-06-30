// @flow
import React from 'react';
import Font from 'components/Font/Font';
import {addFavorite} from 'redux/actions/actions';
import {connect} from 'react-redux';

type Props = {
    category: string,
    family: string,
    id: string,
    url: string,
	variants: string[],
	addFavorite(): void,
}

function FontContainer(props: Props) {
	return (
		<Font {...props} addFavorite={props.addFavorite} />
	);
}

const mapDispatchToProps = ({
	addFavorite,
});

const ConnectedFontContainer = connect(null, mapDispatchToProps)(FontContainer);
export default ConnectedFontContainer;