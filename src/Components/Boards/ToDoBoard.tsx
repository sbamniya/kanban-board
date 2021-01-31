import {
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AssignmentIcon from "@material-ui/icons/Assignment";
import React, { useState } from "react";
import BoardItemBox, { ITask } from "../BoardItemBox";
import moment from "moment";

interface IProp {
  onCreate: (task: ITask) => void;
  tasks: ITask[];
  onStart: (taskId: string) => void;
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
const ToDoBoard: React.FC<IProp> = ({
  onCreate,
  tasks,
  onStart,
}): JSX.Element => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [task, setTask] = useState("");
  const [hasError, setHasError] = useState(false);
  const classes = useStyles();
  const addTask = () => {
    if (!task) {
      setHasError(true);
      return;
    }
    // an api can be called here using Axios or fetch
    onCreate({
      id: `task-${Math.random().toString(36).substr(2, 9)}`,
      task,
      status: "todo",
    });
    toggleAddModal();
  };
  const toggleAddModal = () => {
    setIsAddModalOpen((prev) => !prev);
    setTask("");
  };
  return (
    <>
      {tasks.map((task: ITask) => (
        <BoardItemBox
          showButton
          buttonText="Start"
          key={task.id}
          onButtonClick={() => onStart(task.id)}
        >
          <Typography className={classes.title}>
            <AssignmentIcon fontSize="small" />
            &nbsp;{task.task}
          </Typography>
        </BoardItemBox>
      ))}
      <Button variant="contained" onClick={toggleAddModal}>
        <AddIcon /> Create Task
      </Button>
      <Dialog
        open={isAddModalOpen}
        onClose={toggleAddModal}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Add task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task details"
            type="text"
            fullWidth
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
              setHasError(false);
            }}
            error={hasError}
            helperText={hasError && "Please enter task details to add"}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleAddModal} color="primary">
            Cancel
          </Button>
          <Button onClick={addTask} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ToDoBoard;
