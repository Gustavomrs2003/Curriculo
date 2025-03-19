import style from "./style.module.css"
import foto from "../../assets/minha foto.png"
export default function Sobre() {
    return(
        <>
            <div className={style.sobre}>
                <img src={foto} alt="" />
                <div className={style.texto}>
                    <h1>Prazer em conhece-lo!<br/>
                         Me chamo Gsutavo Moraes</h1>
                </div>
            </div>
        </>
    )
}