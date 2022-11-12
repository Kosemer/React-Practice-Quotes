import { Fragment } from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Adam", text: "Learning React is fun!" },
  { id: "q2", author: "Adi", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  console.log(match)
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      <Route path={`${match.path}`} exact>
        {" "}
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>{" "}
      {/*Ez egy dinamikus útvonal, ami így néz ki: /quotes/Ennek az oldalnak az Id-ja/comments(amit itt meg akarok jeleníteni.)
      Ezt egyébként nem dinamikusan is meg lehet adni: path='/quotes/:quoteId/comments' */}
    </Fragment>
  );
};

export default QuoteDetail;
