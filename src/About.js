import React, { useState } from 'react';
import PropTypes from 'prop-types'


export default function About(props) {
    
    
    const accordionStyle = {
        color: props.mode === 'dark' ? 'white' : 'ThreeDDarkShadow',
        backgroundColor: props.mode === 'dark' ? 'ThreeDDarkShadow' : 'white',
    };

    

    return (
        <div className='container my-3'>
            <div className=" accordion" id="accordionExample">
                {[1, 2, 3].map((item) => (
                    <div className="accordion-item" style={accordionStyle} key={item}>
                        <h2 className="accordion-header" style={accordionStyle} id={`heading${item}`}>
                            <button className="accordion-button" style={accordionStyle} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item}`} aria-expanded="true" aria-controls={`collapse${item}`}>
                                Accordion Item #{item}
                            </button>
                        </h2>
                        <div id={`collapse${item}`} style={accordionStyle} className={`accordion-collapse collapse${item === 1 ? ' show' : ''}`} aria-labelledby={`heading${item}`} data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={accordionStyle}>
                                <strong>This is the {item === 1 ? 'first' : (item === 2 ? 'second' : 'third')} item's accordion body.</strong> It is {item === 1 ? 'shown' : 'hidden'} by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
    );
}
