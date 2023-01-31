import React from 'react';

import { Typography } from '@mui/material';

import { CardButtonLink } from './CardButtonLink';
import { CodingProjectThumbnail } from './CodingProjectThumbnail';
import { Project, ProjectLink } from '../../commonTypes';
import {
  CardHeader,
  CardHeaderText,
  HeaderText,
  Item,
  ItemWrapper,
  PhotoWrapper,
  SubTextContainer,
} from '../../styling/homePageStyling';

type CodingProjectDesktopProps = {
  project: Project;
};

function CodingProject(props: CodingProjectDesktopProps): JSX.Element {
  const { headerText, tools, subText, image, altLabel, links } = props.project;

  return (
    <ItemWrapper elevation={4}>
      <PhotoWrapper>
        <CodingProjectThumbnail image={image} altLabel={altLabel} />
      </PhotoWrapper>
      <Item>
        <CardHeader>
          <CardHeaderText>
            <Typography
              variant="overline"
              display="block"
              color="textSecondary"
            >
              {tools}
            </Typography>
            <HeaderText variant="h5">{headerText}</HeaderText>
          </CardHeaderText>
        </CardHeader>
        <SubTextContainer
          color="textPrimary"
          variant="body1"
          dangerouslySetInnerHTML={{ __html: subText }}
        />
        {links.map((link: ProjectLink, value: number) => (
          <CardButtonLink key={`link-${value}`} {...link} />
        ))}
      </Item>
    </ItemWrapper>
  );
}

export { CodingProject };
