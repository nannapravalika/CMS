import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TemplateList from './components/TemplateList';
import TemplateEditor from './components/TemplateEditor';

const App = () => (
    <Router>
        <div>
            <h1>CMS Example</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>

            <Route exact path="/" component={TemplateList} />
            <Route path="/edit/:templateName" component={TemplateEditor} />
        </div>
    </Router>
);

export default App;
