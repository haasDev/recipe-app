import React from 'react';
import ReactDOM from 'react-dom';

class RecipeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      recipeName: '',
      recipeIngredientList: '',
      recipeInstructions: '',
      recipes: []
    }
  }

  // pre-bind fn's
  this.toggleModal = this.toggleModal.bind(this);
  this.addRecipe = this.addRecipe.bind(this);
  this.recipeNameChange = this.recipeNameChange.bind(this);
  this.recipeIngredientListChange = this.recipeIngredientListChange.bind(this);
  this.recipeInstructionsChange = this.recipeInstructionsChange.bind(this);

  // class methods
  addRecipe() {
    const newRecipe = [
      {
        title: this.state.recipeName,
        ingredients: this.state.recipeIngredientList.split(','),
        instructions: this.state.recipeInstructions
      }
    ];

    const newRecipeList = this.state.recipes.concat(newRecipe);

    this.setState({recipes: newRecipeList, recipeName: '', recipeIngredientList: '', recipeInstructions: ''});

    console.log({newRecipeList});

    this.toggleModal();
  }

  toggleModal() {
    this.setState({showModal: !this.state.showModal});
  }

}

ReactDOM.render(<Main />, document.getElementById('app'));
