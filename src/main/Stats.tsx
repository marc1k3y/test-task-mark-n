import css from "./style.module.css";


export const Stats = ({ label, value }:
  { label: string, value: number }) => {
  return (
    <div className={css.characterParameter}>
      <div className={css.line1}>
        <div>
          {label}
        </div>
        <div>
          {value}/100
        </div>
      </div>
      <div className={css.line2}>
        <div style={{ width: `${value}%`, backgroundColor: "#fbbf24", height: "8px", borderRadius: "2px" }}></div>
      </div>
    </div>
  );
}