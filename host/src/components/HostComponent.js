import React from 'react';

const style = {
    padding: 20,
    outline: '1px dashed red',
    marginBottom: '10px',
}

export function HostComponent() {
    return (
        <div style={ style }>
            Component from HOST app.
        </div>
    );
}
