import React, { Component } from 'react';
import OmnidirectionalComponent from './OmnidirectionalComponent';

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>
                    React App (Omnidirectional)
                </h1>
                <OmnidirectionalComponent />
            </div>
        );
    }
}

export default App;
