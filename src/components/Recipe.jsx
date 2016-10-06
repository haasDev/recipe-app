const Recipe = ({title, ingredients, instructions}) => {
  const ingredientList = ingredients.map(ingredient => <ListGroupItem><Ingredient name={ingredient} /></ListGroupItem>);
};
