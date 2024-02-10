const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, '../public')));

// API route to fetch template data
app.get('/api/template', (req, res) => {
    // Replace this with your logic to fetch template data from storage
    const templateData = {
        html: '<h1>Hello, World!</h1>',
        css: 'h1 { color: blue; }',
        // Other template data...
    };

    res.json(templateData);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
