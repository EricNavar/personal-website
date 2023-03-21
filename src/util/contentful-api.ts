import { marked } from 'marked';

import { ContentfulProject, Project } from '../commonTypes';
import { client } from '../util/client';

export const getContentfulProjects = async (extraParams: object) => {
    return client
        .getEntries({
            content_type: 'project',
            ...extraParams
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((response: any) => {
            const items = response.items as ContentfulProject[];
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
