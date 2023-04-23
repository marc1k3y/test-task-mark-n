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

export const Auth = () => {
  const characterList = [alien, chemist, cool, hitman,
    psycho, robot, sh, warrior];
  const [character, setCharacter] = useState({
    name: "", picture: 0
  });
  const [authData, setAuthData] = useState({
    login: "", password: ""
  })

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
      <div className={css.characterBuilder}>
        <div className={css.characterName}>
          <MyInput
            label="Hero name"
            value={character.name}
            onChange={(e) => setCharacter((prev) => ({ ...prev, name: e.target.value }))}
            type="text"
            labelAlign="center"
            size="small" />
        </div>
        <div className={css.characterSelector}>
          <button onClick={backHandler}>back</button>
          <img src={characterList[character.picture]} alt="current-character" />
          <button onClick={nextHandler}>next</button>
        </div>
      </div>
      <div className={css.loginForm}>
        <MyInput
          label="Login"
          value={authData.login}
          onChange={(e) => setAuthData((prev) => ({ ...prev, login: e.target.value }))}
          type="text"
          labelAlign="left"
          size="small" />
        <MyInput
          label="Password"
          value={authData.password}
          onChange={(e) => setAuthData((prev) => ({ ...prev, password: e.target.value }))}
          type="password"
          labelAlign="left"
          size="small" />
      </div>
    </div>
  );
}