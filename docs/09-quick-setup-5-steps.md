# Quick Setup: Claude Cowork en 5 Pasos

> La versión rápida. Para la guía completa, ve [The Definitive Setup Guide](00-definitive-setup-guide.md).

---

## Paso 1: Instalar y abrir Cowork

1. Descarga Claude Desktop desde [claude.com/download](https://claude.com/download)
2. Inicia sesión con tu cuenta de pago (Pro, Max, Team o Enterprise)
3. Haz clic en la pestaña **"Cowork"** en el selector de modo (arriba de la ventana)

**Requisitos:** macOS (universal) o Windows (x64). Conexión a internet activa. No cierres la app durante una tarea — suspender está bien, cerrar no.

---

## Paso 2: Crear tu workspace y archivos de contexto

Crea una carpeta dedicada para Cowork:

```
~/Claude-Workspace/
├── context/          # Tus archivos de contexto permanentes
├── projects/         # Carpetas de proyectos activos
└── outputs/          # Donde Claude entrega los resultados
```

Dentro de `context/`, crea **3 archivos `.md`**:

| Archivo | Qué incluir |
|---------|-------------|
| `about-me.md` | Tu nombre, rol, empresa, qué haces, ejemplo de tu trabajo |
| `brand-voice.md` | Tu tono, frases que usas, frases que odias, ejemplos reales de tu escritura |
| `working-preferences.md` | Cómo quieres que Claude trabaje: formato de salida, convenciones, guardrails |

Estos archivos mejoran con el tiempo. Después de cada sesión donde Claude falló, actualízalos.

---

## Paso 3: Configurar instrucciones globales

Ve a **Settings > Cowork > Edit Global Instructions** y escribe:

```
Soy [Nombre], [Rol] en [Empresa]. Trabajo en [dominio].

Comunicación: Directa, concisa, sin relleno. Markdown para borradores, .docx para entregables.

Proceso: Siempre haz preguntas antes de ejecutar tareas complejas. Muestra tu plan. Explica tus supuestos.

Seguridad:
- Nunca borres archivos sin mi confirmación explícita
- Nunca modifiques archivos fuera de la carpeta de output
- Si no estás seguro de algo, pregunta en vez de asumir
```

---

## Paso 4: Instalar un plugin y conectar una herramienta

**Plugin:** En Cowork, click en **"Customise"** > **"Browse plugins"**. Instala:
- **Productivity** (útil para todos) + uno específico de tu rol (Sales, Marketing, Data Analysis, etc.)

**Conector:** Ve a **Settings > Connectors** y conecta la herramienta que más usas (Slack, Google Drive o Notion son los de mayor impacto).

Escribe `/` en cualquier chat de Cowork para ver los slash commands disponibles.

---

## Paso 5: Ejecutar tu primera tarea

Primero, verifica que tu setup funciona:

```
Lee todos los archivos en la carpeta context. Después dime:
1. Qué sabes sobre mí
2. Cómo prefiero trabajar
3. Qué preferencias permanentes conoces

No hagas ningún otro trabajo todavía.
```

Si la respuesta refleja tus archivos correctamente, lanza tu primera tarea real:

```
Quiero [HACER X] para que [Y MEJORE].

Primero, lee todos los archivos relevantes en esta carpeta.
Antes de ejecutar, hazme preguntas para alinear el enfoque.
Solo empieza a trabajar cuando estemos de acuerdo en el plan.
```

Buenos primeros tasks: organizar una carpeta desordenada, crear un reporte desde notas sueltas, armar un spreadsheet desde recibos, o redactar un documento basado en templates existentes.

---

## Resumen visual

```
┌─────────────────────────────────────────────────┐
│  1. INSTALAR        claude.com/download         │
│                     → Abrir pestaña Cowork      │
│                                                 │
│  2. WORKSPACE       ~/Claude-Workspace/         │
│                     → about-me.md               │
│                     → brand-voice.md            │
│                     → working-preferences.md    │
│                                                 │
│  3. INSTRUCCIONES   Settings > Cowork           │
│                     → Quién eres + cómo trabajar │
│                     → Guardrails de seguridad   │
│                                                 │
│  4. PLUGINS +       Customise > Browse plugins  │
│     CONECTORES      Settings > Connectors       │
│                                                 │
│  5. PRIMERA TAREA   Verificar contexto          │
│                     → Lanzar tarea real         │
└─────────────────────────────────────────────────┘
```

---

[Back to index](../README.md) | [Complete reference: The Definitive Setup Guide](00-definitive-setup-guide.md) | [Next: Getting started](01-getting-started.md)
