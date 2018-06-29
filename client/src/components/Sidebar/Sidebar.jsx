// @flow
import React from 'react';
import { Collapsible, CollapsibleItem, Card, Badge } from 'react-materialize';
import './Sidebar.css';
import Filter from 'components/Filter/Filter';
import ConnectedFavSectionContainer from 'components/FavSectionContainer/FavSectionContainer';

type Props = {}

export default function Sidebar(props: Props){
	return(
		<Card className='sidebar cyan darken-2'>
			<Collapsible accordion>
				<CollapsibleItem header='Filter' icon='search' className='search'>
					<Filter />
				</CollapsibleItem>
				<Badge>Num of Favs</Badge>
				<CollapsibleItem header='Favorites' icon='favorite' className='favorite'>
					<ConnectedFavSectionContainer />
				</CollapsibleItem>
			</Collapsible>
		</Card>  
	);
}