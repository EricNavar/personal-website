import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, IconButton, Link, Grid, Tooltip, ListItem } from '@material-ui/core';
import { Project } from '../../commonTypes';

const useStyles = makeStyles(theme => ({
  involvementItem: {
    boxShadow:  'rgba(0,0,0, 0.1) 0px 8px 24px',
    overflow: 'hidden',
    borderRadius: 4,
    background: theme.palette.type === 'light' ? theme.palette.grey['800'] : `linear-gradient(${theme.palette.info.light} 0%, ${theme.palette.info.dark} 100%)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    height: '100%',
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
  }
}));

type InvolvementItemProps = {
  involvementItem: Project
}

function InvolvementItem(props: InvolvementItemProps):JSX.Element {
  const { title, description, link, linkDescription, positions, icon } = props.involvementItem;
  const classes = useStyles();

  function Description() {
    if (Array.isArray(description)) {
      return (
        <>
          {description.map((line) =>
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

  function Positions() {
    return (
      <>
        {Object.keys(positions).map((position: string, index: number) =>
          <div className={classes.positionLine} key={index}>
            <Typography component='span' variant='overline' color='textPrimary' className={classes.position}>
              {position}&emsp;
            </Typography>
            <Typography component='span' variant='overline' gutterBottom color='textPrimary' className={classes.timePeriod}>
              {positions[position]}
            </Typography>
          </div>
        )}
      </>
    );
  }

  return (
    <Grid item sm={12} lg={6}>
      <div className={classes.involvementItem}>
        <div className={classes.involvementItemInner}>
          <div className={classes.topRow}>
            <div>
              <img className={classes.img} alt={title + ' icon'} src={icon}></img>
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
              <Tooltip title={linkDescription} aria-label={linkDescription}>
                <IconButton target='_blank' href={link}>
                  <Link />
                </IconButton>
              </Tooltip>
            }
          </div>
          <Positions />
          <List className={classes.descriptionList}>
            <Description />
          </List>
        </div>
      </div>
    </Grid>
  );
}

export { InvolvementItem };
