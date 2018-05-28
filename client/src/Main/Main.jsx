import React from 'react';
import './Main.css';
import FontListContainer from '../FontListContainer/FontListContainer'

// import Sidebar from './../Sidebar/Sidebar';

type Props = {}

export default function Main(props: Props) {
    return (
        <main>
            <div className="my-container">
                <FontListContainer />
                {/* <Sidebar /> */}
            </div>
        </main>
    )
}