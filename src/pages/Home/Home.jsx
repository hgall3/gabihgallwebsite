import DarkBackground from "../../components/DarkBackground/DarkBackground";
import "./Home.scss";


export default function Home() {
  return (
    <>
      
      <DarkBackground wavePosition="bottom">
        <div className="home-hero">
          <h1>Sección con DarkBackground</h1>
          <p>
            Aquí ves el vector completo: fondo oscuro + ondas en la parte inferior.
          </p>
        </div>
      </DarkBackground>

      
      <section className="home-next-section">
        <h2>Sección siguiente</h2>
        <p>
          Esta sección solo está para que veas cómo el borde de las olas se junta
          con el inicio de otra sección al hacer scroll.
        </p>

        <div className="dummy-content">
          <p>
            Un poco de texto de relleno para que puedas hacer scroll y ver el efecto.
          </p>
          <p>
            Puedes cambiar colores, tipografías y spacing luego, esto es solo demo.
          </p>
        </div>
      </section>

      
      <DarkBackground wavePosition="top">
        <div className="home-hero">
          <h2>DarkBackground con olas arriba</h2>
          <p>La misma imagen, pero usando la parte de las ondas arriba.</p>
        </div>
      </DarkBackground>
    </>
  );
}
