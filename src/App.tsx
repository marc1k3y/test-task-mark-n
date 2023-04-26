import "./App.css";
import { useEffect, useState } from "react";
import { CharacterBuilder } from "./characterBuilder";
import { Main } from "./main";

import alien from "./assets/alien.svg";
import chemist from "./assets/chemist.svg";
import cool from "./assets/cool.svg";
import hitman from "./assets/hitman.svg";
import psycho from "./assets/psycho.svg";
import robot from "./assets/robot.svg";
import sh from "./assets/superheroe.svg";
import warrior from "./assets/warrior.svg";

import { CharacterIE, ImportDataIE } from "./types";


export default function App() {
  const characterList = [alien, chemist, cool, hitman,
    psycho, robot, sh, warrior];

  const [builderMode, setBuilderMode] = useState(true);
  const [character, setCharacter] = useState<CharacterIE>({
    name: "", pictureIndex: 0
  });
  const [importData, setImportData] = useState<ImportDataIE | null>(null);

  useEffect(() => {
    if (importData) {
      setBuilderMode(false);
    }
  }, [importData]);
  return (
    <div className="App">
      {builderMode
        ? <CharacterBuilder characterList={characterList} character={character} setCharacter={setCharacter} setBuilderMode={setBuilderMode} setImportData={setImportData} />
        : <Main character={character} setCharacter={setCharacter} characterList={characterList} importData={importData} />}
    </div>
  );
}