import React from 'react';

import { Link, Typography } from '@mui/material';

import AmongUsDancing from '../assets/images/AmongUsDancing.gif';
import { CostBreakdown } from '../components/CostBreakdown';
import { ResumeLink } from '../components/resumePage/ResumeLink';

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
            <Typography variant='body1'>This is the portfolio I made for Nick Bruno to see so that I can get paid to work on the hockey app 😤</Typography>
            <ResumeLink />

            <img src={AmongUsDancing} />
            <Typography>
                Making React apps is all I know how to do and it&apos;s the only thing I&apos;m good at and I&apos;m the only one interested in working on this app.
            </Typography>
            <br/>
            <Typography>
                Other apps I have worked on (in order from oldest to newest)
            </Typography>
            <br/>
            <ul>
                <li>
                    <Link gutterBottom variant='body1' href='https://play.google.com/store/apps/details?id=com.ufsec.Clubfinity&pli=1'>Clubfinity, an app I worked on for a club at UF</Link><br/>
                </li>
                <li>
                    <Link gutterBottom variant='body1' href='https://play.google.com/store/apps/details?id=com.asurion.android.protech.att'>AT&T ProTech, an app I worked on furing my internship</Link><br/>
                </li>
                <li>
                    <Link gutterBottom variant='body1' href='https://github.com/common-ground-uf/common-ground'>Common Ground, an app I made for my Senior project and I didn&apos;t put on any official app store but it&apos;s real and it&apos;s cool</Link><br/>
                </li>
            </ul>
            <br/>
            <Typography variant='h4' gutterBottom>Cost breakdown</Typography>
            <CostBreakdown />
            <br/>
        </div>
    );
};

export { PortfolioForNickBruno };
