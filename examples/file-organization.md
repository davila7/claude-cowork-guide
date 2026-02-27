# Ejemplo: Organizacion de archivos

## Escenario

Tienes una carpeta de descargas con 200+ archivos mezclados: PDFs, imagenes, documentos Word, hojas de calculo, videos y archivos de codigo.

## Prompt utilizado

```
Organiza todos los archivos de esta carpeta siguiendo estas reglas:

1. Crea subcarpetas por tipo:
   - Imagenes/ (jpg, png, gif, svg, webp, ico)
   - Documentos/ (pdf, docx, txt, md, rtf)
   - Hojas de calculo/ (xlsx, csv, tsv)
   - Presentaciones/ (pptx, ppt)
   - Videos/ (mp4, mov, avi, mkv)
   - Audio/ (mp3, wav, flac)
   - Codigo/ (py, js, html, css, json, yaml)
   - Otros/ (todo lo demas)

2. Renombra cada archivo con el formato:
   YYYY-MM-DD_nombre-original-limpio
   - Usa la fecha de modificacion del archivo
   - Reemplaza espacios por guiones bajos
   - Convierte a minusculas
   - Elimina caracteres especiales

3. Genera un reporte en markdown (organizacion-reporte.md) con:
   - Total de archivos procesados
   - Cantidad por categoria
   - Lista de archivos renombrados (nombre anterior → nombre nuevo)
   - Archivos que no se pudieron procesar (si los hay)

4. NO elimines ningun archivo.
```

## Que hace Claude

1. Escanea la carpeta completa y cataloga todos los archivos
2. Crea la estructura de subcarpetas
3. Mueve y renombra cada archivo segun las reglas
4. Genera el reporte de resumen
5. Te muestra el resultado final

## Resultado esperado

```
Descargas/
|-- Imagenes/
|   |-- 2025-11-15_foto-equipo.jpg
|   |-- 2025-12-01_logo-proyecto.png
|-- Documentos/
|   |-- 2025-10-20_contrato-servicio.pdf
|   |-- 2025-11-30_notas-reunion.docx
|-- Hojas de calculo/
|   |-- 2025-12-15_presupuesto-q1.xlsx
|-- ...
|-- organizacion-reporte.md
```

## Tips

- Siempre haz backup antes de reorganizar archivos masivamente
- Empieza con una carpeta pequena para probar las reglas
- Se explicito sobre lo que NO debe hacer (eliminar, modificar contenido)
- Revisa el reporte despues para confirmar que todo quedo bien

---

[Volver al indice](../README.md)
