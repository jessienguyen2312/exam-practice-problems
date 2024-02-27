import {BrowserRouter, Link, Routes, Route} from "react-router-dom"
import {useParams} from "react-router-dom";
function Rew() {
    const {qwe, wer} = useParams()
    return(
        <Link to={`/asd/${qwe}/${wer}`}>
            LINK B
        </Link>)
}
export default Rew