import React, { useState } from "react";

function Toggle() {

  const [isOn, setIsOn] = useState(false)

  const color = isOn ? "red" : "green";
  function setOn() {
    setIsOn((isOn) => !isOn)
  }

  return <button style={{ background: color }} onClick={setOn}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
