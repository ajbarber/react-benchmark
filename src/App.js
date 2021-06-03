import React, { useState } from 'react'


function App() {
  const [state, setState] = useState({value:"", count: 100});

  const handleChange = e => setState(st => ({count: st.count, value: e.target.value}))
  return (
    <div>
      <label> Number of inputs </label>
      <input defaultValue={state.count}
        type="number"
        onChange={ e => setState(st => ({value: st.value, count: +e.target.value})) }/>
      <hr/>
      <div> State: { state.value } </div>
      <div> Count: { state.count } </div>
      { [...Array(state.count).keys()].map(k =><input key={k} onChange={handleChange} />) }
    </div>
  );
}

export default App;
