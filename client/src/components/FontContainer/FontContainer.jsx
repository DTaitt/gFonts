// @flow
import React, { Component, Fragment } from 'react';
import Font from 'components/Font/Font';

type Props = {
    category: string,
    family: string,
    id: string,
    url: string,
    variants: string[],
}

type State = {}

export class FontContainer extends Component<Props, State> {
	render() {
		return (
			<Fragment>
				<Font {...this.props} />
			</Fragment>
		);
	}
}

const ConnectedFontContainer = FontContainer;
export default ConnectedFontContainer;