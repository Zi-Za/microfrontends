import React, { Component, Suspense } from 'react';
import { HostComponent } from './HostComponent';
import { ErrorBoundary } from './ErrorBoundary';

const RemoteComponent = React.lazy(() => import('remoteApp/RemoteComponent')); 
const OmnidirectionalComponent = React.lazy(() => import('omnidirectionalApp/OmnidirectionalComponent'));
console.log('RemoteComponent:', RemoteComponent);
console.log('OmnidirectionalComponent', OmnidirectionalComponent);

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>
                    React App (Host)
                </h1>
                <HostComponent />
                <br />
                <ErrorBoundary>
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <RemoteComponent />
                    </Suspense>
                    <div/>
                </ ErrorBoundary>
                <br />
                <ErrorBoundary>
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <OmnidirectionalComponent />
                    </Suspense>
                    <div/>
                </ ErrorBoundary>
            </div>
        );
    }
}

export default App;
