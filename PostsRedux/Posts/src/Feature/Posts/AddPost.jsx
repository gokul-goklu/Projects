import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddPost } from "./PostSlice";

const AddPosts = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [count, setCount] = useState(2);
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    let id = count;
    dispatch(AddPost({ id, name, age }));
    setCount(count + 1);
    setAge(0);
    setName("");
  };
  return (
    <div>
      <h2>AddPost</h2>
      <form>
        <label>Name: </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={handleAdd}>Addme</button>
      </form>
    </div>
  );
};

export default AddPosts;
