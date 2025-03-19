import style from "./style.module.css"
import email from "../../assets/email.png"
import telefone from "../../assets/telefone.png"
import map from "../../assets/map.png"

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.email}>
        
        <img src={email} alt="" />
        <a href="https://mail.google.com/mail/?view=cm&to=gustavo.moraes2003@gmail.com&su=Assunto&body=Mensagem%20aqui" target="_blank">gustavo.moraes2003@gmail.com</a>
      </div>
      <div className={style.numero}>
        <img src={telefone} alt="" />
        <h2>(21) 99882-0464</h2>
      </div>
      <div className={style.rua}>
        <img src={map}alt="" />
        <h2>Rua Barão do bom retiro 2465, apto302</h2>
      </div>
    </div>
  );
}
