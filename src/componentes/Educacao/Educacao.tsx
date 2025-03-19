import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "./Slider/Slider";
import SwiperCore from "swiper";
import "../../../node_modules/swiper/swiper-bundle.css";
import { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import voltar from "../../assets/voltar.png";
import avancar from "../../assets/avancar.png";
import pensi from "../../assets/pensi_logo.jpg";
import ufrj from "../../assets/UFRJ-logo.jpg";
import cna from "../../assets/CNA-logo.png";
import cultura from "../../assets/culturaInglesa-logo.png";

export interface educacao {
  nome: string;
  unidade: string;
  ano: string;
  img: string;
}

const educacaoLista: educacao[] = [
  {
    ano: "2016-2020",
    img: pensi,
    nome: "Ensino médio completo",
    unidade: "Colégio PENSI",
  },
  {
    ano: "2021-2025(previsão)",
    img: ufrj,
    nome: "Ensino superior\n(em andamento)",
    unidade: "UFRJ",
  },
  {
    ano: "2009-2016",
    img: cna,
    nome: "Ensino facultativo",
    unidade: "Curso de inglês - CNA",
  },
  {
    ano: "2017-2018",
    img: cultura,
    nome: "Ensino facultativo",
    unidade: "Curso de inglês - Cultura inglesa",
  },
];

export default function Educacao() {
  const swiperRef2 = useRef<SwiperCore | null>(null);
  const [slideAtual, setSlideAtual] = useState<number>(1);
const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        console.log("Topo da página:", scrollPosition);
  
        setIsVisible(scrollPosition > 950 && scrollPosition < 2100);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Remove o listener quando o componente for desmontado
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div className={`${style.formacaoDiv} ${isVisible ? style.active : ""}`}>
      <h1 className={style.formacao}>Formações:</h1>
      <div className={style.slidePai}>
        <div className={style.slide}>
          <img
            src={voltar}
            className={style.voltarfeedback}
            onClick={() => {
              swiperRef2.current?.slidePrev();
              setSlideAtual(slideAtual - 1);
            }}
          ></img>
          <Swiper
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef2.current = swiper)}
          >
            {educacaoLista.map((item, index) => (
              <SwiperSlide key={index}>
                <Slider
                  nome={item.nome}
                  img={item.img}
                  unidade={item.unidade}
                  ano={item.ano}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <img
            src={avancar}
            className={style.avancarfeedback}
            onClick={() => {
              swiperRef2.current?.slideNext();
              setSlideAtual(slideAtual + 1);
            }}
          ></img>
        </div>
      </div>
    </div>
  );
}
