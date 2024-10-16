import { useState } from "react";
import classes from "./colorConverter.module.css";

export const ColorConverter = () => {
  const [hex, setHex] = useState<string>("");
  const [rgb, setRgb] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>("");

  const convertHexToRba = (hex: string) => {
    if (hex.length !== 7 || !/^#[0-9A-Fa-f]{6}$/i.test(hex)) {
      return null;
    }
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setHex(input);

    if (input.length === 7) {
      const rgbValue: string | null = convertHexToRba(input);
      if (rgbValue) {
        setRgb(rgbValue);
        setBgColor(rgbValue);
      } else {
        setRgb("Ошибка!");
        setBgColor("#b4221b");
      }
    } else {
      setRgb("");
    };
  }

  return (
    <div className={classes["container"]} style={{ backgroundColor: bgColor }}>
      <form className={classes["form-converter"]}>
        <input
          className={classes["input-hex"]}
          type="text"
          placeholder="#FFFFFF"
          value={hex}
          onChange={handleInputChange}
        />
        <div className={classes["output-rgb"]}>{rgb}</div>
      </form>
    </div>
  );
}