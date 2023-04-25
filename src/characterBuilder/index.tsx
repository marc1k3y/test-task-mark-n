import React from "react";
import css from "./style.module.css";
import { MyInput } from "../components/MyInput";
import back from "../assets/back.svg";
import next from "../assets/next.svg";

function Upload({ setImportData }: any) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (e: any) => {
        setImportData(JSON.parse(e.target.result));
      }
    }
  }
  return (
    <label className={css.importCharacterInput}>
      <input type="file" onChange={handleChange} />
      Import
    </label>
  );
}

export const CharacterBuilder = ({ characterList, character, setCharacter, setBuilderMode, setImportData }: any) => {
  function backHandler() {
    setCharacter((prev: any) => ({
      ...prev, picture: character.picture === 0
        ? characterList.length - 1 : character.picture - 1
    }));
  }

  function nextHandler() {
    setCharacter((prev: any) => ({
      ...prev, picture: character.picture === characterList.length - 1
        ? 0 : character.picture + 1
    }));
  }
  return (
    <div className={css.wrapper}>
      <Upload setImportData={setImportData} />
      <MyInput
        label="Имя героя"
        value={character.name}
        onChange={(e) => setCharacter((prev: any) => ({ ...prev, name: e.target.value }))}
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
      <button disabled={character.name.length < 3} onClick={() => setBuilderMode(false)}>
        Создать
      </button>
    </div>
  );
}