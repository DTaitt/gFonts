import './FontInteraction.css'

import React from 'react'
import { Button, Icon } from 'react-materialize';
import { connect } from 'react-redux'
import { addFavorite, deleteFavorite } from 'redux/state/favorites/actions'
import { addSelectedFont } from 'redux/state/selectedFonts/actions'
import { copyCss, copyHtml } from 'utilities/utilities';

const FontInteraction = (props) => (
    <div className="font__interaction">
        <div className="font__interaction__code">
            <Button onClick={() => copyHtml(props.family)}>HTML<Icon left>content_copy</Icon></Button>
            <Button onClick={() => copyCss(props.family, props.category)}>CSS<Icon left>content_copy</Icon></Button>
        </div>
        <div className="font__interaction__add">
            <Button 
                className={`font__interaction__btn ${props.willAddFont ? 'btn_add' : 'btn_delete'} red`} 
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
            >Fav<Icon left>{props.willAddFont ? 'favorite' : 'remove'}</Icon></Button>
            <Button 
                className='blue'
                onClick={() => props.addSelectedFont(props.family, props.category)}
            >Set<Icon left>library_add</Icon></Button>
        </div>
    </div>
)

const mapDispatchToProps = ({ addFavorite, deleteFavorite, addSelectedFont })

export default connect(null, mapDispatchToProps)(FontInteraction)