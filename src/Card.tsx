import React from 'react';
import './Card.scss';
import quotes from './quotes.json';

class Card extends React.Component<{}, {quote: string, author: string}> {

  constructor(props: any) {
    super(props);

    this.state = {
      quote: 'Quote',
      author: 'Author'
    }


    this.updateQuote = this.updateQuote.bind(this);
  }

  componentDidMount() {
    this.updateQuote();
  }

  async updateQuote() {

    const index = Math.floor(Math.random() * (quotes.length));

    this.setState({
      quote: quotes[index].q,
      author: quotes[index].a
    });
    
  }

  render() {

    return (
      <div id="quote-box">
        <h1 id='text'>"{this.state.quote}"</h1>
        <h2 id='author'>-{this.state.author}</h2> 
        <div id='buttons'>
          <button onClick={this.updateQuote} id='new-quote'>New Quote</button>
          <a id='tweet-quote' target='_blank' href='twitter.com/intent/tweet'>Tweet Quote</a>
        </div>
        <p id="credit">Credit to Zen Quotes for providing the quotes</p>
      </div>
    );

  }
}

export default Card;
