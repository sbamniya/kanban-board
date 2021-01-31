import { createStyles, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import BoardBox from "../Components/BoardBox";
import DoneBoard from "../Components/Boards/DoneBoard";
import InProgressBoard from "../Components/Boards/InProgressBoard";
import ToDoBoard from "../Components/Boards/ToDoBoard";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      flexGrow: 1,
    },
  })
);

const KanbanBoard: React.FC = (): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        justify="center"
        spacing={6}
        className={classes.container}
      >
        <Grid item sm={4}>
          <BoardBox title={"To Do"}>
            <ToDoBoard />
          </BoardBox>
        </Grid>
        <Grid item sm={4}>
          <BoardBox title={"In Progress"}>
            <InProgressBoard />
          </BoardBox>
        </Grid>
        <Grid item sm={4}>
          <BoardBox title={"Done"}>
            <DoneBoard />
          </BoardBox>
        </Grid>
      </Grid>
    </>
  );
};

export default KanbanBoard;
