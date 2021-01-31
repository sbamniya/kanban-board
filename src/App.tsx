import { Container } from "@material-ui/core";
import React from "react";
import KanbanBoard from "./KanbanBoard";

const App: React.FC = (): JSX.Element => (
  <Container maxWidth="md">
    <KanbanBoard />
  </Container>
);
export default App;
