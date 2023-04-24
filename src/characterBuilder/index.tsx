import css from "./style.module.css";
import { useState } from "react";
import { MyInput } from "../components/MyInput";

import alien from "../assets/alien.svg";
import chemist from "../assets/chemist.svg";
import cool from "../assets/cool.svg";
import hitman from "../assets/hitman.svg";
import psycho from "../assets/psycho.svg";
import robot from "../assets/robot.svg";
import sh from "../assets/superheroe.svg";
import warrior from "../assets/warrior.svg";
import back from "../assets/back.svg";
import next from "../assets/next.svg";

export const CharacterBuilder = () => {
  const characterList = [alien, chemist, cool, hitman,
    psycho, robot, sh, warrior];
  const [character, setCharacter] = useState({
    name: "", picture: 0
  });

  function backHandler() {
    setCharacter((prev) => ({
      ...prev, picture: character.picture === 0
        ? characterList.length - 1 : character.picture - 1
    }));
  }

  function nextHandler() {
    setCharacter((prev) => ({
      ...prev, picture: character.picture === characterList.length - 1
        ? 0 : character.picture + 1
    }));
  }
  return (
    <div className={css.wrapper}>
      <MyInput
        label="Hero name"
        value={character.name}
        onChange={(e) => setCharacter((prev) => ({ ...prev, name: e.target.value }))}
        type="text"
        labelAlign="center"
        size="large"
        bgColor="#fbbf24"
        capitalize />
      <div className={css.characterSelector}>
        <button onClick={backHandler}>
          <img src={back} alt="back" />
        </button>
        <img src={characterList[character.picture]} alt="current-character" />
        <button onClick={nextHandler}>
          <img src={next} alt="next" />
        </button>
      </div>
      <button disabled={character.name.length < 3}>
        Create
      </button>
    </div>
  );
}