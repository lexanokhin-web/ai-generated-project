import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Component for injecting JSON-LD structured data into the page
 * @param {Object} data - The structured data object to inject
 */
const StructuredData = ({ data }) => {
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(data)}
            </script>
        </Helmet>
    );
};

export default StructuredData;
