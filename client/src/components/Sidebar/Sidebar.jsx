// @flow
import React from 'react';
import { Collapsible, CollapsibleItem, Card, Badge } from 'react-materialize';
import './Sidebar.css';
import Filter from 'components/Filter/Filter';
import Favorites from 'components/Favorites/Favorites';
import {connect} from 'react-redux';

type Props = {
	favorites: Object[]
}

const Sidebar = (props: Props) => {
	return(
		<Card className='sidebar cyan darken-2'>
			<Collapsible accordion>
				<CollapsibleItem header='Filter' icon='search' className='search'>
					<Filter />
				</CollapsibleItem>
				<Badge>{props.favorites.length}</Badge>
				<CollapsibleItem header='Favorites' icon='favorite' className='favorite'>
					<Favorites />
				</CollapsibleItem>
			</Collapsible>
		</Card>  
	);
}

const mapStateToProps = (state) => ({
	favorites: state.favorites
})

export default connect(mapStateToProps)(Sidebar);