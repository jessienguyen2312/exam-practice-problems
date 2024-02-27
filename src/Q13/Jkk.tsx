import {useState} from "react";

const Jkk = () => {
    let qwe = { ert: 6 };
    const wer = (ewq: { ert: any; }) => console.log(ewq.ert);

    const lvp = () => {
        wer({ert: qwe.ert + 1 });

    }

    const poi = () => {
        wer({ert: qwe.ert - 3 });

    }

    // return (
    //     <div>
    //         <button onClick={
    //             () => wer({ ...qwe, ert: qwe.ert + 1 })}>
    //             Lvp
    //         </button>
    //         <button onClick={
    //             () => wer({ ...qwe, ert: qwe.ert - 3 })}>
    //             Poi
    //         </button>
    //     </div>
    // );

    return (
        <div>
            <button onClick={lvp}>
                Lvp
            </button>
            <button onClick={poi}>
                Poi
            </button>
        </div>
    );
};
export default Jkk;
