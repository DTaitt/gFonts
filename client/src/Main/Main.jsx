//@flow
import React from 'react';
import './Main.css';
import FontListContainer from '../FontListContainer/FontListContainer';

type Props = {}

export default function Main(props: Props) {
    return (
        <main>
            <div className="my-container">
                <FontListContainer />
            </div>
        </main>
    )
}