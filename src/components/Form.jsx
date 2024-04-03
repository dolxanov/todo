import { useDispatch } from "react-redux";
import { setList } from "../store/slices/todoSlice";
import { useRef } from "react";

export default function Form() {
  const inp = useRef();
  const dispatch = useDispatch();

  const handleClick = () => {
    let value = inp.current.value;
    dispatch(setList(value))
  };

  return (
    <div>
      <input type="text" ref={inp} />
      <button onClick={handleClick}>send</button>
    </div>
  );
}
