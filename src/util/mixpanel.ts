import mixpanel from 'mixpanel-browser';

import { PageName } from '../commonTypes';

export const logEvent = (eventName: string, source: PageName, extraData?: object) => {
  mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN ?? '', { debug: process.env.REACT_APP_DEBUG === 'true' });
  mixpanel.track(eventName, {
    'source': source,
    ...extraData
  });
};
