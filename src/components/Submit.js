import { ref, set } from "firebase/database";
import db from "../firebase";
import React, { useState } from "react";

function Submit(props) {
  const [data, setData] = useState("");

  return (
    <div>
      <h1>SUBMIT PAGE</h1>
      <form>
        <label>
          Data:
          <input
            type="text"
            name="name"
            value={data}
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
        </label>
        <input
          type="submit"
          value="Submit"
          onClick={() => {
            const refer = ref(db, "story/" + props.userId);

            set(refer, {
              sentence: data,
            })
              .then(() => {
                console.log("Data saved successfully at" + props.userId);
              })
              .catch((error) => {
                console.debug("Error" + error);
              });
          }}
        />
      </form>
    </div>
  );
}

export default Submit;
