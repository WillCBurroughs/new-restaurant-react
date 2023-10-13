import NamePrice from "../molecules/NamePrice";
import Htag from "../atoms/Htag";

export default function MenuItem({mainDiv,divClass, secondDivClass, thirdDivClass, classesfirst, classessecond, textfirst, textSecond, descriptionRow, descriptionCol, descriptionClass, descriptionText}){
    return (
    <div className= {mainDiv}>
        <div className= {divClass}>
        <div className={secondDivClass}>
            <h2 className= {classesfirst}>{textfirst}</h2>
        </div>
        <div className={thirdDivClass}>
            <h3 className= {classessecond}>{textSecond}</h3>
        </div>
        </div>
        <div className= {descriptionRow}>
            <div className= {descriptionCol}>
                <Htag 
                    className = {descriptionClass}
                    text = {descriptionText}
                ></Htag>
            </div>
        </div>
    </div>
    )
  }