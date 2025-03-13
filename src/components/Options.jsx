

export default function Options ({total, updateGood, reset}) {

    return(
<div>
    
<button onClick={() => updateGood("good")}>Good</button>
    <button onClick={() => updateGood("neutral")}>Neutral</button>
    <button onClick={() => updateGood("bad")}>Bad</button>
    {total > 0  && <button onClick={reset}>Reset</button>}
</div>
    )
}

//    