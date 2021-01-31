import { createStyles, makeStyles, Typography } from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import React, { useEffect, useState } from "react";
import BoardItemBox, { ITask } from "../BoardItemBox";
import moment from "moment";
import { convertSecondsToHHMMSS } from "../../helpers";

interface IProp {
  tasks: ITask[];
  onResolve: (taskId: string) => void;
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
const InProgressBoard: React.FC<IProp> = ({
  tasks,
  onResolve,
}): JSX.Element => {
  const classes = useStyles();
  const [_, setReloadState] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setReloadState((prev) => !prev);
    }, 1000);
  }, []);
  return (
    <>
      {tasks.map((task: ITask) => (
        <BoardItemBox
          showButton
          buttonText="Resolve"
          key={task.id}
          onButtonClick={() => onResolve(task.id)}
          buttonColor="primary"
        >
          <Typography className={classes.title}>
            <AssignmentIcon fontSize="small" />
            &nbsp;{task.task}
          </Typography>
          <small>
            {convertSecondsToHHMMSS(moment().diff(task.startTime, "second"))}
          </small>
        </BoardItemBox>
      ))}
    </>
  );
};

export default InProgressBoard;
