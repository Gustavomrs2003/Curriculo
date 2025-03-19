import { useEffect,  useState } from "react";
import style from "./style.module.css";

export default function Informacoes() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log("Topo da página:", scrollPosition);

      setIsVisible(scrollPosition > 150 && scrollPosition < 1100);
    };

    window.addEventListener("scroll", handleScroll);

    // Remove o listener quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className={style.infoTudo}>
      <div
        className={`${style.informacoes} ${isVisible ? style.active : style.sumido}`}
      >
        <h1>
          Sobre mim:
        </h1>
        <div className={style.textos}>
          <p>Sou estudante de Publicidade e Propaganda da UFRJ (Universidade Federal do Rio de Janeiro).</p>
          <p>Estou no 8° período da faculdade.</p>
          <p>Adoro inventar novas ideias para bons resultados.</p>
          <p>Gosto de trabalhar em equipe e criar novas ideais.</p>
          <p>Sou dedicado e não desisto fácil.</p>
        </div>
      </div>
    </div>
    
  );
}
