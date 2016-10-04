import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Glyphicon, AddModal} from 'react-bootstrap';

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

  recipeNameChange(e) {
    this.setState({recipeName: e.target.value});
  }

  recipeIngredientListChange(e) {
    this.setState({recipeIngredientList: e.target.value});
  }

  reder() {
    const recipes = this.state.recipes.map(recipe =>
      <Recipe
        title={recipe.title}
        key={recipe.title}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
      />
    );

    return (
      <div>
        <h1>
          My Recipes
          <Button bsStyle="success" onClick={this.showModal}>
            <Glyphicon glyph="plus" /> Add
          </Button>
        </h1>
        <div>
          {recipes}
        </div>
        <AddModal
          recipeName={this.state.recipeName}
          recipeNameChange={this.recipeNameChange}
          recipeIngredientList={this.recipeIngredientList}
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

ReactDOM.render(<Main />, document.getElementById('app'));
