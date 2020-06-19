import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [exercise, setExercise] = React.useState({
    title: "",
    description: "",
    muscle: "",
  });

  let { title, description, muscle } = exercise;

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleChange = (name) => (e) => {
    setExercise({
      ...exercise,
      [name]: e.target.value,
    });
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
          <DialogContentText>Content</DialogContentText>
          <TextField
            autoFocus
            margin="normal"
            label="Title"
            onChange={handleChange("title")}
            value={title}
          />
          <br />
          <TextField
            margin="normal"
            label="Description"
            multiline
            rows={2}
            onChange={handleChange("description")}
            value={description}
          />
          <br />
          <TextField
            margin="normal"
            label="Muscle"
            onChange={handleChange("muscle")}
            value={muscle}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToggle} color="primary">
            Cancel
          </Button>
          <Button onClick={handleToggle} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
