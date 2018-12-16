// @flow
import React from 'react';
import { connect } from 'react-redux';
import { 
	Collapsible, 
	CollapsibleItem, 
	Card, 
	Badge,
	SideNav,
	Button,
} from 'react-materialize';
import Filter from 'components/Filter/Filter';
import Favorites from 'components/Favorites/Favorites';

import './Menu.css';

const Menu = (props) => (
	<SideNav
		className='sidenav'
		fixed
		trigger={
			<Button 
				floating 
				icon='menu' 
				className='sidenav__close-btn'
				></Button>
			}
	>
		<Card className='sidenav__menu darken-2'>
			<Collapsible
				defaultActiveKey={0}
				accordion
			>
				<CollapsibleItem 
					key={0} 
					header='Filter' 
					icon='search' 
					className='sidenav__menu__item'
				>
					<Filter />
				</CollapsibleItem>
				<Badge>{props.favorites.length}</Badge>
				<CollapsibleItem
					key={1}
					header='Favorites'
					icon='favorite'
					className='sidenav__menu__item'
				>
					<Favorites />
				</CollapsibleItem>
			</Collapsible>
		</Card>  
	</SideNav>
);

const mapStateToProps = (state) => ({ favorites: state.favorites })

export default connect(mapStateToProps)(Menu);