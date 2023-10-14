import CharacterPath from "../../utilities/CharacterPath";

function CharacterInfo() {
  const CharacterName = CharacterPath();
  return (
    <div>
      <h1>{CharacterName}</h1>
    </div>
  );
}

export default CharacterInfo;