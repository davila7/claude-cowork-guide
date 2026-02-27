# Buenas practicas

## La filosofia central

> Deja de pensar en mejores prompts. Empieza a pensar en mejor contexto.

Los que mas provecho sacan de la IA no son los que escriben los prompts mas ingeniosos. Son los que construyeron sistemas: archivos que almacenan su contexto, instrucciones que persisten entre sesiones, plugins que especializan su herramienta, un setup que mejora cada semana.

## 1. Construye tu sistema de archivos de contexto

Esta es la practica numero uno. Antes de cualquier otra cosa.

Crea una carpeta "Claude Context" con tres archivos:

**`about-me.md`** — Quien eres. Que haces. Tu rol. Un ejemplo de trabajo del que estes orgulloso. Que significa exito en tu trabajo.

**`brand-voice.md`** — Como te comunicas. Frases que usas. Que suena mal para ti. Ejemplos de escritura que representan tu estilo. Tu tono.

**`working-style.md`** — Como quieres que Claude se comporte. Preguntas primero? Salidas cortas o largas? Que formatos prefieres? Que NO debe hacer.

Estos archivos se componen con el tiempo. Cada semana que los refinas, Claude mejora en tu trabajo especifico.

## 2. Usa AskUserQuestion como tu primer paso

No intentes escribir el prompt perfecto. Deja que Cowork descubra lo que necesita saber.

**El patron universal:**

```
Quiero [TU TAREA] para que [COMO SE VE EL EXITO].
Primero lee todos los archivos. NO empieces a ejecutar todavia.
Hazme preguntas de clarificacion para refinar el enfoque.
Solo empieza cuando estemos alineados.
```

Si la primera ronda de preguntas no los alinea, dilo. Claude generara un nuevo set y seguiran iterando. Esto es especialmente poderoso con la ventana de contexto de mas de un millon de tokens — cuando Claude ha leido todos los archivos relevantes y ha clarificado la tarea, el output es consistentemente aterrizado en lo que realmente es cierto.

## 3. Se especifico en las instrucciones que das

Cuando SI escribas instrucciones directas, se especifico. Las solicitudes vagas producen resultados vagos.

**Mal:**
> "Hazme un reporte"

**Bien:**
> "Crea un reporte en Word con los datos de ventas del Q4 2025 del archivo ventas.xlsx. Incluye resumen ejecutivo, graficos de tendencia por region, y recomendaciones. Tono formal, dirigido al equipo directivo. Maximo 6 paginas."

Elementos clave: que quieres (formato de salida), de donde sacarlo (fuentes), como debe verse (tono, estilo, estructura), para quien es (audiencia) y que NO hacer (restricciones).

## 4. Limita el acceso a carpetas

No le des acceso a Claude a todo tu disco. Crea carpetas de proyecto especificas y otorga acceso solo a las necesarias. Esto reduce riesgos y ayuda a Claude a enfocarse.

## 5. Haz backup antes de operaciones con archivos

Antes de pedir a Claude que reorganice, renombre o modifique archivos masivamente, haz una copia de respaldo. Claude puede malinterpretar instrucciones y algunas operaciones son dificiles de revertir.

## 6. Configura instrucciones globales solidas

Esta es la inversion unica que paga en cada sesion para siempre. Ideas:

- "Siempre responde en espanol"
- "Soy product manager en una startup de fintech"
- "Prefiero documentos concisos, sin relleno"
- "Convencion de nombres: YYYY-MM-DD-nombre-descriptivo"
- "Si no estas seguro de algo, pregunta antes de actuar"
- "Nunca uses bullet points a menos que lo pida especificamente"

Ver [plantilla completa](../templates/global-instructions.md) para mas ejemplos por rol.

## 7. Usa instrucciones por carpeta para proyectos

Cada carpeta de cliente o proyecto puede tener su propio brief que Claude carga automaticamente. Nunca repites contexto.

## 8. Revisa el plan antes de ejecutar

Siempre. Es mucho mas facil corregir el rumbo antes de la ejecucion que despues.

## 9. Administra tu cuota inteligentemente

Cowork consume significativamente mas cuota que el chat normal. Estrategias:

- Usa chat normal para preguntas que no necesitan acceso a archivos
- Agrupa tareas relacionadas en una sola sesion
- Monitorea Settings > Usage
- Reserva Cowork para tareas que realmente se benefician de ejecucion agentica
- Si estas en Pro y haces uso pesado diario, considera Max ($100-200/mes)

## 10. Aprovecha la iteracion

Si el primer resultado no es exacto, no empieces de cero. Pide ajustes especificos sobre lo que ya se genero.

## 11. Instala el plugin correcto

Con un plugin activo, el output es notablemente mas estructurado y opinionado que un prompt generico. El plugin sabe como se ve un buen output para tu funcion. No trabajes como generalista si existe un plugin para tu area.

## 12. Conecta tus herramientas

Conecta al menos una herramienta (Slack, Drive, Notion, Gmail). Solo se hace una vez. Despues de eso, Claude accede a datos en vivo desde esa herramienta en cada sesion. Es el feature mas subutilizado de Cowork.

## 13. Explora una funcionalidad nueva cada dia

Dedica 10 minutos diarios a probar algo nuevo. Un tipo de tarea diferente, un conector que no hayas usado, un formato de salida nuevo. Estos experimentos se acumulan y expanden tu conocimiento practico.

## 14. Sincroniza tus archivos de contexto en la nube

Si trabajas en multiples computadoras, pon tus archivos de contexto en una carpeta sincronizada (iCloud, Dropbox, Google Drive). Cowork es solo desktop y no sincroniza entre dispositivos, pero tus archivos si pueden estarlo.

## Anti-patrones a evitar

**Instrucciones ambiguas:** "Mejora esto" sin especificar que significa "mejor" en tu contexto.

**Carpetas demasiado amplias:** Dar acceso a ~/Documents completo cuando solo necesitas una subcarpeta.

**No revisar el plan:** Dejar que Claude ejecute sin verificar que entendio correctamente.

**Tareas triviales en Cowork:** Usar Cowork para preguntas que el chat normal resuelve sin consumir cuota extra.

**No hacer backup:** Operaciones masivas sobre archivos sin copia de respaldo.

**Prompts excesivamente largos:** En lugar de escribir un prompt de 500 palabras, pon el contexto en archivos y usa AskUserQuestion. El contexto en archivos se compone; los prompts largos se desechan.

**No usar plugins:** Trabajar como generalista cuando existe un plugin para tu area especifica.

**Cerrar la app durante una tarea:** Mode suspension esta bien — la sesion sobrevive. Pero cerrar la ventana detiene todo.

---

[Volver al indice](../README.md) | [Anterior: Funcionalidades](02-features.md) | [Siguiente: Plugins y conectores](04-plugins-and-connectors.md)
