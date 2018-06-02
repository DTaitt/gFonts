import React, { Component, Fragment } from "react";
import axios from 'axios';
import {connect} from 'react-redux';
import {initializeFontData} from './actions'

// import Main from './../Main/Main';


type Props = {};
type State = {};

export class MainContainer extends Component<Props, State> {

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
    }

    render() {
        return (
            <Fragment>
                <p>asdf</p>
            </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);