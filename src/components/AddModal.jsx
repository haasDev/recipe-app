import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Modal from 'react-bootstrap/lib/Modal';
import ModalHeader from 'react-bootstrap/lib/ModalHeader';
import ModalBody from 'react-bootstrap/lib/ModalBody';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';
import ModalTitle from 'react-bootstrap/lib/ModalTitle';

export default ({showModal,
                  close,
                  recipeName,
                  recipeNameChange,
                  recipeIngredientList,
                  recipeIngredientListChange,
                  recipeInstructions,
                  recipeInstructionsChange,
                  addRecipe}) => (
  <Modal show={showModal} onHide={close}>
    <ModalHeader closeButton>
      <ModalTitle>Add Recipe</ModalTitle>
    </ModalHeader>
    <ModalBody>
      <form>
        <FormGroup
          controlId="addRecipeForm"
          validationState="success">
          <FormControl
            value={recipeName}
            type="text"
            placeholder="Name"
            onChange={recipeNameChange} />
          <FormControl
            value={recipeIngredientList}
            type="text"
            placeholder="Comma separated list of Ingredients"
            onChange={recipeIngredientListChange} />
        </FormGroup>
      </form>
    </ModalBody>
    <ModalFooter>
      <Button bsStyle="primary" onClick={addRecipe}>
        <Glyphicon glyph="floppy-disk" /> Save
      </Button>
    </ModalFooter>
  </Modal>
);
