import React from "react";
import "./styles.css";

export default function App() {
  const forceUpdate = React.useState({})[1];
  const [defaultValues] = React.useState({
    data: {
      chicken: {
        name: "Ronald",
        canFly: true
      },
      panda: {
        name: "Po",
        canFly: false
      },
      snake: {
        name: "Jade",
        canFly: false
      }
    }
  });

  return (
    <div className="App">
      <FormComponent defaultValues={defaultValues} />
      <button onClick={() => console.log(defaultValues.data.chicken)}>
        Get me the chicken
      </button>
      <button onClick={forceUpdate}>Get me the chicken</button>

      <div>{JSON.stringify(defaultValues)}</div>
    </div>
  );
}

const FormComponent = (props) => {
  const [derivedState, setDerivedState] = React.useState(props.defaultValues);

  return (
    <form>
      <div>
        <label>Chicken Input</label>
        <input
          type="text"
          defaultValue={derivedState.data.chicken.name}
          onChange={(e) => {
            e.persist();
            console.log(e.target.value);
            setDerivedState((prevState) => ({
              ...prevState,
              data: {
                ...prevState.data,
                chicken: {
                  ...prevState.data.chicken,
                  name: e.target.value
                }
              }
            }));
          }}
        />
      </div>
    </form>
  );
};
