import React from "react";
import css from "./style.module.css";
import back from "../assets/back.svg";
import next from "../assets/next.svg";

import { CharacterIE } from "../types";
import { MyInput } from "../components/MyInput";


function Upload({ setImportData }: { setImportData: (arg0: object) => void }) {
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

export const CharacterBuilder = ({ characterList, character, setCharacter, setBuilderMode, setImportData }:
  { characterList: string[], character: CharacterIE, setCharacter: (arg0: any) => void, setBuilderMode: (arg: boolean) => void, setImportData: (arg0: any) => void }) => {
  function backHandler() {
    setCharacter((prev: CharacterIE) => ({
      ...prev, pictureIndex: character.pictureIndex === 0
        ? characterList.length - 1 : character.pictureIndex - 1
    }));
  }

  function nextHandler() {
    setCharacter((prev: CharacterIE) => ({
      ...prev, pictureIndex: character.pictureIndex === characterList.length - 1
        ? 0 : character.pictureIndex + 1
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
        <img src={characterList[character.pictureIndex]} alt="current-character" />
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