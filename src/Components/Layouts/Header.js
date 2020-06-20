import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import Dialog from "../Exercise/Dialog";

export default ({ muscleGroups, handleExerciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h4" color="inherit" style={{ flex: 1 }}>
        Exercise Database
      </Typography>
      <Dialog
        muscleGroups={muscleGroups}
        onExerciseCreate={handleExerciseCreate}
      />
    </Toolbar>
  </AppBar>
);
