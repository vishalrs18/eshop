import { useLocation } from "react-router";
import "../style.scss";

const Path = () => {
  const { pathname } = useLocation();

  return (
    <div className="path-section">{pathname === "/" ? "/home" : pathname}</div>
  );
};

export default Path;
