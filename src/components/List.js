import { Link } from "react-router-dom";
export default function List({items}) {
  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/album/${item.id}`}>{item.id}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
