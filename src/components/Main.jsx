import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import Recipe from './Recipe.jsx';
import AddModal from './AddModal.jsx';

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

    // pre-bind fn's
    this.toggleModal = this.toggleModal.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.recipeNameChange = this.recipeNameChange.bind(this);
    this.recipeIngredientListChange = this.recipeIngredientListChange.bind(this);
    this.recipeInstructionsChange = this.recipeInstructionsChange.bind(this);
  }

  // class methods
  addRecipe() {
    const newRecipe = {
      title: this.state.recipeName,
      ingredients: this.state.recipeIngredientList.split(','),
      instructions: this.state.recipeInstructions
    };

    const newRecipeList = [...this.state.recipes, newRecipe];

    this.setState({recipes: newRecipeList, recipeName: '', recipeIngredientList: '', recipeInstructions: ''});

    this.toggleModal();
  }

  editRecipe(recipe) {
    this.removeRecipe(recipe);
    const ingredients = (recipe.ingredients.length > 1) ? recipe.ingredients.join(',') : recipe.ingredients[0];
    this.setState({
      recipeName: recipe.title,
      recipeIngredientList: ingredients,
      recipeInstructions: recipe.instructions
    });
    console.log(this.state.recipeIngredientList);
    this.toggleModal();
  }

  toggleModal() {
    this.setState({showModal: !this.state.showModal});
  }

  recipeNameChange(e) {
    this.setState({recipeName: e.target.value});
  }

  recipeIngredientListChange(e) {
    this.setState({recipeIngredientList: e.target.value});
  }

  recipeInstructionsChange(e) {
    this.setState({recipeInstructions: e.target.value});
  }

  removeRecipe(recipe) {
    const newRecipeList = this.state.recipes.filter(item => recipe !== item);
    this.setState({recipes: newRecipeList});
  }

  render() {
    const recipes = this.state.recipes.map(recipe =>
      <Recipe
        key={recipe.title}
        {...recipe}
        recipe={recipe}
        editRecipe={this.editRecipe.bind(this, recipe)}
        removeRecipe={this.removeRecipe.bind(this, recipe)} />
    );

    return (
      <div>
        <h1 style={styles.h1}>
          My Recipes
          <Button bsStyle="success" onClick={this.toggleModal} style={styles.Button}>
             <Glyphicon glyph="plus" /> Add
          </Button>
        </h1>
        <div>
          {recipes}
        </div>
        <AddModal
          recipeName={this.state.recipeName}
          recipeNameChange={this.recipeNameChange}
          recipeIngredientList={this.state.recipeIngredientList}
          recipeIngredientListChange={this.recipeIngredientListChange}
          recipeInstructions={this.state.recipeInstructions}
          recipeInstructionsChange={this.recipeInstructionsChange}
          close={this.toggleModal}
          showModal={this.state.showModal}
          addRecipe={this.addRecipe}
          />
      </div>
    );
  }
}

const styles = {
  Button: {
    float: 'right',
    marginRight: '20px'
  },
  h1: {
    textAlign: 'center'
  }
};

ReactDOM.render(<RecipeBox />, document.getElementById('app'));
