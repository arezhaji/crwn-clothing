import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    
    return ( 
        <div className={`menu-item ${size}`}>
            <div className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}>
                    <h1></h1>
                </div>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>{linkUrl}</span>
            </div>
        </div>
     );
}
 
export default MenuItem;