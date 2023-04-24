import React from 'react';
import AnotherChild from './AnotherChild';


export default function Child() {

    return (
        <div>
            <h2>CHILD NOT USING CONTEXT</h2>
            <AnotherChild />
        </div>
    )
}