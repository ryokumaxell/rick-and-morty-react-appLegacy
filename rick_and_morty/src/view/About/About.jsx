import styleAbout from '../About/About.module.css'
export default function About() {
  return(
<div className={styleAbout.container}>
    <div className={styleAbout.card}>
      <img src="" alt="Leonel" />
      <div >
        <h2>Johan Leonel Acosta</h2>
        <p >Developer Full Stack</p>
        <p>Joven apacionado con el aprendisaje de nuevas tecnologia y uso de las mismas como son los stacks MERNS</p>
        <p>ryoku.maxell11@gmail.com</p>
        <p><button >Contact</button></p>
      </div>
    </div>
  </div>
)}