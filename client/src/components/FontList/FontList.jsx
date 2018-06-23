// @flow
import React from 'react';
import './FontList.css';
import ConnectedFontContainer from 'components/FontContainer/FontContainer';
import { formatFontUrl } from 'utilities/utilities';

type Props = {
    fontData: Object[],
};

export default function FontList(props: Props) {
	return (
		<section className="card-display">
			{
				props.fontData.map((font) => {
					return (
						<ConnectedFontContainer
							category={font.category}
							family={font.family}
							key={font.family}
							id={font.family}
							url={formatFontUrl(font.urlFamily)}
							variants={font.variants}
						/>
					);
				})
			}
		</section>
	);
}