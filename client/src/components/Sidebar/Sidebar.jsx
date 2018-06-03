// @flow
import React from 'react';
import { Collapsible, CollapsibleItem, Card, Badge } from 'react-materialize';
import './Sidebar.css';

type Props = {}

export default function Sidebar(props:Props){
    return(
        <Card className='sidebar cyan darken-2'>
            <Collapsible accordion>
                <CollapsibleItem header='Filter' icon='search'>
                    <p>FilterContainer</p>
                </CollapsibleItem>
                <Badge>Num of Favs</Badge>
                <CollapsibleItem header='Favorites' icon='favorite' className='favorite'>
                    <p>FavCardContainer</p>
                </CollapsibleItem>
            </Collapsible>
        </Card>  
    )
}