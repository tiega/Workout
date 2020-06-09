import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercise from "./Exercise";
import { muscles, exercises } from "./../store.js";

export default class extends Component {
  state = {
    exercise: {},
    exercises,
  };

  getExercisesByMuscle() {
    return Object.entries(
      this.state.exercises.reduce((ret, exercise) => {
        const { muscles } = exercise;

        ret[muscles] = ret[muscles] ? [...ret[muscles], exercise] : [exercise];

        return ret;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({category})
  }

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscle()
    const { category, exercise } = this.state

    return (
      <Fragment>
        <Header />

        <Exercise 
          category={category}
          exercise={exercise}
          exercises={exercises} 
          onSelect={this.handleExerciseSelected}
        />

        <Footer 
          category={category}
          muscles={muscles} 
          onSelect={this.handleCategorySelected} 
        />
      </Fragment>
    );
  }
}
