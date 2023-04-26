import css from "./style.module.css";
import edit from "../assets/edit.svg";

import { Stats } from "./Stats";
import { Skill } from "./Skill";
import { useEffect, useState } from "react";
import { MyModal } from "../components/MyModal";
import { EditBaseParamsModal } from "./EditBaseParamsModal";
import { BaseParamsIE, CharacterIE, ImportDataIE, SkillIE } from "../types";


export const Main = ({ character, setCharacter, characterList, importData }:
  { character: CharacterIE, setCharacter: (arg0: any) => void, characterList: string[], importData: ImportDataIE | null }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [baseParams, setBaseParams] = useState<BaseParamsIE>({
    power: 0, sleight: 0, intelligence: 0, charisma: 0
  });
  const [powerSkill, setPowerSkill] = useState<SkillIE>({ label: "Сила", options: [{ title: "Атака", value: 0 }] });
  const [sleightSkill, setSleightSkill] = useState<SkillIE>({ label: "Ловкость", options: [{ title: "Стелс", value: 0 }, { title: "Стрельба из лука", value: 0 }] });
  const [intelligenceSkill, setIntelligenceSkill] = useState<SkillIE>({ label: "Интеллект", options: [{ title: "Обучаемость", value: 0 }, { title: "Выживаемость", value: 0 }, { title: "Медицина", value: 0 }] });
  const [charismaSkill, setCharismaSkill] = useState<SkillIE>({ label: "Харизма", options: [{ title: "Запугивание", value: 0 }, { title: "Проницательность", value: 0 }, { title: "Внешний вид", value: 0 }, { title: "Манипулирование", value: 0 }] });

  function recieveDamage() {
    if (baseParams.power > 0) {
      setBaseParams((prev: BaseParamsIE) => ({ ...prev, power: baseParams.power - 1 }));
    }
  }

  function exportCharacterJSON() {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify({ character, baseParams, powerSkill, sleightSkill, intelligenceSkill, charismaSkill })
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = `${character.name}.json`;
    link.click();
  }

  useEffect(() => {
    if (importData) {
      setCharacter(importData.character);
      setBaseParams(importData.baseParams);
      setPowerSkill(importData.powerSkill);
      setSleightSkill(importData.sleightSkill);
      setIntelligenceSkill(importData.intelligenceSkill);
      setCharismaSkill(importData.charismaSkill);
    }
  }, [importData, setCharacter]);

  console.log("render");

  return (
    <div className={css.wrapper}>
      <div className={css.baseParams}>
        <div>Сила: {baseParams.power}</div>
        <div>Ловкость: {baseParams.sleight}</div>
        <div>Интеллект: {baseParams.intelligence}</div>
        <div>Харизма: {baseParams.charisma}</div>
        <button onClick={() => setEditMode(true)} className={css.editBtn}>
          <img src={edit} alt="edit" />
        </button>
      </div>
      <div className={css.character}>
        <div className={css.left}>
          <div className={css.characterName}>{character.name}</div>
          <img src={characterList[character.pictureIndex]} alt="character" />
        </div>
        <div className={css.right}>
          <Stats label={"Жизненная сила"} value={baseParams.power + 3} />
          <Stats label={"Уклонение"} value={baseParams.sleight + 10} />
          <Stats label={"Энергичность"} value={baseParams.sleight + baseParams.intelligence} />
        </div>
      </div>
      <button className={css.exportBtn} onClick={exportCharacterJSON}>
        Export
      </button>
      <div className={css.skills}>
        <Skill state={powerSkill} setState={setPowerSkill} maxValue={baseParams.power} />
        <Skill state={sleightSkill} setState={setSleightSkill} maxValue={baseParams.sleight} />
        <Skill state={intelligenceSkill} setState={setIntelligenceSkill} maxValue={baseParams.intelligence} />
        <Skill state={charismaSkill} setState={setCharismaSkill} maxValue={baseParams.charisma} />
      </div>
      <button className={css.damageBtn} onClick={recieveDamage} disabled={baseParams.power < 1}>
        Получить урон
      </button>
      <MyModal visible={editMode} setVisible={setEditMode}>
        <EditBaseParamsModal baseParams={baseParams} setBaseParams={setBaseParams} />
      </MyModal>
    </div>
  );
}