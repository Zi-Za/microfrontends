import React, { Component, Suspense } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

const style = {
    padding: 20,
    outline: '1px dashed green',
    marginBottom: '10px',
}

const RemoteComponent = React.lazy(() => import('remoteApp/RemoteComponent')); 

class OmnidirectionalComponent extends Component {
    render() {
        return (
            <div style={ style }>
                Component from Omnidirectional app.
                <br/>
                <br/>
                <ErrorBoundary>
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <RemoteComponent />
                    </Suspense>
                    <div/>
                </ ErrorBoundary>
            </div>
        );
    }
}

export default OmnidirectionalComponent;
