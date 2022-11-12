import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import QuoteForm from "../components/quotes/QuoteForm"
import useHttp from '../hooks/use-http'
import { addQuote } from "../lib/api"

const NewQuote = () => {
const {sendRequest, status} = useHttp(addQuote)   
const history = useHistory()

useEffect(() => {
    if(status === 'completed'){
        history.push('/quotes')
    }
}, [status, history])

    const addQuoteHandler = quoteData =>{
        sendRequest(quoteData)

        history.push('/quotes') // A push kicseréli az erdeti oldalt és vissza is lehet térni a vissza gombbal.
        //history.replace('/quotes')  // A replace egy új oldalt ad hozzás és nem lehet így a vissza gombbal az eredeti oldalra visszamenni.
    }
    return ( <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}></QuoteForm> );
}
 
export default NewQuote;