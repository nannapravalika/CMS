import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TemplateList = () => {
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        // Fetch templates from the server
        fetch('/api/templates')
            .then(response => response.json())
            .then(data => setTemplates(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Available Templates:</h2>
            <ul>
                {templates.map(template => (
                    <li key={template._id}>
                        <Link to={`/edit/${template.name}`}>{template.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TemplateList;
