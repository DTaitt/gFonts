// @flow
import React, { Component, Fragment } from 'react';
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

type State = {}

export class FontContainer extends Component<Props, State> {
	render() {
		return (
			<Fragment>
				<Font {...this.props} addFavorite={this.props.addFavorite} />
			</Fragment>
		);
	}
}

const mapDispatchToProps = ({
	addFavorite,
});

const ConnectedFontContainer = connect(null, mapDispatchToProps)(FontContainer);
export default ConnectedFontContainer;