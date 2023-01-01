import React from 'react';
import {
  Typography,
  List,
  IconButton,
  Grid,
  Tooltip,
} from '@mui/material';
import { ExperienceItem } from '../../commonTypes';
import WebIcon from '../../assets/icons/web_fluent';
import { styled } from '@mui/material/styles';

const InvolvementItemMain = styled('div')(({ theme }) => ({
  boxShadow: 'rgba(0,0,0, 0.1) 0px 8px 24px',
  overflow: 'hidden',
  borderRadius: 4,
  background:
    theme.palette.mode === 'light'
      ? theme.palette.grey['800']
      : `linear-gradient(${theme.palette.info.light} 0%, ${theme.palette.info.dark} 100%)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  '&:hover': {
    '& svg': {
      color: '#00a8cc',
    },
  },
  '& *': {
    transition: '.5s ease-in-out',
  },
}));

const InvolvementItemInner = styled('div')({
  padding: 24,
});

const Title = styled(Typography)({
  textAlign: 'left',
  fontSize: 26,
});

const TopRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 16,
});

const StyledImg = styled('img')({
  borderRadius: 8,
  width: 50,
  marginRight: 16,
});

const TimePeriod = styled(Typography)({
  fontSize: '.85rem',
  lineHeight: '1rem',
});

const Position = styled(Typography)({
  flexGrow: 1,
  fontSize: '.85rem',
  lineHeight: '1rem',
});

const DescriptionContainer = styled(List)({
  paddingLeft: 12,
  listStyle: 'initial',
});

const PositionLine = styled('div')({
  display: 'flex',
});

const StyledWebIcon = styled(WebIcon)(({ theme }) => ({
  '& use': {
    fill: theme.palette.primary.contrastText,
  },
  '& path': {
    fill: theme.palette.primary.contrastText,
  },
}));

type InvolvementItemCardProps = {
  involvementItem: ExperienceItem;
};
function InvolvementItemCard(props: InvolvementItemCardProps): JSX.Element {
  const {
    organization,
    description,
    link,
    linkDescription,
    position,
    organizationIcon,
    time,
  } = props.involvementItem;

  return (
    <Grid item xs={12}>
      <InvolvementItemMain>
        <InvolvementItemInner>
          <TopRow>
            <div>
              <StyledImg alt={organization + ' icon'} src={organizationIcon} />
            </div>
            <div>
              <Title color="primary" variant="h5">
                <b>{organization}</b>
              </Title>
            </div>
            {link && (
              <Tooltip
                title={linkDescription ? linkDescription : ''}
                aria-label={linkDescription}
              >
                <IconButton target="_blank" href={link}>
                  <StyledWebIcon />
                </IconButton>
              </Tooltip>
            )}
          </TopRow>
          <PositionLine>
            <Position variant="overline" color="textPrimary">
              {position}&emsp;
            </Position>
            <TimePeriod variant="overline" gutterBottom color="textPrimary">
              {time}
            </TimePeriod>
          </PositionLine>
          <DescriptionContainer>
            <Typography
              variant="body1"
              color="textPrimary"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </DescriptionContainer>
        </InvolvementItemInner>
      </InvolvementItemMain>
    </Grid>
  );
}

export { InvolvementItemCard };
