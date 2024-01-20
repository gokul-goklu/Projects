import { useEffect, useState } from "react";
import "./Style.css";

const TaskProduct = () => {
  const [data, setData] = useState([]);
  const [unique, setUnique] = useState([]);
  const [text, setText] = useState("");
  const [categories, setCategories] = useState("");
  let category = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tempData = await fetch("https://dummyjson.com/products");
        const currData = await tempData.json();
        const temp = currData.products;

        setData(temp);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    data.map((item) => category.push(item.category));
    const nSet = new Set(category);
    const nArr = Array.from(nSet);
    setUnique(nArr);
  }, [data]);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const filterResult = data.filter(
    (data) =>
      data.title.toLowerCase().includes(text.toLowerCase()) &&
      (categories == "" || categories == data.category)
  );
  console.log(filterResult);

  const handleOption = (e) => {
    setCategories(e.target.value);
  };
  return (
    <div>
      <div className="outer-nav">
        <div className="label-container">
          <label className="label">Search</label>
          <input
            className="search"
            type="text"
            onChange={handleText}
            placeholder="search here"
          />
        </div>
        <div className="label-container">
          <label className="label">Categories</label>
          <select className="search" onChange={handleOption}>
            <option></option>
            {unique.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="outer-card">
        {filterResult.map((item) => (
          <div key={item.id} className="container">
            <img src={item.thumbnail} style={{ width: 60, height: 60 }} />
            <h6>Title: {item.title}</h6>
            <h6>category: {item.category}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskProduct;
