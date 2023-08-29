import React from "react";
import { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import { initialState } from "./reducers";
import reducer from "./reducers";
import { ADD_ONE, CLEAR_DİSPLAY, addOne, applyNumber } from "./actions";
import { APPLY_NUMBER } from "./actions";
import { CHANGE_OPERATION } from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleApplyNumber = (e) => {
    dispatch(APPLY_NUMBER.ParseInt(e.target));
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={2}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={3}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={5}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={6}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
              <CalcButton
                value={8}
                onClick={(e) => {
                  dispatch(applyNumber(parseInt(e.target.value)));
                }}
              />
              <CalcButton
                value={9}
                onClick={(e) => dispatch(applyNumber(e.target.value))}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => dispatch({ type: CHANGE_OPERATION })}
                value={"+"}
              />
              <CalcButton value={"*"} />
              <CalcButton value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={(e) => dispatch(CLEAR_DİSPLAY(e.target.value))}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
