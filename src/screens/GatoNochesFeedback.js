import React from 'react';

export default function GatoNochesFeedback() {
    React.useEffect(() => {
        document.title = 'Gato Noches';
        window.scrollTo({
          top: 0,
          left: 0,
        });
      },[]);
    return (
        <div style={{width:'100%', height:'100vh'}}>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeace004Eo-QQn9Pd3Gz8HDvkZQCLQSAwgy2CZ87c1W03wLYw/viewform?embedded=true"
                width="100%"
                height="100%"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                title="Gato Noches Feedback"
            >
                Loading…
            </iframe>
        </div>
    )
}