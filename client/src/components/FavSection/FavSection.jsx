//@flow
import React from 'react';
import ConnectedFavItemContainer from 'components/FavItemContainer/FavItemContainer';

type Props = {
	favData: Object[],
}

export default function FavSection(props: Props) {
	return(
		<div className="fav-section">
			{
				props.favData.map(fav => {
					return(
						<ConnectedFavItemContainer 
							key = {fav.family}
							{...fav}
						/>
					);
				})
			}
		</div>
	);
}