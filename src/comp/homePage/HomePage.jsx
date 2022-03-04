import React from "react";
import SectionOne from './SectionOne'
import './HomePage.scss';
import SectionTwo from './SectionTwo';

export default function HomePage({navigateTo}) {
    return (
        <div className="HomePage">
            <SectionOne navigateTo={navigateTo} />
            <SectionTwo />
        </div>
    )
}

