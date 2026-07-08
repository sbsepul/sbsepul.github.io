# Plan de actualizacion del portfolio

Fecha de analisis: 2026-07-06

## Resumen ejecutivo

El sitio actual presenta bien el perfil academico y de Vision AI, pero esta desactualizado frente a los proyectos activos del workspace. Hoy la home muestra solo Dream Home y el dataset de investigacion; no aparecen AI Memory Vault, Nuku, Finance Hub, Startup Name Checker ni Skills Universal. El CV tambien mantiene una fecha de enero 2025 y contiene proyectos placeholder que no reflejan el trabajo actual.

La mejora principal deberia reposicionar la pagina como portfolio de productos tecnicos: data engineering, herramientas para agentes AI, aplicaciones local-first y productos verticales para Chile.

## Proyectos detectados

| Proyecto | Estado observado | Repo / origen | Que deberia comunicar |
|---|---|---|---|
| Dream Home | Producto activo, app Next.js en `dream-home-labs/dream-home`, ultimo commit 2026-06-20 | `git@github.com:dream-home-labs/dream-home.git` | Simulacion hipotecaria, gestion/comparacion de propiedades, UF, mapas, exportaciones |
| AI Memory Vault | CLI + backend Python + frontend Vite, ultimo commit 2026-06-17 | `git@github.com:sbsepul/ai-memory-vault.git` | Backup, busqueda, exportacion y restauracion de historial de agentes AI como Claude Code y Codex |
| Nuku / Health Family Tracker | Monorepo activo, ultimo commit 2026-07-05 | `git@github.com:sbsepul/health-family-tracker.git` | App local-first auto-hospedada para salud familiar, registros de presion, glucosa, insulina, exportacion Excel y bot Telegram |
| Finance Hub | App Next.js local, ultimo commit 2026-07-01, sin remoto detectado | local `finance-hub` | Dashboard financiero privado para cartolas bancarias, categorias, transferencias familiares y analisis historico |
| Startup Name Checker | CLI Python + documentacion de producto, ultimo commit 2026-07-01 | `git@github.com:sbsepul/startup-name-checker.git` | Verificacion de nombres de startup en nic.cl, App Store, Google Play y fuentes sociales |
| Skills Universal | Sistema de skills multi-CLI, ultimo commit 2026-06-13 | `git@github.com:sbsepul/skills-universal.git` | Infraestructura personal para crear/sincronizar skills entre Claude, Codex, Gemini, OpenCode y OpenClaw |
| Scraper Banco Santander | Prueba tecnica RPA, ultimo commit 2026-05-30 | `git@github.com:sbsepul/prueba-tecnica-rpa.git` | Proyecto de automatizacion/scraping financiero; conviene mostrarlo como case study tecnico o dejarlo fuera de destacados |
| Repetitive Patterns Dataset | Ya esta publicado en el sitio | GitHub externo | Investigacion Vision AI y publicacion ACM |

## Brechas actuales del sitio

1. La propuesta de valor esta atrasada: "Data Scientist specializing in Vision AI, GenAI and Data Engineering" no muestra el foco reciente en herramientas de agentes AI, productos local-first y apps privadas.
2. La seccion Projects tiene solo dos cards. Faltan al menos cinco proyectos recientes.
3. No hay jerarquia por tipo de trabajo. Conviene separar entre productos activos, herramientas open source, investigacion y trabajos tecnicos/case studies.
4. El CV muestra "Last updated: January 2025" y dos proyectos genericos de 2020/2021 que deberian reemplazarse por proyectos reales.
5. La pagina no tiene una ruta dedicada `/projects`, por lo que la home quedara larga si se agregan todos los proyectos con suficiente detalle.
6. La navegacion solo muestra `blog`; falta acceso a `projects` y `cv`.
7. El blog no refleja el trabajo 2026. Hay posts sobre Vision AI y YOLO, pero nada sobre agentes, local-first, finanzas personales, salud familiar o construccion de productos.
8. Varias piezas son privadas o sensibles. Finance Hub y Nuku deben comunicarse con cuidado: destacar arquitectura y privacidad sin exponer datos reales.

## Plan de mejoras

### Fase 1: Actualizacion rapida de contenido

- Actualizar el hero:
  - Nuevo posicionamiento sugerido: "Data & AI engineer building local-first products, agent tooling, and applied ML systems."
  - Mantener el contexto chileno y la base de data engineering.
- Reescribir About Me para incluir:
  - Data engineering en retail.
  - Investigacion publicada en Vision AI.
  - Construccion reciente de productos: Dream Home, Nuku, AI Memory Vault, Finance Hub.
  - Interes actual en agentes AI, privacidad/local-first y herramientas para desarrolladores.
