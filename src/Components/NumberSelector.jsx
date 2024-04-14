import React from 'react'

const NumberSelector = () => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <div >
             { arrNumber.map((value, i) => (<div className="boxes"  key={i}>{value}</div>
                ))}
            </div>
        </>
    );
};

export default NumberSelector;