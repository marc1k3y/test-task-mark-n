import css from "./style.module.css";
import plus from "../assets/plus.svg";
import arrow from "../assets/arrow.svg";

import { useState } from "react";
import { SkillIE, SkillOptionIE } from "../types";


export const Skill = ({ state, setState, maxValue }:
  { state: SkillIE, setState: (arg0: any) => void, maxValue: number }) => {
  const { label, options } = state;
  const [visible, setVisible] = useState<boolean>(false);

  function incrementValue(i: number) {
    const copyOptions = options;
    const option = options[i];
    const condition = option["value"] < maxValue && option["value"] < 5;
    if (condition) {
      option["value"] = option["value"] + 1;
      copyOptions[i] = option;
      setState((prev: SkillIE) => ({ ...prev, options: copyOptions }));
    }
  }
  return (
    <div className={css.skill}>
      <div className={css.skillLabel}>
        <div>
          {label}
        </div>
        <button onClick={() => setVisible(!visible)} className={css.skillVisibleBtn}>
          <img src={arrow} alt="show" style={{ rotate: visible ? "none" : "180deg" }} />
        </button>
      </div>
      <div style={{ display: visible ? "flex" : "none" }} className={css.skillOptions}>
        {options.map((option: SkillOptionIE, i: number) => (
          <div key={option.title} className={css.skillOption}>
            <div>
              {option.title}
            </div>
            <div className={css.optionSkillValue}>
              <button onClick={() => incrementValue(i)}>
                <img src={plus} alt="increment" />
              </button>
              <div>
                {option.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}