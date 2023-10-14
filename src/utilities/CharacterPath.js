import { useLocation } from "react-router-dom";

function CharacterPath() {
  const location = useLocation();
  const CharacterName = (location.pathname.substring(12)).replaceAll('-',' ');
  return (CharacterName);
}

export default CharacterPath;