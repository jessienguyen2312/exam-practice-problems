import React, { useState } from "react";
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
export default Delete;