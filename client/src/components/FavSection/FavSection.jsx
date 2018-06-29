//@flow
import React from 'react';
import FavItem from '../FavItem/FavItem';

type Props = {
	favData: Object[],
}

export default function FavSection(props: Props) {
	return(
		<div className="fav-section">
			{
				props.favData.map(fav => {
					return(
						<FavItem 
							key = {fav.id}
							{...fav}
						/>
					);
				})
			}
		</div>
	);
}