import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import React, { Fragment } from "react";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  FormControl: {
    width: 500,
  },
}));

export default function FormDialog({ muscleGroups, onExerciseCreate }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [exercise, setExercise] = React.useState({
    title: "",
    description: "",
    muscles: "",
  });

  let { title, description, muscles } = exercise;

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleChange = (name) => (e) => {
    setExercise({
      ...exercise,
      [name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // TODO: validate the form before submission
    onExerciseCreate({ title, description, muscles });
    handleToggle();
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
            className={classes.FormControl}
          />
          <br />
          <FormControl>
            <InputLabel id="demo-simple-select-label">Muscle</InputLabel>
            <Select
              labelId="muscle-select"
              id="muscle-select"
              value={muscles}
              onChange={handleChange("muscles")}
              className={classes.FormControl}
            >
              {muscleGroups.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            margin="normal"
            label="Description"
            multiline
            rows={2}
            onChange={handleChange("description")}
            value={description}
            className={classes.FormControl}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToggle} color="primary">
            Cancel
          </Button>
          <Button onClick={handleToggle} color="primary" onClick={handleSubmit}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
