# Funcionalidades y capacidades

## Los 5 pilares de Cowork

Cowork no es una sola funcionalidad — son cinco, rankeadas aqui por cuanto impactan tu forma de trabajar.

| # | Pilar | En 10 palabras |
|---|-------|----------------|
| 1 | File System Access | Claude lee y escribe archivos en una carpeta de tu computadora |
| 2 | AskUserQuestion | Cowork te pregunta a TI en vez de adivinar y equivocarse |
| 3 | Plugins | Packs de especialista que hacen a Claude experto al instante |
| 4 | Instructions | Memoria permanente que se carga al inicio de cada sesion |
| 5 | Connectors | Integraciones en vivo con Slack, Drive, Notion y 50+ herramientas |

## Arquitectura

Cowork esta construido sobre las mismas bases que Claude Code, usando el Claude Agent SDK. La diferencia clave es que Cowork esta disenado para trabajo de conocimiento general, no solo para programacion.

Claude corre dentro de una maquina virtual (VM) ligera de Linux (Ubuntu 22) en tu computadora. Esto proporciona un entorno aislado y seguro separado de tu sistema operativo principal.

---

## Pilar 1: File System Access

Cada otra herramienta de IA funciona con uploads. Exportas un archivo, lo arrastras al chat, esperas, obtienes un output, lo descargas, lo pones de vuelta donde vino. Cowork elimina ese loop completo.

Seleccionas una carpeta. Claude lee todo dentro de ella. Cuando crea algo — un documento, una hoja de calculo, un resumen — lo guarda directamente en esa carpeta.

Esto suena como algo menor. No lo es. Es la diferencia entre IA como una herramienta a la que vas e IA como un colaborador que trabaja en tu entorno. Cowork puede leer tus reportes viejos para igualar tu formato, jalar datos de la hoja de calculo del mes pasado para construir la de este mes, o referenciar tus guias de marca a mitad de tarea sin que las menciones.

**Operaciones soportadas:** crear archivos, editar contenido, renombrar, mover entre carpetas, organizar estructura de directorios.

### La estrategia de archivos de contexto

Crea una carpeta "Claude Context" con tres archivos:

- **`about-me.md`** — quien eres, que haces, tu rol, que significa exito para ti
- **`brand-voice.md`** — como te comunicas, tus frases, que suena mal, tu tono
- **`working-style.md`** — como quieres que Claude se comporte, formatos preferidos, nivel de detalle

Mientras mas contexto de calidad le des a Claude en estos archivos, menos prompting necesitas. La calidad del output pasa de "IA generica" a "esto suena como algo que yo escribiria."

## Pilar 2: AskUserQuestion

Esto es lo que toda otra IA hace cuando le das una tarea ambigua: adivina. Con confianza. Elige una interpretacion, la ejecuta, y te da un output pulido que responde la pregunta equivocada.

Cowork hace algo diferente. Cuando necesita mas informacion, se detiene y genera preguntas estructuradas: opciones multiples, opciones especificas, un formulario que te ayuda a pensar en lo que realmente quieres.

### Como activarlo

Agrega esta linea al final de cualquier prompt:

```
NO empieces a trabajar todavia. Primero, hazme preguntas de clarificacion
para que podamos definir el enfoque juntos. Solo empieza cuando estemos
alineados.
```

O usa este como tu abridor por defecto para casi cualquier tarea:

```
Quiero [TU TAREA] para que [COMO SE VE EL EXITO].
Primero, lee todos los archivos subidos completamente antes de responder.
NO empieces a ejecutar todavia. Hazme preguntas de clarificacion
(usa AskUserQuestion) para refinar el enfoque. Solo empieza a trabajar
cuando estemos alineados.
```

Pruebalo una vez. No vas a volver a escribir prompts largos y cuidadosamente disenados desde cero.

## Pilar 3: Plugins

Sin un plugin, Claude Cowork es un generalista brillante. Puede escribir, investigar, analizar, organizar y construir. Pero no conoce la terminologia de tu industria, el workflow de tu equipo, ni los outputs especificos que tu rol requiere.

Los plugins cambian eso. Son paquetes de skills, comandos slash y sub-agentes disenados para funciones de trabajo especificas. Ver la [guia completa de plugins](04-plugins-and-connectors.md).

## Pilar 4: Instructions (Globales y por Carpeta)

