import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
interface IProps {
  title: string;
}
const useStyles = makeStyles((theme) => ({
  boardHeader: {
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.grey[200],
  },
  boardTitle: {
    fontWeight: "bold",
  },
}));

const BoardHeader: React.FC<IProps> = ({ title }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.boardHeader}>
      <Typography component="h6" variant="h6" className={classes.boardTitle}>
        {title}
      </Typography>
    </Grid>
  );
};
export default BoardHeader;
