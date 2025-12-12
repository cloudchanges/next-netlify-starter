import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-700 to-green-500 text-white font-sans">
      <Head>
        <title>CloudChanges</title>
        <meta name="description" content="Recopilación de herramientas IA" />
      </Head>

      <header className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Herramientas de IA</h1>
        <p className="text-xl opacity-80">Una selección curada de herramientas potentes para potenciar tu productividad</p>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-24" id="webs">

        {/* --- CREACIÓN DE IMÁGENES --- */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 border-b border-white/20 pb-2">Creadores de Imágenes con IA</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-lg">
            <li><a href="https://openai.com/dall-e" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/80 transition">DALL·E</a></li>
            <li><a href="https://www.midjourney.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/80 transition">Midjourney</a></li>
            <li><a href="https://stablediffusionweb.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/80 transition">Stable Diffusion</a></li>
            <li><a href="https://www.canva.com/ai-image-generator/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/80 transition">Canva AI</a></li>
          </ul>
        </section>

        {/* --- CREACIÓN DE VÍDEOS --- */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 border-b border-white/20 pb-2">Creación de Vídeos con IA</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-lg">
            <li><a href="https://openai.com/sora" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/80 transition">Sora (OpenAI)</a></li>
            <li><a href="https://runwayml.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/80 transition">RunwayML</a></li>
            <li><a href="https://pika.art" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/80 transition">Pika Labs</a></li>
            <li><a href="https://www.veed.io/ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/80 transition">Veed.io AI</a></li>
          </ul>
        </section>

        {/* --- MODELADO DE CV --- */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 border-b border-white/20 pb-2">Modelado de CV con IA</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-lg">
            <li><a href="https://www.kickresume.com/en/ai-resume-writer/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/80 transition">Kickresume AI</a></li>
            <li><a href="https://www.canva.com/resumes/templates/ai/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/80 transition">Canva CV AI</a></li>
            <li><a href="https://www.tealhq.com/resume-builder" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/80 transition">Teal Resume Builder</a></li>
            <li><a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/80 transition">ChatGPT</a></li>
          </ul>
        </section>

        {/* --- PAGINAS WEB --- */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 border-b border-white/20 pb-2">Páginas Web con IA</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-lg">
            <li><a href="https://webstudio.is" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/80 transition">Webstudio</a></li>
            <li><a href="https://www.framer.com/ai/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/80 transition">Framer AI</a></li>
            <li><a href="https://durable.co" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/80 transition">Durable</a></li>
            <li><a href="https://www.wix.com/website/builder/adi" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/80 transition">Wix ADI</a></li>
          </ul>
        </section>
      </main>

      {/* Chatbot embed */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.embeddedChatbotConfig = {
              chatbotId: "uGt6oUQH5y7GpV5rT5BrX",
              domain: "www.chatbase.co"
            };
          `,
        }}
      />

      <script src="https://www.chatbase.co/embed.min.js" chatbotId="uGt6oUQH5y7GpV5rT5BrX" domain="www.chatbase.co" defer></script>
    </div>
  );
}
