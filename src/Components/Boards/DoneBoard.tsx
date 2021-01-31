import { createStyles, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BoardItemBox, { ITask } from "../BoardItemBox";

interface IProp {
  tasks: ITask[];
}

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      wordBreak: "break-all",
      padding: "0 2px",
    },
  })
);
const DoneBoard: React.FC<IProp> = ({ tasks }): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      {tasks.map((task: ITask) => (
        <BoardItemBox key={task.id}>
          <Typography className={classes.title}>
            <AssignmentIcon fontSize="small" />
            &nbsp;{task.task}
          </Typography>
          <small>${task.amount?.toFixed(2)}</small>
        </BoardItemBox>
      ))}
    </>
  );
};

export default DoneBoard;
