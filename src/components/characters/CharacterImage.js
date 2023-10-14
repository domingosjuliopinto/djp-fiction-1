import './Characters.css';
import CharacterPath from '../../utilities/CharacterPath';

// importing character main costume
import sundayPrian from './Sunday Prian/Sunday Prian - Boroventia Gym (detail).png'
import ryushShin from './Ryush Shin/Ryush Shin - Boroventia Gym (detail).png'
import vaitShin from './Vait Shin/Vait Shin - Boroventia Gym (detail).png'
import gaayiBarbooza from './Gaayi Barbooza (NLhack)/Gaayi Barbooza - NLhack (detail).png'

function CharacterImage() {
    const CharacterName = CharacterPath();
    var ImageCharacter;
    var AltCharacter;
    
    if(CharacterName === "Sunday Prian"){
        ImageCharacter = sundayPrian;
        AltCharacter = 'Sunday Prian - Boroventia Gym'
    }else if(CharacterName==="Ryush Shin"){
        ImageCharacter=ryushShin;
        AltCharacter = 'Ryush Shin - Boroventia Gym'
    }else if(CharacterName==="Vait Shin"){
        ImageCharacter=vaitShin;
        AltCharacter = 'Vait Shin - Boroventia Gym'
    }else if(CharacterName==="Gaayi Barbooza (NLhack)"){
        ImageCharacter=gaayiBarbooza;
        AltCharacter = 'Gaayi Barbooza - NLhack'
    }

    return (
        <div className='vertical-center'>
            <img className='adjust' src={ImageCharacter} alt={AltCharacter}/>
        </div>
      );
}

export default CharacterImage