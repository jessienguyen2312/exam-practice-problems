import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Jkl from "./Jkl";
function Bnm({ sdf = 4 }) {
    return (
        <div>
            <BrowserRouter>
                <Link to={`/jkl/${sdf}`}>BUTTON</Link>
                <Routes>
                    <Route path="/jkl/:dsa" element={<Jkl />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}
export default Bnm;