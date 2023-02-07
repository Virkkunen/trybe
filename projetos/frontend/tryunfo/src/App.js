import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
    filter: '',
    filteredCards: [],
  };

  validationAttr = () => {
    let { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    cardAttr1 = Number(cardAttr1);
    cardAttr2 = Number(cardAttr2);
    cardAttr3 = Number(cardAttr3);
    // recebe como string, passa pra number

    const max = 210;
    const maxAttr = 90;

    if (cardAttr1 + cardAttr2 + cardAttr3 > max) return false;

    if (cardAttr1 > maxAttr
        || cardAttr2 > maxAttr
        || cardAttr3 > maxAttr) return false;

    return !(cardAttr1 < 0
        || cardAttr2 < 0
        || cardAttr3 < 0);
  };

  validationText = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;

    return !(!cardName.length
        || !cardDescription.length
        || !cardImage.length
        || !cardRare.length);
  };

  // agora hora de validar o botão
  validateBtn = () => {
    // console.log(this.validationAttr());
    // console.log(this.validationText());
    if (this.validationAttr() && this.validationText()) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  // não esquecer o input change
  onInputchange = (e) => {
    // console.log(this.state);
    // console.log(e.target);
    const tgt = e.target;
    // check pra checkbox
    const inputValue = tgt.type === 'checkbox' ? tgt.checked : tgt.value;
    // aula de ontem
    this.setState({ [tgt.name]: inputValue }, () => this.validateBtn());
    return inputValue;
  };

  filterCards = (e) => {
    const { savedCards } = this.state;

    const filter = savedCards
      .filter((card) => card.cardName.split(' ').includes(e));

    // filteredCards.push(filter);
    this.setState({ filteredCards: filter });
  };

  checkTrunfo = () => {
    const { savedCards } = this.state;

    // me recomendaram o .some()
    this.setState({ hasTrunfo: savedCards.some((card) => card.cardTrunfo) });
  };

  deleteCard = (e) => {
    const { savedCards } = this.state;
    const cardToDelete = e.target.name;
    // filtrar por cartas que não são o parametro e salvar lista com resultado
    const otherCards = savedCards
      .filter((card) => card.cardName !== cardToDelete);
    this.setState({ savedCards: otherCards }, this.checkTrunfo());
  };

  clearState = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }, () => this.validateBtn());
  };

  onSaveBtn = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      savedCards,
      // hasTrunfo,
      // isSaveButtonDisabled,
      // onInputChange,
      // onSaveButtonClick,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    savedCards.push(card);
    this.checkTrunfo();
    this.clearState();
  };

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
      hasTrunfo,
      isSaveButtonDisabled,
      savedCards,
      filter,
      // onInputChange,
      // onSaveButtonClick,
    } = this.state;

    const renderFilter = () => {
      const { filteredCards } = this.state;
      if (filter) return filteredCards;
      return savedCards;
    };

    return (
      <div className="app">
        <h1>Tryunfo</h1>
        <div className="flex">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            onInputChange={ this.onInputchange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveBtn }
          />

          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            saved={ false }
          />

          <div className="filters">
            <label htmlFor="name-filter">
              <span>Filtro: </span>
              <input
                type="text"
                data-testid="name-filter"
                value={ filter }
                onChange={ (e) => this.filterCards(this.onInputchange(e)) }
                name="filterName"
              />
            </label>
          </div>

          <div className="saved-cards">
            {renderFilter().map((card) => (
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                key={ card.cardName }
                onDeleteBtnClick={ this.deleteCard }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
