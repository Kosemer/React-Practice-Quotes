import { Fragment } from "react";
import { Route, useParams } from "react-router";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Adam', text: 'Learning React is fun!'},
  {id: 'q2', author: 'Adi', text: 'Learning React is great!'}
]

const QuoteDetail = () => {
  const params = useParams();

const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

if(!quote){
  return <p>No quote found!</p>
}

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
      <Route path={`/quotes/${params.quoteId}/comments`}></Route>   {/*Ez egy dinamikus útvonal, ami így néz ki: /quotes/Ennek az oldalnak az Id-ja/comments(amit itt meg akarok jeleníteni.)
      Ezt egyébként nem dinamikusan is meg lehet adni: path='/quotes/:quoteId/comments' */}
      <Comments></Comments>
    </Fragment>
  );
};

export default QuoteDetail;
