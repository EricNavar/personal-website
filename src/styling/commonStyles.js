import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  backgroundGradient: {
    backgroundImage: theme.palette.backgroundGradient,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  }
}));

export default useStyles;