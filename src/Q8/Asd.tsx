import {useParams} from "react-router-dom";

function Asd() {
    const {zxc, xcv} = useParams()
    const qwe = parseInt(zxc || '0')
    const wer = parseInt(xcv || '0')
    return(
        <div>
            zxc: {zxc} <br/>
            xcv: {xcv} <br/>
            qwe: {qwe} <br/>
            wer: {wer} <br/>
            <h1>{qwe - wer}</h1>
        </div>

    )
}
export default Asd
