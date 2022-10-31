import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    // hora de deixar esse componente maior ainda
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const checkTrunfo = (check) => {
      if (!check) {
        return (
          <label htmlFor="trunfo-input">
            <span>Super Trunfo</span>
            <input
              type="checkbox"
              data-testid="trunfo-input"
              onChange={ onInputChange }
              checked={ cardTrunfo }
              name="cardTrunfo"
            />
          </label>
        );
      }
      return <p data-testid="trunfo-input">Você já tem um Super Trunfo em seu baralho</p>;
    };

    return (
      <form>
        <div className="label-box">
          <label htmlFor="name-input">
            <span>Nome: </span>
            <input
              type="text"
              data-testid="name-input"
              id="name=input"
              value={ cardName }
              onChange={ onInputChange }
              name="cardName"
            />
          </label>
        </div>

        <div className="label-box">
          <label htmlFor="description-input">
            <span>Descrição: </span>
            <input
              type="textarea"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              name="cardDescription"
            />
          </label>
        </div>

        <div className="attr-box">
          <label htmlFor="attr1-input">
            <span>Attr01 </span>
            <input
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="cardAttr1"
              min="0"
              max="90"
            />
          </label>
          <label htmlFor="attr2-input">
            <span>Attr02 </span>
            <input
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="cardAttr2"
              min="0"
              max="90"
            />
          </label>
          <label htmlFor="attr3-input">
            <span>Attr03 </span>
            <input
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="cardAttr3"
              min="0"
              max="90"
            />
          </label>
        </div>

        <div className="label-box">
          <label htmlFor="image-input">
            <span>Imagem: </span>
            <input
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              name="cardImage"
            />
          </label>
        </div>

        <div className="label-box">
          <label htmlFor="rare-input">
            <span>Raridade: </span>
            <select
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              name="cardRare"
            >
              {/* <option value="" selected hidden>Por favor selecione</option>  */}
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
        </div>

        {/* <div className="label-box">
          <label htmlFor="trunfo-input">
            <span>Super Tryunfo </span>
            <input
              type="checkbox"
              data-testid="trunfo-input"
              value={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        </div> */}

        { checkTrunfo(hasTrunfo) }

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onChange={ onInputChange }
          onClick={ onSaveButtonClick }
          name="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  cardAttr2: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  cardAttr3: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
