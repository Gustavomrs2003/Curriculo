import Card from "./Card/Card";
import style from "./style.module.css"
import ingles from "../../assets/ingles.jpg"
import lideranca from "../../assets/lideranca.png"
import office from "../../assets/officepac.png"
import canva from "../../assets/canva.png"
import comunicacao from "../../assets/comunicacao.png"
import quick from "../../assets/quick.png"
import { useEffect, useState } from "react";


export interface CardItem{
    descricao:string 
    img:string
}

const cards:CardItem[]=[{
    descricao:"Fluência em inglês",
    img:ingles
},{
    descricao:"Hàbil uso do pacote Office",
    img:office
},{
    descricao:"Hábil uso do Canva",
    img:canva
},{
    descricao:"Liderança",
    img:lideranca
},{
    descricao:"Comunicação criativa",
    img:comunicacao
},{
    descricao:"Aprendimento rápido",
    img:quick
},]

export default function Habilidade() {
    const [isVisible, setIsVisible] = useState(false);
    
        useEffect(() => {
          const handleScroll = () => {
            const scrollPosition = window.scrollY;
            console.log("Topo da página:", scrollPosition);
      
            setIsVisible(scrollPosition > 1650 );
          };
      
          window.addEventListener("scroll", handleScroll);
      
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, []);
  return (
    <div className={`${style.divPai} ${isVisible ? style.active : ""}`}>
      <h1 className={style.hab}>Habilidades:</h1>
      <div className={style.listas}>
        {cards.map((item)=>(
            <Card
            descricao={item.descricao}
            img={item.img}
            />
        ))}
      </div>
    </div>
  );
}
