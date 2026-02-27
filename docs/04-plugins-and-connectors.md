# Plugins y conectores

## MCP: Model Context Protocol

MCP es el protocolo abierto de Anthropic para conectar IA con herramientas externas. Es el estandar que permite a Claude comunicarse con servicios como Gmail, Google Calendar, Slack, Linear y otros. Cada conector se autentica de forma segura a traves de OAuth o API keys.

## Plugins: de generalista a especialista

Sin un plugin, Claude Cowork es un generalista brillante. Puede escribir, investigar, analizar, organizar y construir. Pero no conoce la terminologia de tu industria, el workflow de tu equipo, ni los outputs especificos que tu rol requiere.

Los plugins cambian eso. Son paquetes de skills, comandos slash, sub-agentes y conectores MCP disenados para funciones de trabajo especificas.

### Plugins oficiales de Anthropic

Anthropic lanzo plugins para estas areas en enero 2026 y continua expandiendo la libreria:

| Plugin | Para quien | Que hace |
|--------|-----------|----------|
| **Productivity** | Cualquiera | Gestion de tareas, calendarios, workflows diarios |
| **Marketing** | Marketers | Drafts de contenido, planificacion de campanas, voz de marca |
| **Sales** | Vendedores | Investigacion de cuentas, prep de llamadas, outreach, battlecards |
| **Finance** | Finanzas | Modelado financiero, analisis, reportes |
| **Data Analysis** | Analistas | SQL, dashboards, exploracion de datasets, deteccion de anomalias |
| **Legal** | Abogados | Revision de contratos, investigacion legal, drafting |
| **Product Management** | PMs | Specs, roadmaps, user stories |
| **Customer Support** | Soporte | Manejo de tickets, drafts de respuestas |
| **Enterprise Search** | Todos | Busqueda a traves de herramientas conectadas |
| **Biology Research** | Investigadores | Literatura cientifica y datos |
| **HR** | Recursos humanos | Gestion de personal, procesos |
| **Design** | Disenadores | Workflows de diseno |
| **Engineering** | Ingenieros | Documentacion tecnica, procesos |
| **Operations** | Operaciones | Gestion operativa |

### Como instalar un plugin

1. Abre Claude Cowork
2. Haz clic en el boton **"+"** en la barra de chat, luego en **"Plugins"** para explorar la libreria
3. O ve a [claude.com/plugins](https://claude.com/plugins) para ver todo lo disponible
4. Elige el plugin y haz clic en **Install**
5. Escribe **"/"** en cualquier chat de Cowork para ver los comandos slash que agrego

### Primeros prompts por plugin

**Despues de instalar Productivity:**
```
/productivity:start Revisemos que necesito hacer hoy y configuremos mi lista de tareas.
```

**Despues de instalar Marketing:**
```
/marketing:draft-content Escribe un post de LinkedIn sobre [tema]. Usa el tono
de mi archivo brand-voice.md. Audiencia: [audiencia]. Objetivo: [que quiero
que la gente haga].
```

**Despues de instalar Data Analysis:**
```
/data:explore Tengo un CSV en esta carpeta. Dame un resumen de que contiene,
senala anomalias, y sugiere tres analisis que vale la pena correr.
```

**Despues de instalar Sales:**
```
/sales:account-research Investigame la empresa [nombre]. Necesito: tamano,
industria, competidores, noticias recientes, y 3 puntos de conversacion
para una llamada de discovery.
```

El output con un plugin activo es notablemente mas estructurado y opinionado que un prompt generico. El plugin sabe como se ve un buen output para tu funcion.

### Estructura de un plugin

```
mi-plugin/
|-- plugin.json          # Manifiesto del plugin
|-- .mcp.json            # Conexiones de herramientas MCP
|-- commands/            # Comandos slash
|-- skills/              # Skills auto-activados
```

### Personalizar plugins

Puedes adaptar cualquier plugin a tus necesidades:

- **Cambiar conectores:** edita `.mcp.json` para apuntar a tu stack de herramientas
- **Agregar contexto de empresa:** incluye tu terminologia, estructura organizacional y procesos en los archivos de skills
- **Ajustar workflows:** modifica los flujos para que coincidan con como tu equipo realmente trabaja

---

## Connectors: integraciones en vivo

### Como conectar herramientas

1. Ve a **Settings > Connectors** en Claude Desktop
2. Explora el directorio (50+ integraciones)
3. Haz clic en un conector y presiona **"Add"**
4. Autenticate con la herramienta. Listo.

Solo se hace una vez. Despues, Claude accede a datos en vivo de esa herramienta en cada sesion.

### Primeros prompts con connectors

**Despues de conectar Slack:**
```
Busca mis mensajes de Slack de los ultimos 7 dias y dame un resumen de
todo lo que necesito dar seguimiento. Organiza por urgencia.
```

**Despues de conectar Google Drive:**
```
Encuentra el documento mas reciente sobre [nombre del proyecto] en mi Drive.
Leelo y dime las tres cosas mas importantes que necesito saber.
```

**Despues de conectar Gmail:**
```
Revisa mis emails no leidos de hoy. Clasifícalos por prioridad y dime
cuales requieren respuesta inmediata.
```

**Despues de conectar Google Calendar:**
```
Muestrame mi agenda de manana. Identifica conflictos de horario y
sugiere un orden de prioridad para mis reuniones.
```

### Tipos de conexion

**Web connectors:** funcionan en todas partes, incluyendo claude.ai. Pueden ser built-in (por Anthropic) o custom (HTTP Streamable + OAuth).

**Desktop connectors:** MCP servers locales empaquetados por Anthropic para instalacion con un clic.

**Custom MCP servers:** configurados manualmente editando un archivo JSON de configuracion.

### Conectores disponibles (febrero 2026)

**Productividad:** Google Workspace (Calendar, Drive, Gmail), Slack, Notion, Asana, Figma

**Ventas y CRM:** Apollo, Clay, Outreach, Common Room

**Legal:** DocuSign, LegalZoom, Harvey

**Finanzas y datos:** FactSet, MSCI, LSEG, S&P Global

**Marketing y contenido:** WordPress, Similarweb

**Desarrollo:** Linear, GitHub

Todos los conectores son gratuitos. Solo necesitas un plan pago de Claude y una suscripcion activa al servicio que quieres conectar.

### Permisos por conector

Para cada conector, configura herramientas individuales con tres niveles:

- **Allow:** se ejecuta automaticamente sin preguntar
- **Ask:** confirma contigo antes de ejecutar
- **Block:** nunca se ejecuta

Ejemplo practico: puedes permitir que Claude busque en tus emails (Allow) pero requerir confirmacion para enviar (Ask) o bloquear que borre emails (Block).

---

## Enterprise: Marketplaces privados

Los administradores de Team y Enterprise pueden:

- Crear marketplaces de plugins privados para su organizacion
- Usar repositorios privados de GitHub como fuente de plugins (beta privado)
- Provisionar plugins por usuario
- Configurar auto-instalacion de plugins para el equipo
- Crear plugins especializados por departamento (HR, legal, finanzas, etc.)

Todo se gestiona desde el menu **Customize** que unifica plugins, skills y conectores.

## Recursos

- [Repositorio open source de plugins](https://github.com/anthropics/knowledge-work-plugins)
- [Blog: Cowork and plugins across enterprise](https://claude.com/blog/cowork-plugins-across-enterprise)
- [Directorio de plugins](https://claude.com/plugins)

---

[Volver al indice](../README.md) | [Anterior: Buenas practicas](03-best-practices.md) | [Siguiente: Casos de uso](05-use-cases.md)
