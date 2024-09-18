import React from "react";
import "./App.css";
import { SuperButton } from "./components/SuperButton/SuperButton";
import s from "./components/SuperButton/SuperButton.module.css";
import { SuperCroses } from "./components/SuperButton/SuperCroses";
import { Modal } from "./components/modal/Modal";

export type CrosesType = {
  id: number;
  model: string;
  size: string;
};

function App() {
  const croses: CrosesType[] = [
    { id: 1, model: "ADIDAS", size: "XXX" },
    { id: 2, model: "ABIBAS", size: "YYY" },
    { id: 3, model: "PUMA", size: "ZZZ" },
  ];
  return (
    <div className={s.divApp}>
      {/*<SuperButton title={"Button"} onClick={() => {}} color={"red"} />*/}
      {/*<SuperButton onClick={() => {}} color={"red"} backGround={"red"} className={s.redButton}>*/}
      {/*  RED BUTTON*/}
      {/*</SuperButton>*/}
      {/*<SuperButton onClick={() => {}} color={"red"} backGround={"blue"} className={s.blueButton}>*/}
      {/*  BLUE BUTTON*/}
      {/*</SuperButton>*/}
      {/**/}
      {/*<SuperButton color={"red"}>RED BUTTON</SuperButton>*/}
      {/*<SuperButton color={"secondary"}>SECONDARY BUTTON</SuperButton>*/}
      {/*<SuperButton>DEFAULT BUTTON</SuperButton>*/}
      {/*<SuperButton disabled>DISABLED BUTTON</SuperButton>*/}
      {/**/}
      {/*<SuperCroses croses={croses}>*/}
      {/*  <SuperButton color={"red"}>RED BUTTON</SuperButton>*/}
      {/*  <SuperButton color={"secondary"}>SECONDARY BUTTON</SuperButton>*/}
      {/*  <p>*/}
      {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi autem consequuntur ducimus eum eveniet ex*/}
      {/*    fuga hic id incidunt iure maiores minus omnis provident, qui rem saepe veniam voluptatum.*/}
      {/*  </p>*/}
      {/*</SuperCroses>*/}
      {/*<SuperCroses croses={croses}>*/}
      {/*  <SuperButton color={"red"}>RED BUTTON</SuperButton>*/}
      {/*  <SuperButton color={"secondary"}>SECONDARY BUTTON</SuperButton>*/}
      {/*  <SuperButton>DEFAULT BUTTON</SuperButton>*/}
      {/*</SuperCroses>*/}
      {/*<SuperCroses croses={croses}>*/}
      {/*  <SuperButton>DEFAULT BUTTON</SuperButton>*/}
      {/*  <p>*/}
      {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi autem consequuntur ducimus eum eveniet ex*/}
      {/*    fuga hic id incidunt iure maiores minus omnis provident, qui rem saepe veniam voluptatum.*/}
      {/*  </p>*/}
      {/*</SuperCroses>*/}
      <Modal>
        <h3>Confident information</h3>
        <input type={"text"} placeholder={"email"} />
        <input type={"text"} placeholder={"pass"} />
        <input type={"text"} placeholder={"pass"} />
        <label>
          <input type={"checkbox"} />I agree
        </label>
        <SuperButton>SEND</SuperButton>
      </Modal>
      {/*<Modal>*/}
      {/*  <h3>Confident information</h3>*/}
      {/*  <input type={"text"} placeholder={"email"} />*/}
      {/*  <input type={"text"} placeholder={"pass"} />*/}
      {/*</Modal>*/}
    </div>
  );
}

export default App;
