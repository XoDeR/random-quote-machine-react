import React, { Component } from 'react';

class QuoteBox extends Component {

    render() { 
        return (
            <div className="quote-box-wrapper">
            <div id="quote-box">
              <div className="quote-text">
                <i className="fa fa-quote-left"></i>
                <q id="text">
                  Quote 
                </q>
              </div>
              <div className="quote-author">
                <span id="author">Author</span>
              </div>
              <div className="buttons">
                <a 
                  href={
                    'https://twitter.com/intent/tweet?hashtags=quotes,freecodecamp&related=freecodecamp&text="' + 
                    "Quote" + '" %0D%0A- ' + "Author" + "%0D%0A"
                  }
                  className="button"
                  id="tweet-quote"
                  target="_blank"
                >
                  TWEET
                </a>
                <button
                  className="button"
                  id="new-quote"
                >
                  NEW QUOTE
                </button>
              </div>
            </div>
          </div>  
        );
    }

}

export default QuoteBox;