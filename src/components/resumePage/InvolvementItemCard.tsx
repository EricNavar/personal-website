import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, List, IconButton, Link, Grid, Tooltip, ListItem } from '@mui/material';
import { InvolvementItem } from '../../commonTypes';
import WebIcon from '../../assets/icons/web_fluent';

const useStyles = makeStyles((theme) => ({
  involvementItem: {
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
  },
  involvementItemInner: {
    padding: 24,
  },
  title: {
    textAlign: 'left',
    fontSize: 26
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16
  },
  img: {
    borderRadius: 8,
    width: 50,
    marginRight: 16
  },
  timePeriod: {
    fontSize: '.85rem'
  },
  position: {
    flexGrow: 1,
    fontSize: '.85rem'
  },
  descriptionList: {
    paddingLeft: 12,
    listStyle: 'initial'
  },
  listItem: {
    display: 'flow-root list-item',
    '&::marker': {
      color: theme.palette.primary.main
    }
  },
  positionLine: {
    display: 'flex'
  },
  thumbnailContainer: {
    flexBasis: 800,
    flexGrow: 1,
    width: 800,
    maxWidth: '100%'
  },
  thumbnail: {
    width: 'inherit',
    maxWidth: 'inherit'
  },
  webIcon: {
    width: 24
  }
}));

type PositionsProps = {
  positions: Record<string, string>
}
function Positions(props: PositionsProps) {
  const classes = useStyles();
  return (
    <>
      {Object.keys(props.positions).map((position: string, index: number) =>
        <div className={classes.positionLine} key={index}>
          <Typography component='span' variant='overline' color='textPrimary' className={classes.position}>
            {position}&emsp;
          </Typography>
          <Typography component='span' variant='overline' gutterBottom color='textPrimary' className={classes.timePeriod}>
            {props.positions[position]}
          </Typography>
        </div>
      )}
    </>
  );
}

type DescriptionProps = {
  description: Array<string>
}
function Description(props: DescriptionProps) {
  const classes = useStyles();
  if (Array.isArray(props.description)) {
    return (
      <>
        {props.description.map((line: string) =>
          <ListItem key={line} className={classes.listItem}>
            <Typography variant='body1' color='textPrimary'>
              {line}
            </Typography>
          </ListItem>
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
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <div className={classes.involvementItem}>
        <div className={classes.involvementItemInner}>
          <div className={classes.topRow}>
            <div>
              <img className={classes.img} alt={title + ' icon'} src={icon} />
            </div>
            <div>
              <Link
                className={classes.title}
                color='primary'
                href={link}
                target='_blank'
                component='p'
                variant='h5'
              >
                <b>{title}</b>
              </Link>
            </div>
            {link &&
              <Tooltip title={linkDescription ? linkDescription : ''} aria-label={linkDescription}>
                <IconButton target='_blank' href={link}>
                  <WebIcon className={classes.webIcon} />
                </IconButton>
              </Tooltip>
            }
          </div>
          <Positions positions={positions} />
          <List className={classes.descriptionList}>
            <Description description={description} />
          </List>
        </div>
        {thumbnail &&
          <div className={classes.thumbnailContainer}>
            <React.Suspense fallback={<div />}>
              <img src={thumbnail} className={classes.thumbnail} />
            </React.Suspense>
          </div>
        }
      </div>
    </Grid>
  );
}

export { InvolvementItemCard };
