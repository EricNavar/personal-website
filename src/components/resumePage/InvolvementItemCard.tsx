import React from 'react';
import { Typography, List, IconButton, Grid, Tooltip, ListItem } from '@mui/material';
import { InvolvementItem } from '../../commonTypes';
import WebIcon from '../../assets/icons/web_fluent';
import { styled } from '@mui/material/styles';

const InvolvementItemMain = styled('div')(({ theme }) => ({
  boxShadow: 'rgba(0,0,0, 0.1) 0px 8px 24px',
  overflow: 'hidden',
  borderRadius: 4,
  background: theme.palette.mode === 'light' ? theme.palette.grey['800'] : `linear-gradient(${theme.palette.info.light} 0%, ${theme.palette.info.dark} 100%)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  '&:hover': {
    '& svg': {
      color: '#00a8cc'
    }
  },
  '& *': {
    transition: '.5s ease-in-out'
  }
}));

const InvolvementItemInner = styled('div')({
  padding: 24,
});

const Title = styled(Typography)({
  textAlign: 'left',
  fontSize: 26
});

const TopRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 16
});

const StyledImg = styled('img')({
  borderRadius: 8,
  width: 50,
  marginRight: 16
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

const DescriptionList = styled(List)({
  paddingLeft: 12,
  listStyle: 'initial'
});

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flow-root list-item',
  '&::marker': {
    color: theme.palette.primary.main
  }
}));

const PositionLine = styled('div')({
  display: 'flex',
});

const ThumbnailContainer = styled('div')({
  flexBasis: 800,
  flexGrow: 1,
  width: 800,
  maxWidth: '100%'
});

const Thumbnail = styled('img')({
  width: 'inherit',
  maxWidth: 'inherit'
});

const StyledWebIcon = styled(WebIcon)({
  width: 24,
});

type PositionsProps = {
  positions: Record<string, string>
}
function Positions(props: PositionsProps) {
  return (
    <>
      {Object.keys(props.positions).map((position: string, index: number) =>
        <PositionLine key={index}>
          <Position variant='overline' color='textPrimary'>
            {position}&emsp;
          </Position>
          <TimePeriod variant='overline' gutterBottom color='textPrimary'>
            {props.positions[position]}
          </TimePeriod>
        </PositionLine>
      )}
    </>
  );
}

type DescriptionProps = {
  description: Array<string>
}
function Description(props: DescriptionProps) {
  if (Array.isArray(props.description)) {
    return (
      <>
        {props.description.map((line: string) =>
          <StyledListItem key={line} >
            <Typography variant='body1' color='textPrimary'>
              {line}
            </Typography>
          </StyledListItem>
        )}
      </>
    );
  }
  else {
    return <></>;
  }
}

type InvolvementItemCardProps = {
  involvementItem: InvolvementItem
}
function InvolvementItemCard(props: InvolvementItemCardProps): JSX.Element {
  const { title, description, link, linkDescription, positions, icon, thumbnail } = props.involvementItem;

  return (
    <Grid item xs={12}>
      <InvolvementItemMain>
        <InvolvementItemInner>
          <TopRow>
            <div>
              <StyledImg alt={title + ' icon'} src={icon} />
            </div>
            <div>
              <Title
                color='primary'
                variant='h5'
              >
                <b>{title}</b>
              </Title>
            </div>
            {link &&
              <Tooltip title={linkDescription ? linkDescription : ''} aria-label={linkDescription}>
                <IconButton target='_blank' href={link}>
                  <StyledWebIcon />
                </IconButton>
              </Tooltip>
            }
          </TopRow>
          <Positions positions={positions} />
          <DescriptionList>
            <Description description={description} />
          </DescriptionList>
        </InvolvementItemInner>
        {thumbnail &&
          <ThumbnailContainer>
            <React.Suspense fallback={<div />}>
              <Thumbnail src={thumbnail} />
            </React.Suspense>
          </ThumbnailContainer>
        }
      </InvolvementItemMain>
    </Grid>
  );
}

export { InvolvementItemCard };
