# Claude Cowork Brain

> Tu cerebro central para entender, dominar y sacarle el maximo provecho a Claude Cowork.

## Que es Claude Cowork?

Cowork es la extension agentica de Claude Desktop que lleva las capacidades de Claude Code al trabajo de conocimiento del dia a dia. En lugar de responder prompts uno a uno, Claude puede tomar tareas complejas de multiples pasos y ejecutarlas de forma autonoma: organizar archivos, crear reportes, generar presentaciones, analizar datos y mucho mas.

> ChatGPT te entreno para escribir mejores prompts. Cowork te entrena para construir mejor contexto. Uno es una habilidad que se deprecia. El otro se acumula.

**Estado actual:** Research Preview (disponible desde enero 2026)

**Disponibilidad:** Planes pagos (Pro $20/mes, Max $100-200/mes, Team, Enterprise) en macOS y Windows

## Los 5 pilares de Cowork

| # | Pilar | Que hace |
|---|-------|----------|
| 1 | **File System Access** | Lee y escribe archivos en una carpeta de tu computadora |
| 2 | **AskUserQuestion** | Te pregunta a TI en vez de adivinar y equivocarse |
| 3 | **Plugins** | Packs de especialista para tu rol exacto |
| 4 | **Instructions** | Memoria permanente que se carga en cada sesion |
| 5 | **Connectors** | Integraciones en vivo con Slack, Drive, Notion y 50+ herramientas |

## Estructura de este repositorio

```
claude-cowork-guide/
|-- README.md                          # Este archivo
|-- docs/
|   |-- 01-getting-started.md          # Primeros 30 minutos con Cowork
|   |-- 02-features.md                 # Los 5 pilares y capacidades
|   |-- 03-best-practices.md           # Filosofia y buenas practicas
|   |-- 04-plugins-and-connectors.md   # Plugins, MCP, conectores y slash commands
|   |-- 05-use-cases.md                # Casos de uso con prompts reales
|   |-- 06-troubleshooting.md          # Limitaciones honestas y soluciones
|-- templates/
|   |-- context-files/
|   |   |-- about-me.md                # Plantilla: quien eres
|   |   |-- brand-voice.md             # Plantilla: como te comunicas
|   |   |-- working-style.md           # Plantilla: como quieres que Claude trabaje
|   |-- global-instructions.md         # Plantillas de instrucciones globales por rol
|   |-- folder-instructions.md         # Plantillas de instrucciones por carpeta
|   |-- task-prompts.md                # Prompts probados para tareas comunes
|-- examples/
|   |-- file-organization.md           # Ejemplo: organizar archivos
|   |-- research-synthesis.md          # Ejemplo: sintesis de investigacion
|   |-- data-analysis.md               # Ejemplo: analisis de datos
```

## Inicio rapido (30 minutos)

1. **Minutos 0-5:** Descarga la app desde [claude.com/download](https://claude.com/download) y abre Cowork
2. **Minutos 5-10:** Crea tu carpeta "Claude Context" con [archivos de contexto](templates/context-files/)
3. **Minutos 10-15:** Configura [instrucciones globales](templates/global-instructions.md) en Settings > Cowork
4. **Minutos 15-20:** Corre tu primera tarea real con el patron "lee + preguntame + ejecuta"
5. **Minutos 20-25:** Instala un [plugin](docs/04-plugins-and-connectors.md) para tu rol
6. **Minutos 25-30:** Conecta una herramienta (Slack, Drive, Gmail) en Settings > Connectors

> Guia detallada paso a paso: [Primeros pasos](docs/01-getting-started.md)

## Guias principales

| Guia | Descripcion |
|------|-------------|
| [Primeros pasos](docs/01-getting-started.md) | Tus primeros 30 minutos, archivos de contexto, instrucciones globales |
| [Funcionalidades](docs/02-features.md) | Los 5 pilares de Cowork y capacidades tecnicas |
| [Buenas practicas](docs/03-best-practices.md) | Filosofia "contexto > prompts", patrones y anti-patrones |
| [Plugins y conectores](docs/04-plugins-and-connectors.md) | Plugins por rol, comandos slash, connectors, MCP |
| [Casos de uso](docs/05-use-cases.md) | Ejemplos practicos con prompts listos para usar |
| [Troubleshooting](docs/06-troubleshooting.md) | Limitaciones honestas, workarounds y problemas comunes |

## Plantillas

| Plantilla | Uso |
|-----------|-----|
| [about-me.md](templates/context-files/about-me.md) | Quien eres y que haces |
| [brand-voice.md](templates/context-files/brand-voice.md) | Tu estilo de comunicacion |
| [working-style.md](templates/context-files/working-style.md) | Como quieres que Claude trabaje |
| [Instrucciones globales](templates/global-instructions.md) | Preferencias por rol (PM, analista, marketing) |
| [Instrucciones por carpeta](templates/folder-instructions.md) | Contexto por proyecto |
| [Prompts probados](templates/task-prompts.md) | Prompts listos para copiar y usar |

## El prompt que lo cambia todo

```
Quiero [TU TAREA] para que [COMO SE VE EL EXITO].
Primero, lee todos los archivos completamente antes de responder.
NO empieces a ejecutar todavia. Hazme preguntas de clarificacion
para refinar el enfoque. Solo empieza a trabajar cuando estemos alineados.
```

## Conceptos clave

**Agentico:** Claude no solo responde — planifica, ejecuta sub-tareas en paralelo y entrega resultados completos.

**VM aislada:** Cowork corre en una maquina virtual ligera en tu computadora, separada de tu sistema operativo.

**MCP (Model Context Protocol):** Protocolo abierto de Anthropic para conectar IA con herramientas externas.

**Skills:** Conocimiento especializado que Claude usa automaticamente para crear documentos de alta calidad.

**Plugins:** Paquetes que agrupan skills, comandos slash, conectores MCP y sub-agentes para dominios especificos.

**Archivos de contexto:** Archivos markdown que almacenan tu identidad, voz y preferencias. Se componen con el tiempo.

## Fuentes

- [Get started with Cowork — Claude Help Center](https://support.claude.com/en/articles/13345190-get-started-with-cowork)
- [Introducing Cowork — Claude Blog](https://claude.com/blog/cowork-research-preview)
- [Cowork and plugins across enterprise — Claude Blog](https://claude.com/blog/cowork-plugins-across-enterprise)
- [Knowledge Work Plugins — GitHub](https://github.com/anthropics/knowledge-work-plugins)
- [Claude Cowork Complete Guide — God of Prompt](https://www.godofprompt.ai/blog/claude-cowork-complete-guide)
