import { Link } from "react-router-dom";
import s from "./Nav.module.scss";
export function Nav() {
  return (
    <div className={s.Nav}>
      <Link className={s.Nav__link} to="/">
        {" "}
        Til Baka{" "}
      </Link>
    </div>
  );
}
