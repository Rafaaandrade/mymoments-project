import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down("sm")]: {
    mainContent: {
      flexDirection: "column-reverse",
    },
  },
}));

export default useStyles;
