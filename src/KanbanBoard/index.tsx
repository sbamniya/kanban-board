import { createStyles, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import BoardBox from "../Components/BoardBox";
import DoneBoard from "../Components/Boards/DoneBoard";
import InProgressBoard from "../Components/Boards/InProgressBoard";
import ToDoBoard from "../Components/Boards/ToDoBoard";
import moment from "moment";
import { ITask } from "../Components/BoardItemBox";
import { HourlyRate } from "../constants/app.config";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      flexGrow: 1,
    },
  })
);

const KanbanBoard: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const [boardData, setBoardData] = useState<ITask[]>([]);
  const addTask = (task: ITask) => {
    const tempBoardData = Object.assign([], boardData);
    tempBoardData.push(task);
    setBoardData(tempBoardData);
  };
  const startTask = (taskId: string) => {
    const tempBoardData: ITask[] = Object.assign([], boardData);
    const index = tempBoardData.findIndex((board) => board.id === taskId);
    tempBoardData[index].status = "in-progress";
    tempBoardData[index].startTime = moment();
    setBoardData(tempBoardData);
  };
  const resolveTask = (taskId: string) => {
    const tempBoardData: ITask[] = Object.assign([], boardData);
    const index = tempBoardData.findIndex((board) => board.id === taskId);
    tempBoardData[index].status = "done";
    const time = moment().diff(tempBoardData[index].startTime, "seconds");
    tempBoardData[index].timeLoggedInSeconds = time;
    tempBoardData[index].amount = (time / (60 * 60)) * HourlyRate;
    setBoardData(tempBoardData);
  };
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
            <ToDoBoard
              onCreate={addTask}
              tasks={boardData.filter((data) => data.status === "todo")}
              onStart={startTask}
            />
          </BoardBox>
        </Grid>
        <Grid item sm={4}>
          <BoardBox title={"In Progress"}>
            <InProgressBoard
              tasks={boardData.filter((data) => data.status === "in-progress")}
              onResolve={resolveTask}
            />
          </BoardBox>
        </Grid>
        <Grid item sm={4}>
          <BoardBox title={"Done"}>
            <DoneBoard
              tasks={boardData.filter((data) => data.status === "done")}
            />
          </BoardBox>
        </Grid>
      </Grid>
    </>
  );
};

export default KanbanBoard;
