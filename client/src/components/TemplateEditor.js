import React, { useState, useEffect } from 'react';
import TemplateRenderer from './TemplateRenderer';

const TemplateEditor = () => {
    const [templateData, setTemplateData] = useState(null);

    useEffect(() => {
        // Fetch template data from the server
        fetch('/api/template')
            .then(response => response.json())
            .then(data => setTemplateData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {templateData ? (
                <TemplateRenderer templateData={templateData} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default TemplateEditor;
