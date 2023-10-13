
import Htag from "../atoms/Htag"

export default function NamePrice({divClass, secondDivClass, thirdDivClass, classesfirst, classessecond, textfirst, textSecond}){
    return (
    <div className= {divClass}>
      <div className={secondDivClass}>
        <h2 className= {classesfirst}>{textfirst}</h2>
      </div>
      <div className={thirdDivClass}>
        <h3 className= {classessecond}>{textSecond}</h3>
      </div>
    </div>
    )
  }