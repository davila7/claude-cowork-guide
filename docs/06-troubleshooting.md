# Troubleshooting y limitaciones honestas

## Donde Cowork se queda corto

Cowork es la mejor herramienta de IA para trabajo de conocimiento que existe hoy. No es perfecta. Estas son las limitaciones reales.

### Sin memoria entre sesiones

Cada sesion nueva de Cowork empieza completamente en blanco. Sin conocimiento de quien eres. Sin memoria de ayer. Nada.

**Workaround:** funciona bien — manten tu contexto en archivos markdown (about-me.md, brand-voice.md, working-style.md) y configura instrucciones globales solidas. Pero vas a sentir este gap, especialmente en proyectos largos. Documenta decisiones importantes en archivos que Claude pueda leer.

### Las tareas se detienen si cierras la app

Cowork corre como sesion activa dentro de Claude Desktop. Si cierras la app, la tarea se detiene a mitad de ejecucion.

**Workaround:** el modo suspension esta bien — la sesion sobrevive. Solo no cierres la ventana mientras el trabajo corre.

### El uso de cuota va mas rapido que el chat

Tareas complejas de Cowork consumen mas cuota que el chat normal. Tareas multi-paso con lectura de archivos, creacion de documentos y sub-tareas paralelas usan significativamente mas compute.

**Workaround:** si estas en Pro ($20/mes) y haces uso pesado diario, monitorea Settings > Usage. Si llegas al limite constantemente, Max ($100-200/mes) puede valer la pena.

### Solo desktop, sin movil, sin sincronizacion

Cowork existe solo en la app de escritorio. No hay iPhone, no hay version web, no hay sincronizacion entre tu laptop y tu desktop.

**Workaround:** pon tus archivos de contexto en una carpeta sincronizada en la nube (iCloud, Dropbox, Google Drive) para que al menos tus archivos sean consistentes.

### No genera imagenes

Para fotos, ilustraciones o arte visual, Cowork no es tu herramienta. Usa herramientas especializadas para imagenes (Midjourney, DALL-E, Gemini Imagen) y Cowork para documentos, hojas de calculo, presentaciones e investigacion. Herramientas diferentes para trabajos diferentes.

### Es un research preview

Anthropic es explicito: la seguridad de agentes para Cowork sigue en desarrollo activo. Es solido para un preview, pero tratalo acorde. No lo corras sobre archivos que no puedas permitirte que se modifiquen sin confirmacion. Habilita la proteccion contra eliminacion en settings y revisa planes antes de ejecutar sobre cosas sensibles.

---

## Problemas comunes y soluciones

### "Setting up Claude's workspace"

**Que es:** mensaje esperado que indica que Cowork esta actualizando a la ultima version del entorno.

**Solucion:** espera a que termine. Si tarda demasiado, cierra y reabre Claude Desktop.

### La tarea se detuvo inesperadamente

**Causa probable:** la app se cerro, la computadora entro en suspension profunda, o se perdio la conexion a internet.

**Solucion:** asegurate de que la app permanezca abierta y tu computadora no entre en suspension durante la ejecucion. Verifica tu conexion a internet. El modo suspension ligero (cerrar la tapa del laptop brevemente) generalmente esta bien; suspension profunda o apagar, no.

### No encuentro los archivos de salida

**Verificaciones:**

- Confirma que otorgaste permisos de acceso a la carpeta correcta
- Revisa la ubicacion que Claude indico al completar la tarea
- Busca en la carpeta seleccionada y sus subcarpetas
- Claude a veces crea subcarpetas nuevas — revisa la estructura

### Claude no puede ver mis archivos

**Solucion:** asegurate de haber seleccionado la carpeta correcta al iniciar la sesion. Claude solo puede acceder a las carpetas que explicitamente le otorgues. Si cambiaste de carpeta a mitad de sesion, puede que necesites reiniciar.

### Un conector no funciona

**Verificaciones:**

- Confirma que tienes una suscripcion activa al servicio (Gmail, Calendar, etc.)
- Verifica que la autenticacion OAuth no haya expirado
- Revisa los permisos del conector en Settings (Allow/Ask/Block)
- Intenta desconectar y reconectar el conector
- Algunos conectores requieren permisos especificos del lado del servicio

### Claude malinterpreto mis instrucciones

**Prevencion:**

- Se mas especifico en tus prompts (ver [buenas practicas](03-best-practices.md))
- Usa AskUserQuestion: agrega "NO empieces todavia, hazme preguntas primero"
- Revisa siempre el plan antes de permitir la ejecucion
- Incluye restricciones explicitas ("no elimines nada", "no modifiques los archivos originales")
- Haz backup antes de operaciones masivas

### Las tareas programadas no se ejecutaron

**Causa:** las tareas programadas solo corren mientras la computadora esta encendida y la app de Claude Desktop esta abierta.

**Solucion:** asegurate de que ambas condiciones se cumplan al momento programado. Revisa la seccion "Scheduled" en la barra lateral.

### El output es generico y no suena como yo

**Causa:** falta de contexto. Claude esta trabajando como generalista.

**Solucion:**

- Crea tus archivos de contexto (about-me.md, brand-voice.md, working-style.md)
- Configura instrucciones globales con tus preferencias
- Instala el plugin de tu area de trabajo
- Incluye ejemplos de outputs anteriores que te gusten en la carpeta

### Claude no puede hacer push a GitHub / conectarse a servicios

**Causa:** probablemente no tienes el conector correspondiente habilitado.

**Solucion:** ve a Settings > Connectors y busca el servicio. Si existe como conector, agregalo y autenticate. Si no existe como conector oficial, puedes configurar un MCP server custom.

## Dar feedback

Si encuentras un problema o tienes una sugerencia, usa el boton de feedback disponible en la interfaz de Cowork. Anthropic usa este feedback activamente para mejorar el producto durante el research preview.

---

[Volver al indice](../README.md) | [Anterior: Casos de uso](05-use-cases.md)
