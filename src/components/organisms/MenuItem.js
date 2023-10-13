import NamePrice from "../molecules/NamePrice";
import Htag from "../atoms/Htag";

export default function MenuItem({mainDiv, divClass, secondDivClass, thirdDivClass, classesfirst, classessecond, textfirst, textSecond, descriptionRow, descriptionCol, descriptionClass, descriptionText}){
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
                    classes = {`${descriptionClass}`}
                    text = {descriptionText}
                ></Htag>
            </div>
        </div>
    </div>
    )
  }


//   key={index}
//   mainDiv = "container"
//   divClass= "row"
//   secondDivClass= "col-9"
//   thirdDivClass= "col-3"
//   classesfirst= {styles.menuTitle}
//   classessecond= {styles.price}
//   textfirst={item.title}
//   textSecond={item.price}
//   descriptionRow = "row"
//   descriptionCol= "col-12"
//   descriptionClass= {styles.descriptionTextStyle}
//   descriptionText= {item.description}
// />