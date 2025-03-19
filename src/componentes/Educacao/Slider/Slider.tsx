import { educacao } from "../Educacao";
import style from "./style.module.css"

export default function Slider(item:educacao){
    return(
        <div className={style.slide}>
            <img src={item.img} alt="" />
            <div className={style.texto}>
                <h1 style={{whiteSpace: "pre-line"}}>{item.nome}</h1>
                <h3>{item.unidade}</h3>
                <h3>{item.ano}</h3>
            </div>
        </div>
    )
}