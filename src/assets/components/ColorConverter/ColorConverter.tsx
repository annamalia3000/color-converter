import classes from "./colorConverter.module.css";

export const ColorConverter = () => {
  return (
    <form>
      <input className={classes['input-hex']} type="text" />
      <button className={classes["button"]} type="button"></button>
    </form>
  );
};
