# Primeros pasos con Claude Cowork

## Requisitos previos

**Sistema operativo:** macOS o Windows (x64 solamente). No disponible en web ni movil.

**Plan de Claude:** Pro ($20/mes), Max ($100-200/mes), Team o Enterprise. Cowork no esta disponible en el plan gratuito.

**Conexion a internet:** Requerida durante toda la sesion.

**App:** Descargar la ultima version de Claude Desktop desde [claude.com/download](https://claude.com/download).

## El cambio mental mas importante

> ChatGPT te entreno para escribir mejores prompts. Cowork te entrena para construir mejor contexto. Uno es una habilidad que se deprecia. El otro se acumula.

Cowork no es un chatbot. No es una caja de texto donde escribes y recibes una respuesta. Es un agente que vive en tu escritorio, lee y escribe en carpetas de tu computadora, crea documentos con formato profesional, y cuando no tiene suficiente informacion para hacer algo bien, te pregunta — en lugar de adivinar y darte basura pulida.

## Tus primeros 30 minutos (guia paso a paso)

Bloquea 30 minutos en tu calendario. Esto es todo lo que necesitas.

### Minutos 0-5: Instalar y abrir

1. Ve a [claude.com/download](https://claude.com/download) y descarga la app de escritorio
2. Inicia sesion o crea una cuenta con plan Pro como minimo
3. Abre la app y busca la pestana **Cowork** en la parte superior
4. Haz clic para cambiar al modo Cowork

Al entrar por primera vez, veras un mensaje que dice "Setting up Claude's workspace" — esto es normal y significa que Cowork esta configurando el entorno.

### Minutos 5-10: Crear tus archivos de contexto

Esta es la estrategia mas subestimada de todo Cowork. Deja de pensar en mejores prompts y empieza a pensar en mejores archivos.

Crea una carpeta llamada **"Claude Context"** y dentro de ella, tres archivos markdown:

**`about-me.md`** — Quien eres, que haces, tu rol, como se ve el exito en tu trabajo. Incluye un ejemplo de trabajo del que estes orgulloso.

**`brand-voice.md`** — Como te comunicas. Tus frases. Que suena mal para ti. Ejemplos de escritura que representan tu estilo. Tu tono.

**`working-style.md`** — Como quieres que Claude se comporte. Prefieres que pregunte primero? Salidas cortas o largas? Que formatos de archivo prefieres?

Estos archivos se componen con el tiempo. Cada semana que los refinas, Claude mejora en tu trabajo especifico. Es la inversion mas subestimada de toda esta guia.

> **Tip:** Si prefieres hablar a escribir, usa una herramienta de voz-a-texto para dictar estos archivos. Lo que importa es meter tu contexto en texto — como lo hagas es lo de menos.

### Minutos 10-15: Configurar instrucciones globales

Ve a **Settings > Cowork** en la app de escritorio. Haz clic en "Edit" junto a Global Instructions. Pega lo esencial de tus tres archivos: quien eres, como te comunicas, y como quieres que Claude trabaje contigo. Guarda.

Esta es la inversion unica que te devuelve valor en cada sesion para siempre. Ver [plantilla de instrucciones globales](../templates/global-instructions.md) para ejemplos por rol.

### Minutos 15-20: Tu primera tarea real

Selecciona tu carpeta "Claude Context". Inicia una nueva sesion. Escribe:

```
Lee todos los archivos de esta carpeta. Despues ayudame a [TU TAREA REAL].
Antes de empezar — hazme preguntas de clarificacion para asegurarte de que
vas en la direccion correcta.
```

Observa lo que pasa. Responde las preguntas. Itera. Ten una conversacion. Los mejores primeros trabajos son cosas que ya sabes hacer bien — porque puedes notar inmediatamente si el resultado esta bien o no.

### Minutos 20-25: Instalar un plugin

Haz clic en el boton **"+"** en la barra de chat. Haz clic en **Plugins** y explora la libreria. Elige uno que encaje con tu rol. Despues de instalarlo, escribe "/" para ver los comandos slash que agrega. Prueba uno.

Ver [guia de plugins](04-plugins-and-connectors.md) para la lista completa.

### Minutos 25-30: Conectar una herramienta

Ve a **Settings > Connectors**. Conecta la herramienta que mas uses: Slack, Google Drive, Gmail, Notion, o la que sea. Autenticala.

Despues pidele algo a Claude sobre esa herramienta. Observa como jala datos en vivo en lugar de pedirte que copies y pegues cualquier cosa.

Ese es el momento en que hace clic.

## Instrucciones por carpeta

Para proyectos recurrentes, agrega instrucciones especificas al seleccionar una carpeta. Cada carpeta de cliente puede tener su propio brief que Claude carga automaticamente. Cada sesion con ese proyecto arranca con contexto completo, cada vez.

Ver [plantilla de instrucciones por carpeta](../templates/folder-instructions.md) para ejemplos.

## Tu primer prompt de verificacion

Despues de configurar todo, abre una sesion nueva y pregunta:

```
Antes de que empecemos cualquier trabajo, dime que sabes sobre mi,
como me gusta trabajar, y que preferencias tienes cargadas.
```

Si las instrucciones se cargaron correctamente, Claude las reflejara claramente. Si algo falta o esta mal, corrigelo ahora antes de hacer trabajo real.

## Cosas importantes a recordar

**La app debe permanecer abierta.** Si cierras Claude Desktop, la sesion se detiene. El modo suspension esta bien — la sesion sobrevive. Pero cerrar la ventana mientras el trabajo corre, no.

**Claude pide permiso antes de eliminar.** Nunca borrara archivos permanentemente sin tu confirmacion explicita. Habilita la proteccion contra eliminacion en settings.

**No hay memoria entre sesiones.** Cada sesion empieza desde cero. Los archivos de contexto y las instrucciones globales son tu solucion. Documenta decisiones importantes en archivos que Claude pueda leer.

**Consume mas cuota que el chat.** Tareas multi-paso con lectura de archivos, creacion de documentos y sub-tareas paralelas usan significativamente mas compute. Si estas en Pro y haces uso pesado diario, monitorea Settings > Usage. Si llegas al limite constantemente, Max puede valer la pena.

**Solo desktop.** No hay version movil, no hay sincronizacion entre dispositivos. Si trabajas en multiples computadoras, pon tus archivos de contexto en una carpeta sincronizada en la nube (iCloud, Dropbox, Google Drive) para que al menos tus archivos sean consistentes.

---

[Volver al indice](../README.md) | [Siguiente: Funcionalidades](02-features.md)
