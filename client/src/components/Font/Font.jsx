//@flow
import React from 'react';
import {CardPanel, Button} from 'react-materialize';

import './Font.css';
import FontInfo from 'components/FontInfo/FontInfo';
import AddToProjectModal from 'components/AddToProjectModal/AddToProjectModal';
import {formatFontNameForHref} from 'utilities/utilities';

type Props = {
    category: string,
    family: string,
    id: string,
    url: string,
	variants: string[],
	addFavorite(fav: Object): void,
}

export default function Font({category, family, id, url, variants, addFavorite}: Props){
	return(
		<CardPanel 
			className="font-card white black-text z-depth-2"
		>
			<FontInfo 
				category={category} 
				family={family} 
				id={id}
				url={url}
				variants={variants}
			/>
			<div className="font-interaction">
				<Button 
					floating 
					className='red' 
					waves='light' 
					icon='favorite'
					onClick={() => {
						addFavorite({
							category, 
							family, 
							url, 
							hrefFamily: formatFontNameForHref({family})
						});
					}}
				/>
				<AddToProjectModal 
					category={category} 
					family={family} 
					url={url}
				/>
			</div>
		</CardPanel>
	);
}