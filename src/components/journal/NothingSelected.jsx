import React from 'react';
import { Sidebar } from './Sidebar';

// import { NothingSelected } from './NothingSelected';


export const NothingSelected = () => {
    return (
        <div className="nothing__main-content">
            
            <p>
                select something 
                <br />
                or create an entry!

            </p>

            <i className="far fa-star fa-4x mt-5"></i>


        </div>
    )
}