import React, { useEffect } from 'react';
import './FullScreenPanelContainer.scss';

const FullScreenPanelContainer = ({ children }) => {

    useEffect(() => {

        document.body.style.overflow = "hidden";

        return () => document.body.style.overflow = "initial";

    }, []);

    return (
        <div className='FullScreenPanelContainer'>
            {children}
        </div>
    );
};

export default FullScreenPanelContainer;