import { useHistory } from "react-router-dom"
import QuoteForm from "../components/quotes/QuoteForm"

const NewQuote = () => {
const history = useHistory()

    const addQuoteHandler = quoteData =>{
        console.log(quoteData)

        history.push('/quotes') // A push kicseréli az erdeti oldalt és vissza is lehet térni a vissza gombbal.
        history.replace('/quotes')  // A replace egy új oldalt ad hozzás és nem lehet így a vissza gombbal az eredeti oldalra visszamenni.
    }
    return ( <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm> );
}
 
export default NewQuote;