import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import Create from "../Exercise/Dialogs/Create";

export default ({ muscleGroups, handleExerciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h4" color="inherit" style={{ flex: 1 }}>
        Exercise Database
      </Typography>
      <Create
        muscleGroups={muscleGroups}
        onExerciseCreate={handleExerciseCreate}
      />
    </Toolbar>
  </AppBar>
);
