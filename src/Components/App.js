import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercise from "./Exercise";
import { muscleGroups, exercises } from "./../store.js";

export default class extends Component {
  state = {
    exercise: {},
    exercises,
    editMode: false,
  };

  getExercisesByMuscle() {
    const initialExercises = muscleGroups.reduce(
      (exercises, muscle) => ({
        ...exercises,
        [muscle]: [],
      }),
      {}
    );

    return Object.entries(
      this.state.exercises.reduce((ret, exercise) => {
        const { muscles } = exercise;

        ret[muscles] = [...ret[muscles], exercise];

        return ret;
      }, initialExercises)
    );
  }

  handleCategorySelected = (category) => {
    this.setState({ category });
  };

  handleExerciseSelected = (id) => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find((ex) => ex.id === id),
      editMode: false,
    }));
  };

  handleExerciseCreate = (exercise) => {
    exercise["id"] = exercise.title.trim().toLowerCase().replace(/ /g, "-");
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise],
      exercise: exercise,
    }));
  };

  handleExerciseDelete = (id) => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter((ex) => ex.id !== id),
    }));
  };

  handleExerciseSelectEdit = (id) => {
    this.setState({
      editMode: true,
      exercise: exercises.find((ex) => ex.id === id),
    });
  };

  handleExerciseEdit = (exercise) => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter((ex) => ex.id !== exercise.id), exercise],
      exercise: exercise,
      editMode: false,
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscle();
    const { category, exercise, editMode } = this.state;

    return (
      <Fragment>
        <Header
          muscleGroups={muscleGroups}
          handleExerciseCreate={this.handleExerciseCreate}
        />

        <Exercise
          category={category}
          muscleGroups={muscleGroups}
          exercise={exercise}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
          onDelete={this.handleExerciseDelete}
          onCreate={this.handleExerciseCreate}
          onSelectEdit={this.handleExerciseSelectEdit}
          onEdit={this.handleExerciseEdit}
          editMode={editMode}
          key={exercise.id}
        />

        <Footer
          category={category}
          muscleGroups={muscleGroups}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}
