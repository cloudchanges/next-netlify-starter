import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        // Cargar script del chatbot de Zapier
        const script = document.createElement("script");
        script.src = "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
        script.type = "module";
        script.async = true;
        document.body.appendChild(script);

        // Insertar el componente
        const bot = document.createElement("zapier-interfaces-chatbot-embed");
        bot.setAttribute("is-popup", "true");
        bot.setAttribute("chatbot-id", "cmj00zte1002a12n4fmnlj317");
        document.body.appendChild(bot);
    }, []);

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 1.6 }}>
            <header style={{
                background: "#4f46e5",
                color: "white",
                padding: "2rem",
                textAlign: "center",
            }}>
                <h1>CloudChanges</h1>
                <p>Aprendizaje y herramientas impulsadas por la Inteligencia Artificial</p>
            </header>

            <nav style={{
                background: "#3730a3",
                padding: "1rem",
                textAlign: "center"
            }}>
                <a href="#identidad" style={navLink}>Identidad Digital</a>
                <a href="#imagenes" style={navLink}>Creadores de Imágenes</a>
                <a href="#videos" style={navLink}>Videos con IA</a>
                <a href="#cv" style={navLink}>Modelado de CV</a>
                <a href="#webs" style={navLink}>Páginas Web con IA</a>
            </nav>

            <main style={{ maxWidth: 900, margin: "auto", padding: "2rem" }}>
                <Section id="identidad" title="Identidad Digital y Cultura de Aprendizaje">
                    Construyo mi identidad digital en la red y la gestiono eficazmente para profundizar en el aprendizaje de la cultura digital.
                    Empleo una dirección de correo electrónico específica para el curso, independiente de la personal, y la vinculo a las redes sociales.
                </Section>

                <Section id="imagenes" title="Creadores de Imágenes con IA">
                    Las herramientas de IA permiten generar imágenes profesionales para proyectos educativos, presentaciones, blogs o redes sociales.
                    <ul>
                        <li>DALL·E</li>
                        <li>Midjourney</li>
                        <li>Stable Diffusion</li>
                        <li>Canva AI</li>
                    </ul>
                </Section>

                <Section id="videos" title="Creación de Vídeos con IA">
                    La inteligencia artificial acelera enormemente la creación de vídeos explicativos, educativos o creativos. Herramientas:
                    <ul>
                        <li>Sora (OpenAI)</li>
                        <li>RunwayML</li>
                        <li>Pika Labs</li>
                        <li>Veed.io AI</li>
                    </ul>
                </Section>

                <Section id="cv" title="Modelado y Mejora de Currículums con IA">
                    Herramientas recomendadas:
                    <ul>
                        <li>Kickresume AI</li>
                        <li>Canva CV AI</li>
                        <li>Teal Resume Builder</li>
                        <li>ChatGPT para redacción y mejora de perfiles</li>
                    </ul>
                </Section>

                <Section id="webs" title="Creación de Páginas Web con IA">
                    Opciones recomendadas:
                    <ul>
                        <li>Webstudio</li>
                        <li>Framer AI</li>
                        <li>Durable</li>
                        <li>Wix ADI</li>
                    </ul>
                </Section>
            </main>

            <footer style={{
                textAlign: "center",
                background: "#eef1f6",
                padding: "2rem",
                marginTop: "3rem"
            }}>
                CloudChanges · Aprendizaje con Inteligencia Artificial
            </footer>
        </div>
    );
}

const navLink = {
    color: "white",
    margin: "0 1rem",
    textDecoration: "none",
    fontWeight: "bold"
};

function Section({ id, title, children }) {
    return (
        <section id={id} style={{
            background: "white",
            padding: "2rem",
            borderRadius: "12px",
            marginBottom: "3rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
        }}>
            <h2 style={{ color: "#4f46e5" }}>{title}</h2>
            <p>{children}</p>
        </section>
    );
}
