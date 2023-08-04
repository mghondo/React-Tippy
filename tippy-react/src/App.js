import logo from "./logo.svg";
import "./App.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import React, { forwardRef, useState } from "react";

function ThisWontWork() {
  return <button>Reference</button>;
}

const ThisWillWork = forwardRef((props, ref) => {
  return <button ref={ref}>Reference</button>;
});

function App() {
  const [disabled, setDisabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <div className="App">
      <Tippy content="What it is right now!!!">
        <button>My button</button>
      </Tippy>

      <Tippy content="Tooltip">
        <ThisWillWork />
      </Tippy>

      <Tippy
        content="Tooltip"
        interactive={true}
        interactiveBorder={20}
        delay={100}
      >
        <button>Reference</button>
      </Tippy>

      <Tippy content="Tooltip" disabled={disabled}>
        <button>Reference</button>
      </Tippy>

      <Tippy content="Tooltip" visible={visible} onClickOutside={hide}>
        <button onClick={visible ? hide : show}>Reference</button>
      </Tippy>
    </div>
  );
}

export default App;
