import React from 'react';

export default function EmbeddedResume() {
    return (
        <div style={{width:'100%', height:'100vh'}}>
            <iframe
                src="https://drive.google.com/file/d/1xgoTf2n6bBErGkTrD2MK5uN5tJd5JR-Q/preview"
                width="100%"
                height="100%"
                title="Resume"
            >
            </iframe>
        </div>
    )
}