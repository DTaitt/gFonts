// @flow
import React from 'react';
import { Collapsible, CollapsibleItem, Card, Badge } from 'react-materialize';
import './Sidebar.css';
import Filter from 'components/Filter/Filter';
import ConnectedFavSectionContainer from 'components/FavSectionContainer/FavSectionContainer';
import {connect} from 'react-redux';

type Props = {
	favData: Object[]
}

function Sidebar({favData}: Props){
	return(
		<Card className='sidebar cyan darken-2'>
			<Collapsible accordion>
				<CollapsibleItem header='Filter' icon='search' className='search'>
					<Filter />
				</CollapsibleItem>
				<Badge>{favData.length}</Badge>
				<CollapsibleItem header='Favorites' icon='favorite' className='favorite'>
					<ConnectedFavSectionContainer />
				</CollapsibleItem>
			</Collapsible>
		</Card>  
	);
}

function mapStateToProps(state) {
	return {
		favData: state.favData,
	};
}

const ConnectedSidebar = connect(mapStateToProps)(Sidebar);
export default ConnectedSidebar;