import { marked } from 'marked';

import { ContentfulProject, Project } from '../commonTypes';
import { client } from '../util/client';

export const getContentfulProjects = async () => {
    return client
        .getEntries({
            content_type: 'projectList',
            include:3, // depth of referenced entries in response object
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((response: any) => {
            const items = response.items[0].fields.projects as ContentfulProject[];
            return items.map((item: ContentfulProject) => {
                return {
                    _id: item.fields.id,
                    tools: item.fields.tools,
                    headerText: item.fields.headerText,
                    subText: marked.parse(item.fields.subText),
                    image: item.fields.image.fields.file.url,
                    altLabel: item.fields.altLabel,
                    links: item.fields.links.map((linkItem) => {
                        return {
                            ariaLabel: linkItem.fields.ariaLabel,
                            label: linkItem.fields.label,
                            hyperlink: linkItem.fields.hyperlink,
                            icon: linkItem.fields.icon.fields.file.url,
                        };
                    }),
                };
            }) as Project[];
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((error: any) => {
            console.log(error);
            return null;
        });
};