- Agregar cards en la home:
  - Dream Home
  - AI Memory Vault
  - Nuku
  - Startup Name Checker
  - Finance Hub, marcado como "private/local"
  - Skills Universal
  - Repetitive Patterns Dataset
- Actualizar CV:
  - Fecha a julio 2026.
  - Reemplazar proyectos placeholder por proyectos reales.
  - Ajustar skills: Next.js, React, TypeScript, Python, FastAPI, PostgreSQL, Prisma, Docker, GCP, BigQuery, LLM tooling, local-first apps.

### Fase 2: Mejoras de estructura

- Crear `src/data/projects.ts` como fuente unica de proyectos.
- Reutilizar esa data en la home y en una nueva pagina `/projects`.
- Agregar campos por proyecto:
  - `title`
  - `status`: active, open-source, private, research, case-study
  - `category`
  - `description`
  - `impact`
  - `stack`
  - `links`
  - `featured`
- Crear `/projects` con filtros simples por categoria:
  - Products
  - AI Tooling
  - Data / Finance
  - Research
  - Automation
- Agregar links en la nav:
  - projects
  - cv
  - blog

### Fase 3: Mejoras visuales y de confianza

- Evolucionar `ProjectCardCompact` para soportar:
  - estado visible: Active, Open source, Private, Research.
  - dos links opcionales: demo y repo.
  - una linea de impacto o resultado.
- Evitar emojis como unica identidad visual de proyectos; usar iconos de `react-icons` o una variante consistente por categoria.
- Agregar una seccion "Currently building" arriba de Projects para destacar 2 o 3 proyectos recientes:
  - Nuku
  - AI Memory Vault
  - Dream Home
- Agregar pequenos indicadores de actividad:
  - "Updated Jul 2026"
  - "CLI"
  - "Self-hosted"
  - "Local-first"
  - "Open source"

### Fase 4: Blog y storytelling tecnico

Publicar 3-5 posts cortos que expliquen los proyectos recientes:

1. "Building AI Memory Vault: why agent history needs to be portable"
2. "Nuku: a local-first health tracker for families"
3. "Dream Home: mortgage simulation and property comparison for Chile"
4. "Designing private finance tooling from bank statements"
5. "Maintaining one skills system across multiple AI CLIs"

Cada post deberia enlazar al proyecto correspondiente y servir como evidencia tecnica, no solo descripcion de producto.

## Contenido sugerido para cards

### AI Memory Vault

Personal database for AI coding history. Extracts Claude Code and Codex sessions, normalizes them into a portable model, and supports search, Markdown export, git backup, and restore workflows.

Tags: Python, CLI, FastAPI, AI Agents

### Nuku

Self-hosted health tracker for families. Records blood pressure, glucose and insulin for multiple patients, with daily summaries, trend charts, Excel export and an optional Telegram bot.

Tags: Next.js, TypeScript, PostgreSQL, Prisma

### Dream Home

Mortgage and property analysis app for Chile. Simulates buying capacity, compares properties, tracks UF values, geocodes addresses, maps candidates and exports property data.

Tags: Next.js, TypeScript, Real Estate, Maps

### Finance Hub

Private financial dashboard that reads Santander bank statements, validates and normalizes transactions, categorizes expenses, tracks family transfers and visualizes historical behavior.

Tags: Next.js, TypeScript, Finance, Zod

### Startup Name Checker

CLI to check startup name availability across nic.cl, App Store, Google Play and social sources, with JSON output for automation and agent workflows.

Tags: Python, CLI, Product Research

### Skills Universal

Personal skills system that keeps one source of truth synchronized across Claude, Codex, Gemini, OpenCode and OpenClaw.

Tags: Shell, AI Agents, Developer Tools

## Implementacion recomendada

1. Crear `src/data/projects.ts`.
2. Migrar las cards hardcodeadas de `src/pages/index.astro` a un map sobre `featuredProjects`.
3. Crear `src/pages/projects.astro` con todos los proyectos.
4. Extender `ProjectCardCompact.tsx` para soportar status, impact y links.
5. Actualizar `src/components/NavBar.tsx`.
6. Actualizar `src/pages/cv.astro`.
7. Ejecutar `npm run build`.

## Riesgos y decisiones pendientes

- Definir si `finance-hub` debe publicarse en GitHub o mostrarse como proyecto privado/local.
- Decidir si `prueba-tecnica-rpa` se muestra publicamente. Puede ser util como case study de automatizacion, pero no parece un proyecto central de marca personal.
- Resolver duplicidad entre `dream-home` y `dream-home-labs-dream-home`; la pagina deberia enlazar a la version vigente.
- Revisar si hay demos publicas disponibles para Nuku, AI Memory Vault o Startup Name Checker. Si no existen, usar links a repo y capturas.
