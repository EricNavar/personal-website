/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as contentful from 'contentful';

export const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID!,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN!
});
