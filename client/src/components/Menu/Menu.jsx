import './Menu.css';

import Favorites from 'components/Favorites/Favorites';
import Filter from 'components/Filter/Filter';
import FontSet from 'components/FontSet/FontSet';
import React from 'react';
import {
	Badge,
	Button,
	Card,
	Collapsible,
	CollapsibleItem,
	SideNav,
} from 'react-materialize';
import { connect } from 'react-redux';

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
				<Badge>{props.favorites.length}</Badge>
				<CollapsibleItem
					key={1}
					header='Favorites'
					icon='favorite'
					className='sidenav__menu__item favorites'
				>
					<Favorites />
				</CollapsibleItem>
				<CollapsibleItem
					key={2}
					header='Font Set'
					icon='library_add'
					className='sidenav__menu__item font-set'
				>
					<FontSet />
				</CollapsibleItem>
			</Collapsible>
		</Card>  
	</SideNav>
);

const mapStateToProps = (state) => ({ favorites: state.favorites })

export default connect(mapStateToProps)(Menu);