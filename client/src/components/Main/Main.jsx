//@flow
import React from 'react';
import './Main.css';
import FontListContainer from 'components/FontListContainer/FontListContainer';
import Sidebar from 'components/Sidebar/Sidebar';

type Props = {}

export default function Main(props: Props) {
    return (
        <main>
            <div className="my-container">
                <FontListContainer />
                <Sidebar />
            </div>
        </main>
    )
}