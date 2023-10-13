import Htag from "../atoms/Htag";


export default function BottomMenu({divClass, firstText, secondText, ThirdText, textClass}){
    return (
    <div className={divClass}>

        <Htag
            classes = {textClass}
            text= {firstText}
        />

        <Htag
            classes = {textClass}
            text= {secondText}
        />

        <Htag
            classes = {textClass}
            text= {ThirdText}
        />

    </div>
    )
}

