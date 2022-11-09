import { Fragment } from "react";
import { Route, useParams } from "react-router";
import Comments from '../components/comments/Comments'

const QuoteDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}></Route>   {/*Ez egy dinamikus útvonal, ami így néz ki: /quotes/Ennek az oldalnak az Id-ja/comments(amit itt meg akarok jeleníteni.)
      Ezt egyébként nem dinamikusan is meg lehet adni: path='/quotes/:quoteId/comments' */}
      <Comments></Comments>
    </Fragment>
  );
};

export default QuoteDetail;
