import React from 'react';

const TemplateRenderer = ({ templateData }) => {
    // Render the template using the data
    return (
        <div dangerouslySetInnerHTML={{ __html: templateData.html }}></div>
    );
};

export default TemplateRenderer;
