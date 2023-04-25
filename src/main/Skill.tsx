import css from "./style.module.css";
import { useState } from "react";
import arrow from "../assets/arrow.svg";
import plus from "../assets/plus.svg";

export const Skill = ({ state, setState, maxValue }: any) => {
  const { label, options } = state;
  const [visible, setVisible] = useState(false);

  function incrementValue(i: number) {
    const copyOptions = options;
    const option = options[i];
    const condition = option["value"] < maxValue && option["value"] < 5;
    if (condition) {
      option["value"] = option["value"] + 1;
      copyOptions[i] = option;
      setState((prev: any) => ({ ...prev, options: copyOptions }));
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
        {options.map((option: any, i: number) => (
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