<!DOCTYPE html>

<html class="light" lang="es"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Aprende IA - Diario de Aprendizaje</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&amp;family=Noto+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#2b7cee",
                        "background-light": "#f6f7f8",
                        "background-dark": "#101822",
                        "border-light": "#e7ecf3",
                        "border-dark": "#2d3748",
                    },
                    fontFamily: {
                        "display": ["Lexend", "Noto Sans", "sans-serif"]
                    },
                    borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'Lexend', sans-serif;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-[#0d131b] dark:text-slate-100 transition-colors duration-200">
<div class="flex h-screen overflow-hidden">
<!-- Sidebar Navigation -->
<aside class="w-72 flex-shrink-0 border-r border-border-light dark:border-border-dark bg-white dark:bg-background-dark hidden lg:flex flex-col">
<div class="p-6 flex flex-col h-full">
<div class="flex items-center gap-3 mb-10">
<div class="bg-primary rounded-lg size-10 flex items-center justify-center text-white">
<span class="material-symbols-outlined">auto_stories</span>
</div>
<div class="flex flex-col">
<h1 class="text-[#0d131b] dark:text-white text-base font-bold leading-tight">Diario de Aprendizaje</h1>
<p class="text-primary text-xs font-semibold uppercase tracking-wider">Hub de Recursos IA</p>
</div>
</div>
<nav class="flex flex-col gap-1 flex-1">
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group" href="#">
<span class="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">home</span>
<span class="text-sm font-medium">Inicio</span>
</a>
<div class="h-px bg-border-light dark:border-border-dark my-2"></div>
<p class="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Rutas de aprendizaje</p>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">book_5</span>
<span class="text-sm font-semibold">Fundamentos de IA</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group" href="#">
<span class="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">terminal</span>
<span class="text-sm font-medium">Prompt Engineering</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group" href="#">
<span class="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">palette</span>
<span class="text-sm font-medium">IA Generativa</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group" href="#">
<span class="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">school</span>
<span class="text-sm font-medium">Productividad Académica</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group mt-auto" href="#">
<span class="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">settings</span>
<span class="text-sm font-medium">Configuración</span>
</a>
</nav>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 flex flex-col overflow-y-auto">
<!-- Top Navbar -->
<header class="sticky top-0 z-10 flex items-center justify-between border-b border-border-light dark:border-border-dark bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-8 py-4">
<div class="flex items-center gap-4">
<button class="lg:hidden p-2 text-slate-600">
<span class="material-symbols-outlined">menu</span>
</button>
<h2 class="text-lg font-bold">Aprende IA</h2>
</div>
<div class="flex items-center gap-4 flex-1 justify-end max-w-2xl">
<div class="relative w-full max-w-md hidden sm:block">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
<input class="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary" placeholder="Buscar cursos, guías..." type="text"/>
</div>
<div class="flex items-center gap-2">
<button class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
</button>
<button class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700">
<span class="material-symbols-outlined">account_circle</span>
</button>
</div>
</div>
</header>
<div class="p-8 max-w-6xl mx-auto w-full">
<!-- Breadcrumbs -->
<nav class="flex items-center gap-2 text-sm text-slate-500 mb-6">
<a class="hover:text-primary" href="#">Inicio</a>
<span class="material-symbols-outlined text-xs">chevron_right</span>
<a class="hover:text-primary" href="#">Recursos</a>
<span class="material-symbols-outlined text-xs">chevron_right</span>
<span class="font-semibold text-[#0d131b] dark:text-white">Aprende IA</span>
</nav>
<!-- Page Heading -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div class="space-y-2">
<h1 class="text-4xl font-extrabold tracking-tight text-[#0d131b] dark:text-white">Aprende Inteligencia Artificial</h1>
<p class="text-slate-500 dark:text-slate-400 max-w-2xl text-lg">Domina las herramientas que están transformando la educación con módulos estructurados y 100% prácticos.</p>
</div>
<button class="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
<span class="material-symbols-outlined">trending_up</span>
                        Ver mi progreso
                    </button>
</div>
<!-- Content Block: Fundamentos -->
<section class="mb-12">
<div class="flex items-center justify-between border-b border-border-light dark:border-border-dark pb-4 mb-6">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-3xl">school</span>
<h3 class="text-2xl font-bold">Fundamentos de IA</h3>
</div>
<a class="text-primary text-sm font-bold flex items-center hover:underline" href="#">Ver todo <span class="material-symbols-outlined text-sm">chevron_right</span></a>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Card 1 -->
<div class="bg-white dark:bg-slate-900 border border-border-light dark:border-border-dark rounded-xl overflow-hidden hover:shadow-xl transition-shadow group">
<div class="aspect-video bg-slate-200 dark:bg-slate-800 relative">
<div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20"></div>
<div class="h-full w-full bg-cover bg-center" data-alt="Futuristic digital brain abstract concept" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVAdc7XQSi5t-nNn6xmJinC49fj3yH__ADLOJvGyrxvqnF1ItQ4IAqAM2rKtmXYCMqOqkn0p7PwOVlPNb2PEGnzKnyX0wzEEbSQYCWrPtKUknLgCcRIW-0dUc3iKERVNREsK6HiTqK959TUmMhzV1w2OKJGUwlAF9qsTU458gDosYVSBmtu8MtAWh9mnzz2NSGIsrdCgzCSa_T7jJ5Xxr3BqJHskFtHiKfCFy-RN8VryaI2sSEmMw-c7khBlBDgZufy6r2pShVC88');"></div>
<div class="absolute top-3 left-3 flex gap-2">
<span class="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-primary">Principiante</span>
<span class="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">15 min</span>
</div>
</div>
<div class="p-5">
<h4 class="font-bold text-lg mb-2 group-hover:text-primary transition-colors">¿Qué es un LLM?</h4>
<p class="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-4">Entiende el funcionamiento básico de los grandes modelos de lenguaje y por qué son tan potentes.</p>
<button class="w-full bg-primary/10 dark:bg-primary/20 text-primary font-bold py-2 rounded-lg hover:bg-primary hover:text-white transition-all">Empezar módulo</button>
</div>
</div>
<!-- Card 2 -->
<div class="bg-white dark:bg-slate-900 border border-border-light dark:border-border-dark rounded-xl overflow-hidden hover:shadow-xl transition-shadow group">
<div class="aspect-video bg-slate-200 dark:bg-slate-800 relative">
<div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-600/20"></div>
<div class="h-full w-full bg-cover bg-center" data-alt="Abstract neural network connections visualization" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNAiCUg3QbQmExYXkHAEgJFcAoEMuqgE5JTZ6t1zdjo9Zu1AZH1tC9h2JybGKx-V6OJsCkHtx5aAqHdPLb8VPACdXgKoVhj4Mza9kCsn2bfwW0zQNhuJgdfOXnRKm8z5msl5py13ezVyyo-dvJ-VS5tcNDd-mv8PZ-vAMRwWJfBkT7L0yzpcYev8iRNpeWDDXU1_Z32gi7WP-6dKHprcn4yA2VQRnUPt4orpUwK3M7PSja71nl0hEeAIlQoH1XliQc1qgfLzM3vxk');"></div>
<div class="absolute top-3 left-3 flex gap-2">
<span class="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-primary">Principiante</span>
<span class="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">30 min</span>
</div>
</div>
<div class="p-5">
<h4 class="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Historia de la IA</h4>
<p class="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-4">Desde Alan Turing hasta GPT-4. Un recorrido por los hitos más importantes de la tecnología.</p>
<button class="w-full bg-primary/10 dark:bg-primary/20 text-primary font-bold py-2 rounded-lg hover:bg-primary hover:text-white transition-all">Empezar módulo</button>
</div>
</div>
<!-- Card 3 -->
<div class="bg-white dark:bg-slate-900 border border-border-light dark:border-border-dark rounded-xl overflow-hidden hover:shadow-xl transition-shadow group">
<div class="aspect-video bg-slate-200 dark:bg-slate-800 relative">
<div class="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20"></div>
<div class="h-full w-full bg-cover bg-center" data-alt="Cybersecurity and digital technology concept" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAE3ngqa0etGSMlhpJzhUbtx2cUpFzR3F_tMMKuMpsH59Jz-FmrxLru30AOVUrJE7Q__lfi4NqIoBHzxkBQutQT82zt2BTXl_876LH6RQekJaXZpjrUzSkev-T9SyVnwxxoulV_X9-bUI5kWIwKU9c6Mmo-JkHNxUOD7rA_tKiJKEhQ2jIw9j0XMW19Fv55yEJxZkRc6ljJVSdMZJLm8vOFJGCtwRXzZagso567ttB3GLJtH2sPTDS_slQ9fQPuVP74huKf7bKPvSA');"></div>
<div class="absolute top-3 left-3 flex gap-2">
<span class="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-primary">Intermedio</span>
<span class="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">45 min</span>
</div>
<div class="absolute bottom-0 left-0 w-full h-1 bg-slate-100 dark:bg-slate-700">
<div class="h-full bg-emerald-500 w-[60%]"></div>
</div>
</div>
<div class="p-5">
<div class="flex justify-between items-start mb-2">
<h4 class="font-bold text-lg group-hover:text-primary transition-colors">Ética y Seguridad</h4>
<span class="text-emerald-500 text-xs font-bold bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded">En curso</span>
</div>
<p class="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-4">Cómo usar la IA de forma responsable, evitando sesgos y protegiendo tu privacidad.</p>
<button class="w-full bg-primary text-white font-bold py-2 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all">Continuar</button>
</div>
</div>
</div>
</section>
<!-- Content Block: Prompt Engineering -->
<section class="mb-12">
<div class="flex items-center justify-between border-b border-border-light dark:border-border-dark pb-4 mb-6">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-3xl">terminal</span>
<h3 class="text-2xl font-bold">Prompt Engineering</h3>
</div>
<a class="text-primary text-sm font-bold flex items-center hover:underline" href="#">Ver todo <span class="material-symbols-outlined text-sm">chevron_right</span></a>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<!-- Card 4 - Mini -->
<div class="bg-white dark:bg-slate-900 border border-border-light dark:border-border-dark p-4 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors cursor-pointer group">
<div class="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">description</span>
</div>
<h5 class="font-bold text-sm mb-1">Few-Shot Prompting</h5>
<p class="text-slate-500 text-xs line-clamp-2">Aprende a dar ejemplos para mejores resultados.</p>
</div>
<!-- Card 5 - Mini -->
<div class="bg-white dark:bg-slate-900 border border-border-light dark:border-border-dark p-4 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors cursor-pointer group">
<div class="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">psychology_alt</span>
</div>
<h5 class="font-bold text-sm mb-1">Chain of Thought</h5>
<p class="text-slate-500 text-xs line-clamp-2">Guía a la IA a través del razonamiento lógico.</p>
</div>
<!-- Card 6 - Mini -->
<div class="bg-white dark:bg-slate-900 border border-border-light dark:border-border-dark p-4 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors cursor-pointer group">
<div class="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">person_pin</span>
</div>
<h5 class="font-bold text-sm mb-1">Framework de Roles</h5>
<p class="text-slate-500 text-xs line-clamp-2">Define identidades claras para la IA.</p>
</div>
<!-- Card 7 - Mini -->
<div class="bg-white dark:bg-slate-900 border border-border-light dark:border-border-dark p-4 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors cursor-pointer group">
<div class="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">add_circle</span>
</div>
<h5 class="font-bold text-sm mb-1">Técnicas Avanzadas</h5>
<p class="text-slate-500 text-xs line-clamp-2">Delimita y estructura tus peticiones complejas.</p>
</div>
</div>
</section>
<!-- Content Block: Productividad Académica -->
<section class="mb-12">
<div class="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 border border-primary/20">
<div class="flex flex-col md:flex-row gap-8 items-center">
<div class="flex-1 space-y-4">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-4xl">verified_user</span>
<h3 class="text-2xl font-bold">IA para Productividad Académica</h3>
</div>
<p class="text-slate-600 dark:text-slate-300">
                                    ¿Sabías que puedes reducir tu tiempo de investigación a la mitad? Nuestra guía especializada para estudiantes y profesores te enseña a citar, organizar notas y automatizar bibliografías usando IA.
                                </p>
<div class="flex flex-wrap gap-4 pt-2">
<div class="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
<span class="material-symbols-outlined text-primary">check_circle</span>
                                        Zotero + ChatGPT
                                    </div>
<div class="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
<span class="material-symbols-outlined text-primary">check_circle</span>
                                        Escritura Científica
                                    </div>
<div class="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
<span class="material-symbols-outlined text-primary">check_circle</span>
                                        Gestión de Referencias
                                    </div>
</div>
<button class="mt-4 bg-[#0d131b] dark:bg-white text-white dark:text-[#0d131b] font-bold py-3 px-8 rounded-lg transition-transform active:scale-95">Explorar Guía Académica</button>
</div>
<div class="w-full md:w-72 aspect-square rounded-xl bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
<div class="absolute inset-0 bg-primary/10"></div>
<div class="h-full w-full bg-cover bg-center" data-alt="Students studying together with laptops and books" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuZwVbRlf88jrHXW9LiQxdQmdVz4is0Vrdtxx60BKLIKQjNklw-SZNYPvEaInGMr0EIWLP2Uzk6v7KSdCkTmMaJBw0p7qdI-8ayxIh9Ol1WTL2lhpvoyLW9Tzu7TU1uVom5othbAYxgdywMv5HA7-bHLQR42VW3K7UqB_s3Auyjkwn4QfLJUcDG_JGavlWzgzY4P8rKU1RAcy22LVJ5iKSrRxDCP_dSWv8jghP9jxN-dMzhbELHO71IlEIZS4MiogLrTrN5H7dlaE');"></div>
</div>
</div>
</div>
</section>
<!-- Footer style spacer -->
<div class="h-20"></div>
</div>
</main>
</div>
</body></html>
