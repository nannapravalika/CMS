const express = require('express');
const Template = require('../models/Template');
const router = express.Router();

// Get all templates
router.get('/templates', async (req, res) => {
    try {
        const templates = await Template.find();
        res.json(templates);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Get template by name
router.get('/templates/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const template = await Template.findOne({ name });
        if (!template) {
            res.status(404).send('Template not found');
            return;
        }
        res.json(template);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Save or update a template
router.post('/saveTemplate', async (req, res) => {
    const { templateName, templateContent } = req.body;

    try {
        let template = await Template.findOne({ name: templateName });

        if (!template) {
            template = new Template({ name: templateName, content: templateContent });
        } else {
            template.content = templateContent;
        }

        await template.save();
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
