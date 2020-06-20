import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import React, { Fragment } from "react";

import Form from "./Form";

export default ({ muscleGroups, onExerciseCreate }) => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <IconButton aria-label="add" onClick={handleToggle}>
        <AddIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleToggle}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Please fill out the form below
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Describe the new exercise</DialogContentText>
          <Form
            muscleGroups={muscleGroups}
            onExerciseCreate={onExerciseCreate}
            callback={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
