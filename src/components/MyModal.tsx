import { SyntheticEvent } from "react";


interface Props {
  visible: boolean
  setVisible: (arg0: boolean) => void
  children: JSX.Element
}

export const MyModal = ({ visible, setVisible, children }: Props) => {
  function closeModal() {
    setVisible(false);
  }
  return (
    <div style={{ display: visible ? "flex" : "none", alignItems: "center", justifyContent: "center", position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.8)" }} onClick={closeModal}>
      <div onClick={(e: SyntheticEvent) => e.stopPropagation()} style={{ backgroundColor: "#44403c", color: "#fbbf24", padding: "20px", borderRadius: "5px" }}>
        {children}
      </div>
    </div>
  );
}