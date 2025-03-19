import style from "./style.module.css"

export default function Header() {
  const scrollSobre= () => {
    window.scrollTo({
      top: 501,
      behavior: "smooth",
    });
  };
  const scrollExp= () => {
    window.scrollTo({
      top: 937,
      behavior: "smooth",
    });
  };
  
  const scrollFor= () => {
    window.scrollTo({
      top: 1487,
      behavior: "smooth",
    });
  };

  const scrollHab= () => {
    window.scrollTo({
      top: 2194,
      behavior: "smooth",
    });
  };
  const scrollFooter= () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  
  return (
    <>
      <div className={style.header}>
        <h1 onClick={scrollSobre}>Sobre mim</h1>
        <h1 onClick={scrollExp}>Experiência</h1>
        <h1 onClick={scrollFor}>Formação</h1>
        <h1 onClick={scrollHab} >Habilidades</h1>
        <h1 onClick={scrollFooter}>Contato</h1>
      </div>
    </>
  );
}
