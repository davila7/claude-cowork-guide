# Casos de uso y ejemplos

## Gestion de archivos

### Organizar carpeta de descargas
> "Organiza mi carpeta de descargas por tipo de archivo (imagenes, documentos, hojas de calculo, videos, codigo). Crea subcarpetas para cada tipo. Dentro de documentos, separa por extension (pdf, docx, txt). Renombra cada archivo con el formato YYYY-MM-DD al inicio. No elimines nada."

### Procesar recibos en reporte de gastos
> "En esta carpeta hay fotos de recibos de gastos. Extrae la informacion de cada uno (fecha, proveedor, monto, categoria) y crea un Excel con todos los datos organizados. Agrega una columna de totales por categoria y un grafico de pastel con la distribucion de gastos."

### Renombrado masivo
> "Renombra todos los archivos de esta carpeta siguiendo este patron: YYYY-MM-DD_nombre-descriptivo-en-minusculas. Usa la fecha de modificacion del archivo. Reemplaza espacios por guiones bajos."

## Investigacion y sintesis

### Reporte de investigacion
> "Investiga las tendencias actuales en inteligencia artificial para retail. Busca al menos 5 fuentes recientes. Crea un documento Word con: resumen ejecutivo (1 pagina), tendencias principales con datos de soporte, casos de estudio relevantes, y recomendaciones para una empresa mediana. Tono profesional, dirigido a C-level."

### Analisis de transcripciones
> "Tengo 5 archivos de texto con transcripciones de entrevistas a usuarios. Extrae los temas principales que se repiten, agrupa los hallazgos por categoria, identifica citas textuales relevantes y crea un reporte en formato markdown con las conclusiones."

### Compilacion de notas
> "Lee todos los archivos .md de esta carpeta (son notas sueltas sobre el proyecto X) y crea un documento unico y organizado. Agrupa por tema, elimina duplicados, y genera un indice navegable."

## Documentos y presentaciones

### Excel con analisis
> "Crea un Excel a partir de los datos del archivo datos-ventas.csv. Agrega: tabla pivot por region y producto, formulas VLOOKUP para cruzar con el archivo de metas, formato condicional que resalte en rojo las regiones que no cumplieron meta, y un grafico de barras comparativo."

### Presentacion desde notas
> "Transforma mis notas del archivo reuniones.md en una presentacion PowerPoint de 10 slides. Incluye: slide de titulo, agenda, 6 slides de contenido principal, slide de proximos pasos, y slide de cierre. Usa un diseno profesional con colores azul y blanco."

### Documento formal
> "Crea un documento Word con membrete para la empresa 'TechCo'. Incluye: logo placeholder, titulo del documento, tabla de contenido automatica, 4 secciones con sub-secciones, numeracion de paginas, y formato profesional con fuentes serif."

## Datos y analisis

### Limpieza de datos
> "El archivo datos.csv tiene problemas: columnas desordenadas, valores nulos, filas duplicadas y formatos de fecha inconsistentes. Limpia los datos, estandariza el formato de fechas a YYYY-MM-DD, elimina duplicados, marca los valores nulos, y exporta como un Excel limpio con un tab adicional que documente los cambios realizados."

### Visualizacion
> "Analiza el dataset ventas_2025.xlsx. Identifica outliers, calcula tendencias mensuales, y crea una pagina HTML interactiva con graficos de lineas para tendencias, scatter plot para correlaciones, y una tabla resumen con los KPIs principales."

### Comparacion de archivos
> "Compara los dos archivos Excel (presupuesto_v1.xlsx y presupuesto_v2.xlsx). Identifica todas las diferencias: celdas modificadas, filas agregadas o eliminadas, y cambios en formulas. Genera un reporte con las diferencias resaltadas."

## Automatizacion (tareas programadas)

### Reporte diario
> "/schedule todos los dias a las 8am: Lee los archivos nuevos en la carpeta 'inbox', genera un resumen en markdown con los puntos clave de cada documento, y guardalo en la carpeta 'resumenes-diarios' con la fecha de hoy."

### Monitoreo semanal
> "/schedule cada lunes a las 9am: Revisa mi calendario de la semana, lista las reuniones con sus horarios, y crea un documento con la agenda semanal incluyendo tiempo de preparacion sugerido para cada reunion."

## Workflows multi-herramienta

### Investigacion + Documento + Presentacion
1. Investiga un tema en la web
2. Compila hallazgos en un documento Word
3. Genera una presentacion ejecutiva a partir del documento

### Email + Calendario + Reporte
1. Revisa emails recientes sobre un proyecto (via Gmail connector)
2. Cruza con eventos del calendario (via Google Calendar connector)
3. Genera un status report con actividades y proximos pasos

---

[Volver al indice](../README.md) | [Anterior: Plugins y conectores](04-plugins-and-connectors.md) | [Siguiente: Troubleshooting](06-troubleshooting.md)
