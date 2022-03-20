import { useEffect } from "react";

function Filter({ data, onClick }) {
  return (
    <div className="filter-container">
      <button onClick={() => onClick(data.id)}>{data.name}</button>
    </div>
  );
}
export default Filter;
