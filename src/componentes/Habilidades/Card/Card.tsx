import { useEffect, useState } from "react";
import { CardItem } from "../Habilidade";
import style from "./style.module.css"

export default function Card(item:CardItem){
    const [isVisible, setIsVisible] = useState(false);
        
            useEffect(() => {
              const handleScroll = () => {
                const scrollPosition = window.scrollY;
                console.log("Topo da página:", scrollPosition);
          
                setIsVisible(scrollPosition > 1650);
              };
          
              window.addEventListener("scroll", handleScroll);
          
              // Remove o listener quando o componente for desmontado
              return () => {
                window.removeEventListener("scroll", handleScroll);
              };
            }, []);
    return(
        <div className={`${style.card} ${isVisible ? style.active : ""}`}>
            <img src={item.img} alt="" />
            <h1>{item.descricao}</h1>
        </div>
    )
}