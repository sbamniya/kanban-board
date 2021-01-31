import {
  Box,
  createStyles,
  makeStyles,
  Paper,
  useTheme,
} from "@material-ui/core";
import React from "react";
import BoardHeader from "./BoardHeader";
interface IProps {
  title: string;
}
const useStyles = makeStyles((theme) =>
  createStyles({
    boardBox: {
      minHeight: 350,
      width: "100%",
      textAlign: "center",
      overflowY: "auto",
    },
  })
);
const BoardBox: React.FC<IProps> = ({ children, title }): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Paper className={classes.boardBox}>
      <BoardHeader title={title} />
      <Box padding={theme.spacing(0.2)}>{children}</Box>
    </Paper>
  );
};

export default BoardBox;
