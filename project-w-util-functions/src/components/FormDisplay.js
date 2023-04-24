import React, { useContext } from 'react';
import { SurveyContext } from '../pages/SurveyPage';

export default function FormDisplay() {
    
    const { allText } = useContext(SurveyContext);

    return (
        <div>
            <h1>Form Display</h1>
            {allText.map((text, index) => (
                <p key={index} style={{backgroundColor: "coral", padding: 10}}>{text}</p>
            ))}
        </div>
    )
}