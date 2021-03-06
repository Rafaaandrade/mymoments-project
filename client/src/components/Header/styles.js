import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  [theme.breakpoints.down("sm")]: {
    mainContent: {
      flexDirection: "column-reverse"
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '60%',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',

  },
}));

export default useStyles;
