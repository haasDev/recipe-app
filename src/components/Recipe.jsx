import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

const Recipe = ({title, ingredients, instructions}) => {
  const ingredientList = ingredients.map(ingredient => <ListGroupItem><Ingredient name={ingredient} /></ListGroupItem>);
};
