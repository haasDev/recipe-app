import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Panel from 'react-bootstrap/lib/Panel';

import Ingredient from './Ingredient.jsx';

import styles from '../styles/MainStyles';

export default ({title, ingredients, instructions, removeRecipe, editRecipe, recipe}) => {
  const ingredientList = ingredients.map(ingredient => <ListGroupItem key={ingredient}><Ingredient name={ingredient} /></ListGroupItem>);
  return (
    <Panel collapsible header={title} style={styles.recipe}>
      <ListGroup fill>
        {ingredientList}
        <ListGroupItem>
          <div>
            <p style={styles.instructions.p}>Instructions:</p>
            <p>{instructions}</p>
          </div>
        </ListGroupItem>
      </ListGroup>
      <div className="button-group">
        <Button bsStyle="danger" style={styles.Button} onClick={removeRecipe}>
          <Glyphicon glyph="remove" /> Remove
        </Button>
        <Button bsStyle="warning" style={styles.Button} onClick={editRecipe}><Glyphicon glyph="pencil" /> Edit</Button>
      </div>
    </Panel>
  );
};
