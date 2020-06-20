import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  FormControl: {
    width: 500,
  },
}));

export default ({ exercise, muscleGroups, onExerciseCreate, callback }) => {
  const classes = useStyles();
  const [_exercise, setExercise] = React.useState(
    exercise || {
      title: "",
      description: "",
      muscles: "",
    }
  );
  let { title, description, muscles } = _exercise;

  const handleChange = (name) => (e) => {
    setExercise({
      ..._exercise,
      [name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // TODO: validate the form before submission
    console.log(_exercise);
    onExerciseCreate(_exercise);
    callback && callback();
  };

  return (
    <Fragment>
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
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
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
      <br />
      <Button color="primary" onClick={() => handleSubmit()}>
        {exercise ? "Update" : "Create"}
      </Button>
    </Fragment>
  );
};
