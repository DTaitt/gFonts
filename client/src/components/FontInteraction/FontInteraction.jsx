import './FontInteraction.css'

import React from 'react'
import { Button } from 'react-materialize';
import { connect } from 'react-redux'
import { addFavorite, deleteFavorite } from 'redux/state/favorites/actions'
import { addSelectedFont } from 'redux/state/selectedFonts/actions'
import { copyCss, copyHtml } from 'utilities/utilities';

const FontInteraction = (props) => (
    <div className="font__interaction">
        <div className="font__interaction__code">
            <Button onClick={() => copyHtml(props.family)}>Copy HTML</Button>
            <Button onClick={() => copyCss(props.family, props.category)}>Copy CSS</Button>
        </div>
        <Button 
            className={`font__interaction__btn ${props.willAddFont ? 'btn_add' : 'btn_delete'} red`} 
            floating
            icon={props.willAddFont ? 'favorite' : 'remove'}
            onClick={
                props.willAddFont
                ? () => props.addFavorite({
                    category: props.category,
                    family: props.family,
                    url: props.url,
                    variants: props.variants
                })
                : () => props.deleteFavorite(props.family)
            }
            waves='light' 
        />
        <Button 
            icon='library_add' 
            floating
            onClick={() => props.addSelectedFont(props.family, props.category)}
        />
    </div>
)

const mapDispatchToProps = ({ addFavorite, deleteFavorite, addSelectedFont })

export default connect(null, mapDispatchToProps)(FontInteraction)