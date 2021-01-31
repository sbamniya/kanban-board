import { Box, Button, Grid } from "@material-ui/core";
import React from "react";

export interface ITask {
  id: string;
  task: string;
  status: "todo" | "in-progress" | "done";
  startTime?: moment.Moment;
  timeLoggedInSeconds?: number;
  amount?: number;
}
interface IProps {
  showButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonColor?: "primary" | "default" | "inherit" | "secondary";
}
const BoardItemBox: React.FC<IProps> = ({
  children,
  showButton,
  buttonText,
  onButtonClick,
  buttonColor,
}): JSX.Element => (
  <Box boxShadow={1} padding={1.5} margin={"15px 0"}>
    <Grid container>
      <Grid item sm={showButton ? 8 : 12}>
        {children}
      </Grid>
      {showButton ? (
        <Grid
          item
          sm={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color={buttonColor}
            onClick={onButtonClick}
            size={"small"}
          >
            {buttonText || "Click"}
          </Button>
        </Grid>
      ) : null}
    </Grid>
  </Box>
);
export default BoardItemBox;
