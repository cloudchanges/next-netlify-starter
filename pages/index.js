// Limpia el body y lo reemplaza con el contenido de la página
document.body.innerHTML = `
    <header style="
        background: #4f46e5;
        color: white;
        padding: 2rem;
        text-align: center;
        margin: 0;
    ">
        <h1>@CloudChanges</h1>
        <p>Aprendizaje y herramientas impulsadas por la Inteligencia Artificial</p>
    </header>

    <nav style="
        background: #3730a3;
        padding: 1rem;
        text-align: center;
    ">
        <a href="#identidad" style="color:white; margin:0 1rem; text-decoration:none; font-weight:bold;">Identidad Digital</a>
        <a href="#imagenes" style="color:white; margin:0 1rem; text-decoration:none; font-weight:bold;">Creadores de Imágenes</a>
        <a href="#videos" style="color:white; margin:0 1rem; text-decoration:none; font-weight:bold;">Videos con IA</a>
        <a href="#cv" style="color:white; margin:0 1rem; text-decoration:none; font-weight:bold;">Modelado de CV</a>
        <a href="#webs" style="color:white; margin:0 1rem; text-decoration:none; font-weight:bold;">Páginas Web con IA</a>
    </nav>

    <div style="max-width:900px; margin:auto; padding:2rem; font-family:Arial, sans-serif;">

        <section id="identidad" style="
            margin-bottom:3rem;
            background:white;
            padding:2rem;
            border-radius:12px;
            box-shadow:0 2px 8px rgba(0,0,0,0.06);
        ">
            <h2 style="color:#4f46e5;">Identidad Digital y Cultura de Aprendizaje</h2>
            <p>
                Construyo mi identidad digital en la red y la gestiono eficazmente para profundizar en el aprendizaje de la cultura digital.
                Empleo una dirección de correo electrónico específica para el curso, independiente de la personal, y la vinculo a las redes sociales.
            </p>
        </section>

        <section id="imagenes" style="
            margin-bottom:3rem;
            background:white;
            padding:2rem;
            border-radius:12px;
            box-shadow:0 2px 8px rgba(0,0,0,0.06);
        ">
            <h2 style="color:#4f46e5;">Creadores de Imágenes con IA</h2>
            <p>
                Las herramientas de IA permiten generar imágenes profesionales para proyectos educativos, presentaciones, blogs o redes sociales.
                Entre las más destacadas se encuentran:
            </p>
            <ul>
                <li>DALL·E</li>
                <li>Midjourney</li>
                <li>Stable Diffusion</li>
                <li>Canva AI</li>
            </ul>
        </section>

        <section id="videos" style="
            margin-bottom:3rem;
            background:white;
            padding:2rem;
            border-radius:12px;
            box-shadow:0 2px 8px rgba(0,0,0,0.06);
        ">
            <h2 style="color:#4f46e5;">Creación de Vídeos con IA</h2>
            <p>
                La inteligencia artificial acelera enormemente la creación de vídeos explicativos, educativos o creativos. Algunas herramientas útiles son:
            </p>
            <ul>
                <li>Sora (OpenAI)</li>
                <li>RunwayML</li>
                <li>Pika Labs</li>
                <li>Veed.io AI</li>
            </ul>
        </section>

        <section id="cv" style="
            margin-bottom:3rem;
            background:white;
            padding:2rem;
            border-radius:12px;
            box-shadow:0 2px 8px rgba(0,0,0,0.06);
        ">
            <h2 style="color:#4f46e5;">Modelado y Mejora de Currículums con IA</h2>
            <p>
                La IA permite crear y optimizar currículums profesionales, resaltando habilidades y experiencia de forma clara y destacada. Opciones recomendadas:
            </p>
            <ul>
                <li>Kickresume AI</li>
                <li>Canva CV AI</li>
                <li>Teal Resume Builder</li>
                <li>ChatGPT para redacción y mejora de perfiles</li>
            </ul>
        </section>

        <section id="webs" style="
            margin-bottom:3rem;
            background:white;
            padding:2rem;
            border-radius:12px;
            box-shadow:0 2px 8px rgba(0,0,0,0.06);
        ">
            <h2 style="color:#4f46e5;">Creación de Páginas Web con IA</h2>
            <p>
                Es posible crear sitios web completos mediante inteligencia artificial sin conocimientos previos de programación. Herramientas destacadas:
            </p>
            <ul>
                <li>Webstudio (IA + exportación gratuita)</li>
                <li>Framer AI</li>
                <li>Durable</li>
                <li>Wix ADI</li>
            </ul>
        </section>

    </div>

    <footer style="
        text-align:center;
        padding:2rem;
        background:#eef1f6;
        margin-top:3rem;
    ">
        <p>CloudChanges · Aprendizaje con Inteligencia Artificial</p>
    </footer>
`;

// Inserta el script del chatbot de Zapier dinámicamente
const script = document.createElement("script");
script.type = "module";
script.async = true;
script.src = "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
document.head.appendChild(script);

// Inserta el componente del chatbot
const bot = document.createElement("zapier-interfaces-chatbot-embed");
bot.setAttribute("is-popup", "true");
bot.setAttribute("chatbot-id", "cmj00zte1002a12n4fmnlj317");
document.body.appendChild(bot);