Cowork no tiene memoria entre sesiones. Cada vez que abres una conversacion nueva, Claude empieza completamente en blanco. Sin conocimiento de quien eres. Sin memoria de lo que discutieron ayer. Nada.

Este es el feature que mas frustra a la gente — hasta que descubren Instructions.

**Global Instructions:** se configuran una vez en Settings > Cowork. Se cargan automaticamente en cada sesion. Claude arranca sabiendo tu nombre, tu rol, tus preferencias de comunicacion, tus defaults de output y tu estilo de trabajo.

**Folder Instructions:** contexto especifico por proyecto. Cuando seleccionas una carpeta, Claude carga las instrucciones asociadas. Perfecto para trabajo con clientes: cada carpeta puede tener su propio brief.

## Pilar 5: Connectors

El workflow tipico de IA involucra mucho copy-paste. Capturas tu hilo de Slack. Copias el doc. Lo pegas en el chat. Agregas contexto manualmente.

Connectors eliminan todo eso. Conecta tus herramientas una vez, y Claude puede referenciar datos en vivo de ellas durante la conversacion. Sin copy-paste. Sin screenshots. Sin descargas.

Pidele a Cowork que resuma las decisiones clave de #proyecto-alpha de las ultimas dos semanas y lee tu Slack. Pidele los numeros del Q1 del doc de revenue en Drive y abre tu Google Doc. Pidele que encuentre todo lo marcado como blocker en Notion y busca en tu workspace.

Esto es gratuito en todos los planes. Es el feature mas subutilizado de Cowork.

---

## Capacidades tecnicas adicionales

### Ejecucion agentica multi-paso

Claude no espera instrucciones paso a paso. Toma una tarea compleja, la descompone en sub-tareas, las ejecuta de forma autonoma y entrega resultados completos.

### Sub-agentes paralelos

Para tareas complejas, Claude lanza multiples sub-agentes que trabajan simultaneamente en diferentes partes del problema.

### Creacion de documentos profesionales

Claude tiene "skills" especializados para cada tipo de documento:

- **Excel (.xlsx):** formulas funcionales, formato condicional, graficos, analisis de datos
- **PowerPoint (.pptx):** diseno, diagramas, notas del presentador
- **Word (.docx):** formato profesional, tablas de contenido, encabezados
- **PDF:** creacion, extraccion, merge, split, formularios
- **HTML/React:** aplicaciones web interactivas y visualizaciones
- **Markdown:** reportes, guias y documentacion

### Cola de tareas

Puedes enviar multiples tareas a la vez. Claude las procesa sin requerir interaccion secuencial.

### Tareas programadas

Usando `/schedule`, configuras tareas que se ejecutan automaticamente de forma recurrente. Requisito: la computadora debe estar encendida y la app abierta.

### Navegacion web

Claude busca informacion con WebSearch y WebFetch. Con Claude in Chrome instalado, puede interactuar directamente con paginas web.

### Integracion Excel + PowerPoint

En research preview, Claude puede pasar contexto entre Excel y PowerPoint. Disponible para Mac en planes Max, Team o Enterprise.

### No genera imagenes

Para fotos, ilustraciones o arte visual, Cowork no es tu herramienta. Usa herramientas especializadas de generacion de imagenes para eso y Cowork para documentos, hojas de calculo, presentaciones e investigacion. Herramientas diferentes para trabajos diferentes.

## Tipos de archivos con renderizado especial

Estos formatos tienen visualizacion integrada en la interfaz: Markdown (.md), HTML (.html), React (.jsx), Mermaid (.mermaid), SVG (.svg), PDF (.pdf).

## Seguridad y permisos

**Aislamiento:** la VM esta separada del sistema operativo principal.

**Control de acceso:** tu eliges que carpetas y conectores puede ver Claude.

**Proteccion contra eliminacion:** Claude requiere permiso explicito antes de eliminar archivos.

**Permisos granulares:** para cada conector puedes configurar herramientas como Allow (automatico), Ask (confirma antes) o Block (nunca ejecuta).

**Research preview:** Anthropic es explicito sobre esto — la seguridad de agentes para Cowork sigue en desarrollo. Es solido para un preview, pero tratalo acorde. No lo corras sobre archivos que no puedas permitirte que se modifiquen sin confirmacion.

---

[Volver al indice](../README.md) | [Anterior: Primeros pasos](01-getting-started.md) | [Siguiente: Buenas practicas](03-best-practices.md)
