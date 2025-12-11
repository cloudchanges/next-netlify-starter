import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
        script.type = "module";
        script.async = true;
        document.body.appendChild(script);

        const bot = document.createElement("zapier-interfaces-chatbot-embed");
        bot.setAttribute("is-popup", "true");
        bot.setAttribute("chatbot-id", "cmj00zte1002a12n4fmnlj317");
        document.body.appendChild(bot);
    }, []);

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 1.6, margin: 0, padding: 0 }}>

            {/* Header con degradado */}
            <header
                style={{
                    background: "linear-gradient(135deg, #6366f1, #4338ca)",
                    color: "white",
                    padding: "3rem 1rem",
                    textAlign: "center",
                }}
            >
                <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>CloudChanges</h1>
                <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
                    Aprendizaje y herramientas impulsadas por la Inteligencia Artificial
                </p>
            </header>

            {/* Navegación con degradado */}
            <nav
                style={{
                    background: "linear-gradient(90deg, #4338ca, #312e81)",
                    padding: "1rem",
                    textAlign: "center",
                }}
            >
                {[
                    ["Identidad Digital", "#identidad"],
                    ["Imágenes con IA", "#imagenes"],
                    ["Vídeos con IA", "#videos"],
                    ["Currículums con IA", "#cv"],
                    ["Webs con IA", "#webs"],
                ].map(([label, link]) => (
                    <a
                        key={link}
                        href={link}
                        style={{
                            color: "white",
                            margin: "0 1rem",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                    >
                        {label}
                    </a>
                ))}
            </nav>

            <main style={{ maxWidth: 900, margin: "auto", padding: "2rem" }}>
                <Section
                    id="identidad"
                    title="Identidad Digital y Cultura de Aprendizaje"
                >
                    Construyo mi identidad digital en la red y la gestiono eficazmente para
                    profundizar en el aprendizaje de la cultura digital. Uso una dirección de
                    correo electrónico específica para el curso y la vinculo a mis redes
                    sociales de forma segura.
                </Section>

                {/* Creadores de imágenes */}
                <Section id="imagenes" title="Creadores de Imágenes con IA">
                    Las herramientas más destacadas para generación de imágenes son:
                    <ul>
                        <li><a href="https://openai.com/dall-e" target="_blank">DALL·E</a></li>
                        <li><a href="https://www.midjourney.com/" target="_blank">Midjourney</a></li>
                        <li><a href="https://stability.ai/" target="_blank">Stable Diffusion</a></li>
                        <li><a href="https://www.canva.com/es_es/canva-ai/" target="_blank">Canva AI</a></li>
                    </ul>
                </Section>

                {/* Vídeo con IA */}
                <Section id="videos" title="Creación de Vídeos con IA">
                    Herramientas recomendadas:
                    <ul>
                        <li><a href="https://openai.com/sora" target="_blank">Sora (OpenAI)</a></li>
                        <li><a href="https://runwayml.com/" target="_blank">RunwayML</a></li>
                        <li><a href="https://pika.art/" target="_blank">Pika Labs</a></li>
                        <li><a href="https://www.veed.io/" target="_blank">Veed.io</a></li>
                    </ul>
                </Section>

                {/* CV */}
                <Section id="cv" title="Modelado y Mejora de Currículums con IA">
                    Mejoradores de CV:
                    <ul>
                        <li><a href="https://www.kickresume.com/" target="_blank">Kickresume</a></li>
                        <li><a href="https://www.canva.com" target="_blank">Canva CV AI</a></li>
                        <li><a href="https://www.tealhq.com/resume-builder" target="_blank">Teal Resume Builder</a></li>
                        <li><a href="https://chat.openai.com" target="_blank">ChatGPT</a></li>
                    </ul>
                </Section>

                {/* Webs con IA */}
                <Section id="webs" title="Creación de Páginas Web con IA">
                    Plataformas recomendadas:
                    <ul>
                        <li><a href="https://webstudio.is/" target="_blank">Webstudio</a></li>
                        <li><a href="https://www.framer.com/ai/" target="_blank">Framer AI</a></li>
                        <li><a href="https://durable.co/" target="_blank">Durable</a></li>
                        <li><a href="https://wix.com" target="_blank">Wix ADI</a></li>
                    </ul>
                </Section>
            </main>

            <footer
                style={{
                    textAlign: "center",
                    padding: "2rem",
                    background: "#eef1f6",
                    marginTop: "3rem",
                    borderTop: "1px solid #ddd",
                }}
            >
                CloudChanges · Aprendizaje con Inteligencia Artificial
            </footer>
        </div>
    );
}

/* Componente de sección */
function Section({ id, title, children }) {
    return (
        <section
            id={id}
            style={{
                marginBottom: "3rem",
                background: "white",
                padding: "2rem",
                borderRadius: 12,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
        >
            <h2 style={{ color: "#4f46e5" }}>{title}</h2>
            <p>{children}</p>
        </section>
    );
}
