import { makeStyles } from '@material-ui/core/styles';

const commonStyles = makeStyles(theme => ({
  backgroundGradient: {
    backgroundImage: `linear-gradient(${theme.palette.info.light} 0%, ${theme.palette.info.dark} 100%)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }
}));

export { commonStyles };
