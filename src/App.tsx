import React, {useState} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './style.css'
import Bnm from "./Q6/Bnm";
import Hehe from "./Q8/Hehe";
import Asq from "./Q11/Asq";
import Jkk from "./Q13/Jkk";
import Xyz from "./Q15/Xyz";
import Aoo from "./Q19/Aoo";
import Delete from "./Q21/Delete";

function App() {
    const q = [1, 2, 3, 4, 5];
    const w = q.map(a => a === 3 ? 6 : a)
    const [q4, setq4] = useState("Alice");
    const y = [123, 234, 345, 456];
    const z = [234, ...y];
    const jkl = `
            Jkl.js
            import React from 'react';
            import { useParams } from "react-router-dom";
            function Jkl({ asd = [9, 2, 8, 3] }) {
                const { dsa } = useParams();
                const ewq = [dsa, ...asd];
                return (
                    <div>
                        <h2>{ewq}</h2>
                    </div>
                );
            }
            export default Jkl;`;

    const bnm = `
            import { Link, Route, Routes } from "react-router-dom";
            import Jkl from './Jkl'';
            function Bnm({ sdf = 4 }) {
                return (
                    <div>
                        <Link to={/q11/${'{sdf}'}}>BUTTON</Link>
                        <Routes>
                            <Route path="/q11/:dsa" element={<Jkl />} />
                        </Routes>
                    </div>
                );
            }
            export default Bnm;`;

    const a = {a: 123, b: 234};
    const b = {...a, c: 456, b: 345};
    const q7 = `
    const q = {a: 123, b: 234};
    const w = {...q, c: 456, b: 345};`

    const asd = `
    function Asd() {
        const {zxc, xcv} = useParams()
        const qwe = parseInt(zxc)
        const wer = parseInt(xcv)
        return(<h1>{wer - qwe}</h1>)
    }
    export default Asd`;

    const rew = `
    function Rew() {
        const {qwe, wer} = useParams()
        return(
            <Link to={/asd/${'${qwe}/${wer}'}>
                LINK B
            </Link>)
    }
    export default Rew`;

    const app = `
    function App() {
    return(
        <BrowserRouter>
            <Link to="/qwe/21/14/wer">LINK A</Link>
            <Routes>
                <Route path="/qwe/:qwe/:wer/wer"
                       element={<Rew/>}/>
                <Route path="/asd/:zxc/:xcv"
                       element={<Asd/>}/>
            </Routes>
        </BrowserRouter>
        )
    };
    export default App`;

    const c = ["ewq", "dsa", "qwe", "asd", "zxc"];
    const d = c.find((b, a) => b === "qwe")

    const q11 = `
    function Asq() {
    const ewq = [321, 432, 543, 654, 765];
    const tre = (ytr: number, uyt: number) => {
        const poi = ewq.map(
            (iuy) => (iuy === ytr ? uyt : iuy));
        console.log(poi);
    };
    return (
        <div>
            <button onClick={() => tre(543, 999)}>
                BUTTON
            </button>
        </div>
            );
    }
    export default Asq;`

    const e = [51, 42, 33, 24, 15]
    const f = e.findIndex(w => w === 33)

    const q13 = `
    const Jkk = () => {
    let qwe = { ert: 6 };
    const wer = (ewq: { ert: any; }) => console.log(ewq.ert);
    return (
        <div>
            <button onClick={
                () => wer({ ...qwe, ert: qwe.ert + 1 })}>
                Lvp
            </button>
            <button onClick={
                () => wer({ ...qwe, ert: qwe.ert - 3 })}>
                Poi
            </button>
            {qwe.ert}
        </div>
            );
        };
        export default Jkk;`

    const q15 = `
    function Xyz({ qwe = 10 }) {
    let rew = qwe;
    const ert = (ewq: number) => {
        rew = ewq;
    };
    const asd = () => {
        ert(rew + 5);
        console.log(rew);
    };
    return (
        <div>
            <button onClick={asd}>BUTTON</button>
        </div>
            );
        }
        export default Xyz;`

    const qwe = { ass: 123, fuck: 654 }
    // @ts-ignore
    const cxz = { fuck: 345, ...qwe, ass: 456, zxc: 567 }
    const { fuck, ass } = cxz
    console.log(ass)
    console.log(fuck)

    const qee = 234
    const uhh = 321
    const zxc = [321, qee, 432, uhh, 543]
    const [ewq, eww] = zxc
    console.log(ewq)
    console.log(eww)

    const qey = `
    const Qwe = ({asd, zxc}) => <h1>{asd * zxc}</h1>
    export default Qwe`

    const aoo = `
    import Qwe from "./Qwe"
    const App = () => <Qwe zxc="9" asd="1"/>`

    const h = [1, 2, 3, 4, 5]
    const i = h.filter(a => a > 2)

    const deletethisfat = `
    function Delete() {
    let qwe = [123, 234, 345, 456, 567];
    const wer = (tyu: number[]) => {
        qwe = tyu;
    };
    const ert = (rty: number) => {
        const tyu = qwe.filter((yui) => yui != rty);
        wer(tyu);
        console.log(qwe);
    };
    return (
        <div>
            <button onClick={() => ert(345)}>BUTTON</button>
        </div>
            );
        }
        export default Delete;`


    return (
    <div className="container">
        <h4>Q1</h4>
        <pre>
            const q = [1, 2, 3, 4, 5]; <br/>
            const w = <span className="answer">q</span>.<span className="answer">map</span>(a ={'>'} <span className="answer">a</span> === <span className="answer">3</span> ? <span className="answer">6</span> : <span className="answer">a</span>)
        </pre>
        w: {w.toString()}

        <h4>Q4</h4>
        <pre>
            &lt;<span className="answer">label</span> <span className="answer">for</span>="firstName"&gt;First Name&lt;/<span className="answer">label</span>&gt; <br/>
            &lt;input <br/>
            <span className="answer">value</span>="Alice" <br/>
            <span className="answer">placeholder</span>="Jane" <br/>
            <span className="answer">id</span>="firstName" <br/>
            <span className="answer">title</span>="Type your first name"/&gt; <br/>
        </pre>
        <label htmlFor="firstName"></label>
        <input value={q4} onChange={(e) => setq4(e.target.value)} placeholder="Jane" id="firstName" title="Type your first name"/>

        <h4>Q5</h4>
        <pre>
            const y = [123, 234, 345, 456]; <br/>
            const z = [<span className="answer">234</span> , <span className="answer">...y</span> ];
        </pre>
        z: {z.toString()};

        <h4>Q6</h4>
        <pre className="code-display">{jkl}</pre>
        <pre className="code-display">{bnm}</pre>
        <Bnm/>

        <h4>Q7</h4>
        <pre>{q7}</pre>
        w: {JSON.stringify(b)}

        <h4>Q8</h4>
        <pre className="code-display">{asd}</pre>
        <pre className="code-display">{rew}</pre>
        <pre className="code-display">{app}</pre>
        <Hehe/>

        <h4>Q9</h4>
        <pre>
            const <span className="answer">q</span> = ["ewq", "dsa", "qwe", "asd", "zxc"]; <br/>
            const w = q.<span className="answer">find</span>((b, a) ={'>'} <span className="answer">b</span> === <span className="answer">"qwe"</span>)
        </pre>
        w: {d}

        <h4>Q10</h4>
        <pre>
            &lt;<span className="answer">label</span>&gt;&lt;<span className="answer">input</span> type="<span className="answer">checkbox</span>" name="radio" id="ABC"/&gt;ABC&lt;<span className="answer">/label</span>&gt; <br/>
            &lt;<span className="answer">label</span>&gt;&lt;<span className="answer">input</span> type="<span className="answer">checkbox</span>" name="radio" id="DEF"/&gt;DEF&lt;<span className="answer">/label</span>&gt; <br/>
            &lt;<span className="answer">label</span>&gt;&lt;<span className="answer">input</span> type="<span className="answer">checkbox</span>" name="radio" id="GHI"/&gt;GHI&lt;<span className="answer">/label</span>&gt; <br/>
        </pre>

        <label><input type="checkbox" name="radio" id="ABC"/>ABC</label> <br/>
        <label><input type="checkbox" name="radio" id="DEF"/>DEF</label> <br/>
        <label><input type="checkbox" name="radio" id="GHI"/>GHI</label> <br/>

        <h4>Q11</h4>
        <pre className="code-display">{q11}</pre>
        <Asq/>

        <h4>Q12</h4>
        <pre>
            const <span className="answer">q</span> = [51, 42, 33, 24, 15]; <br/>
            const b = q.<span className="answer">findIndex</span>(<span className="answer">w</span> ={'>'} w === <span className="answer">33</span>)
        </pre>
        b: {f}

        <h4>Q13</h4>
        <pre className="code-display">{q13}</pre>
        <Jkk/>

        <h4>Q14</h4>
        <span className="answer"></span>
        <pre>
            &lt;<span className="answer">input</span> type="<span className="answer">radio</span>"  <span className="answer">name</span>="<span className="answer">color</span>"/&gt;Yellow &lt;br/&gt; <br/>
            &lt;<span className="answer">input</span> type="<span className="answer">radio</span>"  <span className="answer">name</span>="<span className="answer">color</span>"/&gt;Blue &lt;br/&gt; <br/>
            &lt;<span className="answer">input</span> type="<span className="answer">radio</span>"  <span className="answer">name</span>="<span className="answer">color</span>"/&gt;Red &lt;br/&gt; <br/>
            &lt;<span className="answer">input</span> type="<span className="answer">radio</span>"  <span className="answer">name</span>="<span className="answer">genre</span>"/&gt;Horror &lt;br/&gt; <br/>
            &lt;<span className="answer">input</span> type="<span className="answer">radio</span>"  <span className="answer">name</span>="<span className="answer">genre</span>"/&gt;Comedy &lt;br/&gt; <br/>
            &lt;<span className="answer">input</span> type="<span className="answer">radio</span>"  <span className="answer">name</span>="<span className="answer">genre</span>"/&gt;Drama &lt;br/&gt; <br/>
        </pre>
        <input type="radio"  name="color"/>Yellow <br/>
        <input type="radio"  name="color"/>Blue <br/>
        <input type="radio"  name="color"/>Red <br/>
        <input type="radio"  name="genre"/>Horror <br/>
        <input type="radio"  name="genre"/>Comedy <br/>
        <input type="radio"  name="genre"/>Drama <br/>

        <h4>Q15</h4>
        <pre className="code-display">{q15}</pre>
        <Xyz/>

        <h4>Q16</h4>
        <pre>
                const qwe = &#123; <span className="answer">asd</span>: 123, <span className="answer">sdf</span>: 654 &#125; <br/>
                const cxz = &#123; <span className="answer">sdf</span>: 345, ...qwe, <span className="answer">asd</span>: 456, zxc: 567 &#125; <br/>
                const &#123; sdf, asd &#125; = <span className="answer">cxz</span> <br/>
                console.log(asd) <br/>
                console.log(sdf) <br/>
        </pre>
        asd: {cxz.ass} <br/>
        sdf: {cxz.fuck}

        <h4>Q17</h4>
        <pre>
            &lt;h1 id="qwe" class="wer"&gt;I'm white on red&lt;/h1&gt;
        </pre>
        <h1 id="qwe" className="wer">I'm white on red</h1>

        <h4>Q18</h4>
        <span className="answer"></span>
        <pre>
            const qwe = <span className="answer">234</span> <br/>
            const asd = 321 <br/>
            const <span className="answer">zxc</span> = [321, qwe, 432, asd, 543] <br/>
            const [<span className="answer">ewq</span>, <span className="answer">rew</span>] = zxc <br/>
            console.log(ewq) <br/>
            console.log(rew) <br/>
        </pre>
        ewq: {ewq} <br/>
        rew: {eww}

        <h4>Q19</h4>
        <pre className="code-display">{qey}</pre>
        <pre className="code-display">{aoo}</pre>
        <Aoo/>

        <h4>Q20</h4>
        <pre>
            const q = [1, 2, 3, 4, 5] <br/>
            const w = <span className="answer">q</span>.<span className="answer">filter</span>(a ={'>'} <span className="answer">a</span> {'>'} <span className="answer">2</span>)
        </pre>
        w: {i}

        <h4>Q21</h4>
        <pre className="code-display">{deletethisfat}</pre>
        <Delete/>


    </div>
  );
}

export default App;
