import style from "./style.module.css";
import itau from "../../assets/itau.png";
import { useEffect,  useState } from "react";
export default function Experiencia() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        console.log("Topo da página:", scrollPosition);
  
        setIsVisible(scrollPosition > 600 && scrollPosition < 1500);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Remove o listener quando o componente for desmontado
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div 
    className={`${style.experiencia} ${isVisible ? style.active : ""}`}>
      <img src={itau} alt="" />

      <div>
        <h1>ITAÚ UNIBANCO SA | 2022-2024</h1>
        <h3>Assistente administrativo - jovem aprendiz</h3>
        <ul>
          <li>Apoiar os agentes de relacionamento</li>
          <li>Montar e/ou otimizar planilhas de contato de clientes.</li>
          <li>Montar slides para serem exibidos em todas as agências.</li>
          <li>Organizar o espeço de trabalho comum.</li>
        </ul>
      </div>
    </div>
  );
}
