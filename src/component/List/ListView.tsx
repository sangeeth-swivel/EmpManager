import React from "react";

function ListView(props: { items: any }) {
  const { items } = props;

  return (
    <ul className="list-group">
      {items.map((item: undefined, index: undefined) => (
        <li className="list-group-item" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListView;
