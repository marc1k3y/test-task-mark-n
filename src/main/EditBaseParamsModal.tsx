import css from "./style.module.css";
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";

export const EditBaseParamsModal = ({ baseParams, setBaseParams }: any) => {
  function incrementParam(param: "power" | "sleight" | "intelligence" | "charisma") {
    if (baseParams[param] < 100) {
      setBaseParams((prev: any) => ({ ...prev, [param]: baseParams[param] + 1 }));
    }
  }

  function decrementParam(param: "power" | "sleight" | "intelligence" | "charisma") {
    if (baseParams[param] > 0) {
      setBaseParams((prev: any) => ({ ...prev, [param]: baseParams[param] - 1 }));
    }
  }
  return (
    <div className={css.editParamsModal}>
      <div>
        <div>
          Сила:
        </div>
        <div className={css.paramController}>
          <button onClick={() => decrementParam("power")}>
            <img src={minus} alt="decrement" />
          </button>
          {baseParams.power}
          <button onClick={() => incrementParam("power")}>
            <img src={plus} alt="increment" />
          </button>
        </div>
      </div>
      <div>
        <div>
          Ловкость:
        </div>
        <div className={css.paramController}>
          <button onClick={() => decrementParam("sleight")}>
            <img src={minus} alt="decrement" />
          </button>
          {baseParams.sleight}
          <button onClick={() => incrementParam("sleight")}>
            <img src={plus} alt="increment" />
          </button>
        </div>
      </div>
      <div>
        <div>
          Интеллект:
        </div>
        <div className={css.paramController}>
          <button onClick={() => decrementParam("intelligence")}>
            <img src={minus} alt="decrement" />
          </button>
          {baseParams.intelligence}
          <button onClick={() => incrementParam("intelligence")}>
            <img src={plus} alt="increment" />
          </button>
        </div>
      </div>
      <div>
        <div>
          Харизма:
        </div>
        <div className={css.paramController}>
          <button onClick={() => decrementParam("charisma")}>
            <img src={minus} alt="decrement" />
          </button>
          {baseParams.charisma}
          <button onClick={() => incrementParam("charisma")}>
            <img src={plus} alt="increment" />
          </button>
        </div>
      </div>
    </div>
  );
}