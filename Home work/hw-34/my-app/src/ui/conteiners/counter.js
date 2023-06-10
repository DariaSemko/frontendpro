import { useDispatch, useSelector } from 'react-redux';
import Button from "../components/button"
import { increment, decrement, value } from "../../engine/core/counter/counterSlice";

function Counter() {
    const dispatch = useDispatch();
    const countValue = useSelector(value);
    const onIncrement = () => {
        dispatch(increment())
    }
    const onDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <p>Value: {countValue}</p>
            <Button onClick={onIncrement} text="Increment"/>
            <Button onClick={onDecrement} text="Decrement"/>
        </div>
    );
}
export default Counter;
