import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {initializeFontData} from './actions'

type Props = {};
type State = {};

class FontListContainer extends Component<Props, State>{
    componentDidMount() {
        this.fetchFontsData();
    }

    async fetchFontsData() {
        try {
            const res = await axios.get(
                `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyAOVSz0lHeFAs7ll5LO6HTADinYVxy1vt4`
            );
            this.props.initializeFontData(res.data.items)
            console.log(this.props.fontData)
        } catch (error) {
            console.log(error)
        }
        console.log('test')
    }

    render() {
        return (
            <div></div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fontData: state.fontData,
    }
}

const mapDispatchToProps = ({
    initializeFontData,
})

export default connect(mapStateToProps, mapDispatchToProps)(FontListContainer);