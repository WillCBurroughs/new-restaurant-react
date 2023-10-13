import Image from "next/image"

export default function Logo({classes, source}){
    return (
        <img className = {classes} src={source} alt="Logo" width={50} height={50} />
    )
  }