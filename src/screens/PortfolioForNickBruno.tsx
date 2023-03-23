import React from 'react';

import { Typography } from '@mui/material';

const PortfolioForNickBruno = () => {
    React.useEffect(() => {
        document.title = 'Portfolio for Nick Bruno to see 😳';
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }, []);

    return (
        <div>
            <Typography variant='body1'>I dont know if I got ghosted but I took on a different position thx</Typography>
        </div>
    );
};

export { PortfolioForNickBruno };
