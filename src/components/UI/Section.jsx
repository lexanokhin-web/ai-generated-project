import React from 'react';

const Section = ({ id, className = "", children, ...props }) => {
    return (
        <section id={id} className={`py-24 relative ${className}`} {...props}>
            {children}
        </section>
    );
};

export default Section;
