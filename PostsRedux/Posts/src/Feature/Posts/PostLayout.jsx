import { useSelector } from "react-redux";

const PostLayout = () => {
  const data = useSelector((state) => state.Posts);
  console.log(data);
  return (
    <div>
      <h2>Posts</h2>
      {data.map((item) => (
        <div key={item.name}>
          <h2>{item.id}</h2>
          <h2>{item.name}</h2>
          <h2>{item.age}</h2>
        </div>
      ))}
    </div>
  );
};

export default PostLayout;
