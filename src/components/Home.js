import React, { useEffect, useState } from "react";

function Home(props) {
  var [list, setList] = useState([]);

  useEffect(() => {
    const listv = [];
    Object.values(props.data).map((ele) => listv.push(ele.sentence));
    setList(listv);
  }, []);

  return (
    <div>
      <h1>HOME PAGE</h1>
      <ul>
        {list.map((ele) => (
          <li key={Math.random()}>{ele}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
