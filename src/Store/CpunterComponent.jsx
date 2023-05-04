import React from "react";
import { useSelector,useDispatch} from "react-redux";
import { incrementByOne,incrementByValue,decreamentByOne,decreamentByValue } from "./Counteer";

function CounteerComponent(){
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()

    return(
        <div>
            <p>count: {count}</p>
            <button onClick={() => dispatch(incrementByOne())}>increase by one</button>
            <button onClick={() => dispatch(decreamentByOne())}>decrease by one</button>
            <input type="number" id="fInput"/>
            <button  onClick={() => dispatch(incrementByValue(Number(document.getElementById("fInput").value)))} name="butt">increase</button>
            <button  onClick={() => dispatch(decreamentByOne(Number(document.getElementById("fInput").value)))} name="but">reduce</button>
        
        </div>
    )
}
export default CounteerComponent