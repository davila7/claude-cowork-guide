# Prompts probados para tareas comunes

Prompts listos para copiar, pegar y adaptar.

---

## Organizacion de archivos

### Organizar por tipo
```
Organiza todos los archivos de esta carpeta en subcarpetas por tipo:
- Imagenes (jpg, png, gif, svg, webp)
- Documentos (pdf, docx, txt, md)
- Hojas de calculo (xlsx, csv)
- Presentaciones (pptx)
- Otros (todo lo demas)
No elimines nada. Muestra un resumen de cuantos archivos moviste a cada carpeta.
```

### Limpiar duplicados
```
Analiza esta carpeta y encuentra archivos duplicados (mismo contenido o nombre muy similar).
Genera un reporte en markdown listando los duplicados encontrados con sus rutas.
NO elimines nada — solo reporta. Yo decidire cuales borrar.
```

## Creacion de documentos

### Reporte ejecutivo
```
Crea un documento Word con un reporte ejecutivo basado en [fuente de datos].
Estructura:
1. Resumen ejecutivo (maximo media pagina)
2. Hallazgos principales (3-5 puntos con datos de soporte)
3. Analisis detallado por [categoria/region/tema]
4. Recomendaciones (accionables y priorizadas)
5. Proximos pasos con responsables y fechas sugeridas
Tono: Profesional, dirigido a [audiencia]. Maximo [X] paginas.
```

### Presentacion desde contenido existente
```
Transforma el contenido del archivo [nombre.md] en una presentacion PowerPoint.
Lineamientos:
- Maximo [N] slides
- Poco texto por slide (bullets cortos, no parrafos)
- Incluye slide de titulo, agenda, contenido y cierre
- Diseno limpio con colores [especificar]
- Agrega notas del presentador con los puntos de conversacion
```

## Analisis de datos

### Exploracion inicial
```
Analiza el archivo [datos.csv/xlsx] y genera un reporte exploratorio:
1. Dimensiones del dataset (filas, columnas)
2. Tipos de datos por columna
3. Valores nulos o faltantes (cantidad y porcentaje)
4. Estadisticas descriptivas (media, mediana, min, max, desviacion)
5. Distribucion de variables categoricas
6. Posibles outliers
7. Correlaciones entre variables numericas
Exporta el reporte como HTML con graficos incluidos.
```

### Dashboard de metricas
```
Con los datos de [archivo], crea una pagina HTML interactiva que muestre:
- KPIs principales en cards grandes al inicio
- Graficos de tendencia temporal (lineas)
- Comparacion entre [categorias] (barras)
- Tabla detallada con los datos filtrable
Usa colores profesionales. Que sea responsive.
```

## Investigacion

### Sintesis de multiples fuentes
```
Investiga sobre [tema] usando busqueda web. Necesito:
- Al menos 5 fuentes recientes y confiables
- Sintesis de los puntos principales (no copia textual)
- Perspectivas contrastantes si las hay
- Datos cuantitativos cuando esten disponibles
Formato: Markdown con secciones claras y fuentes citadas al final.
```

## Email y comunicacion

### Redactar email profesional
```
Redacta un email profesional con estos parametros:
- De: [tu nombre]
- Para: [destinatario y su rol]
- Proposito: [que quieres lograr]
- Contexto: [background relevante]
- Tono: [formal/semiformal/casual]
- Largo: [corto/medio]
- Call to action: [que quieres que haga el destinatario]
```

## Tareas programadas

### Resumen semanal
```
/schedule cada viernes a las 5pm:
Revisa todos los archivos creados o modificados esta semana en esta carpeta.
Genera un resumen en markdown con:
- Archivos nuevos creados (nombre y descripcion breve)
- Archivos modificados (que cambio)
- Estadisticas: total de archivos, espacio usado
Guarda en /resumenes-semanales/YYYY-MM-DD-resumen.md
```

---

[Volver al indice](../README.md)
