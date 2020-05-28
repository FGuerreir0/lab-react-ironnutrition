import React, { Component } from 'react';
import MealBox from './components/MealBox';
import Search from './components/Search';

import './App.scss';
import meals from './meals';

console.log(meals);

class App extends Component {
  constructor() {
    super();

    this.state = {
      mealArray: [...meals],
      addMealState: false,
      itemName: '',
      itemCalorie: '',
      itemPicture: '',
      itemSearch: ''
    };
    this.newRecipe = this.newRecipe.bind(this);
  }

  handleSubmitMeal = (event) => {
    event.preventDefault();
    let mealsCopy = [...this.state.mealArray];
    mealsCopy.push({
      name: this.state.itemName,
      calories: this.state.itemCalorie,
      image: this.state.itemPicture
    });

    this.setState({
      mealArray: mealsCopy,
      addMealState: false
    });
  };

  handleInputChange = (event) => {
    const $domNode = event.target;
    const value = $domNode.value;
    const name = $domNode.name;

    this.setState({
      [name]: value
    });
  };

  newRecipe = (event) => {
    event.preventDefault();

    this.setState({
      addMealState: !this.state.addMealState
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>IronNutrition</h1>
        <div>
          <div>
            <button onClick={this.newRecipe} className='mr-5'>
              Add new meal
            </button>
          </div>
          <div>
            <Search />
          </div>
        </div>
        <div>
          {this.state.addMealState ? (
            <form
              style={{ border: 'solid' }}
              className='mt-5 mb-5 pt-3 pb-3 pl-3 pr-3'
              onSubmit={this.handleSubmitMeal}
            >
              <p>Add a new Meal:</p>
              <div>
                <label>Name:</label>
                <input
                  required
                  name='itemName'
                  value={this.state.item}
                  onChange={this.handleInputChange}
                  type='text'
                  placehoder='Meal name here...'
                />
              </div>
              <div>
                <label>Calories:</label>
                <input
                  required
                  name='itemCalorie'
                  value={this.state.item}
                  onChange={this.handleInputChange}
                  type='text'
                  placehoder='Meal calories here...'
                />
              </div>
              <div>
                <label>Picture Url:</label>
                <input
                  required
                  name='itemPicture'
                  value={this.state.item}
                  onChange={this.handleInputChange}
                  type='text'
                  placehoder='Url here...'
                />
              </div>
              <button>Submit</button>
            </form>
          ) : (
            console.log(`Don't want to add new recipe`)
          )}
        </div>
        <div>
          {this.state.mealArray.map((meal) => {
            return (
              <MealBox
                key={meal.name}
                name={meal.name}
                image={meal.image}
                calories={meal.calories}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
