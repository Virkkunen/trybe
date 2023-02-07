import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onDeleteBtnClick,
    } = this.props;

    const checkTrunfo = (check) => {
      if (check) return <p data-testid="trunfo-card" className="trunfo">Super Trunfo</p>;
    };

    return (
      <div className="card-bg">
        <div className="card">
          <div className="card-header">
            <span data-testid="name-card" className="card-header-text">{ cardName }</span>
          </div>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            className="card-img"
          />
          <p data-testid="description-card" className="card-desc">{ cardDescription }</p>
          <div className="card-attr-bg">
            <div className="card-attr">
              <span className="attr-name">Attr01</span>
              <span data-testid="attr1-card" className="attr">{ cardAttr1 }</span>
            </div>
            <div className="card-attr">
              <span className="attr-name">Attr02</span>
              <span data-testid="attr2-card" className="attr">{ cardAttr2 }</span>
            </div>
            <div className="card-attr">
              <span className="attr-name">Attr03</span>
              <span data-testid="attr3-card" className="attr">{ cardAttr3 }</span>
            </div>
          </div>
          <span data-testid="rare-card" className="card-rarity">{ cardRare }</span>
          { checkTrunfo(cardTrunfo) }
        </div>
        { onDeleteBtnClick && (
          <button
            type="button"
            data-testid="delete-button"
            onClick={ onDeleteBtnClick }
            name={ cardName }
          >
            Excluir
          </button>
        )}
      </div>
    );
  }
}

Card.defaultProps = {
  onDeleteBtnClick: '',
};

Card.propTypes = {
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
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onDeleteBtnClick: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

export default Card;
