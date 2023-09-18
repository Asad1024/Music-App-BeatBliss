import { singers1, singers2 } from "../songs"
import {BsYoutube} from "react-icons/bs"

const SingerCard = () => {
  return (
         <div className="singersCard">
        <div className="singerInfo">
        {singers1.map((item) => (
            <>
                <div className="singerList">
                    <img src={item.image} alt="" />
                    <h3>{item.name}</h3>
                    <a href={item.channel} target="_blank" rel="noopener noreferrer">
                    <BsYoutube className="singIcon"/>
                    </a>
                </div>
            </>
        ))}
        </div>
        <div className="singerInfo">
        {singers2.map((item) => (
            <>
                <div className="singerList">
                    <img src={item.image} alt="" />
                    <h3>{item.name}</h3>
                    <a href={item.channel} >
                    <BsYoutube className="singIcon" />
                    </a>
                </div>
            </>
        ))}
        </div>
        
      </div>
  )
}

export default SingerCard