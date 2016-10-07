import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Button';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Panel from 'react-bootstrap/lib/PanelGroup';

import Ingredient from './Ingredient.jsx';

const Recipe = ({title, ingredients, instructions}) => {
  const ingredientList = ingredients.map(ingredient => <ListGroupItem><Ingredient name={ingredient} /></ListGroupItem>);
  return (
    <Panel collapsible header={title}>
      <ListGroup fill>
        {ingredientList}
      </ListGroup>
      <div>
        <p>Instructions:</p>
        <p>{instructions}</p>
      </div>
      <div className="button-group">
        <Button bsStyle="danger"><Glyphicon glyph="remove" /> Remove</Button>
        <Button bsStyle="warning"><Glyphicon glyph="pencil" /> Edit</Button>
      </div>
    </Panel>
  );
};
