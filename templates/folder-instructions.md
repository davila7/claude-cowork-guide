# Plantilla: Instrucciones por carpeta

Agrega estas instrucciones al seleccionar una carpeta en Cowork para dar contexto especifico al proyecto.

---

## Plantilla generica

```
Proyecto: [Nombre del proyecto]
Descripcion: [Una linea describiendo de que trata]
Estructura de carpetas:
  - /docs → Documentacion del proyecto
  - /data → Archivos de datos (csv, xlsx)
  - /output → Archivos generados por Claude
  - /assets → Imagenes, logos, recursos visuales
Reglas:
  - No modificar archivos en /data (son fuentes originales)
  - Guardar toda salida en /output
  - Mantener un log de cambios en /output/changelog.md
```

## Proyecto de investigacion

```
Proyecto: Investigacion sobre [tema]
Estado: [En curso / Fase de recopilacion / Fase de analisis]
Fuentes clave: [listar archivos o URLs relevantes]
Formato de salida: Documentos en markdown con citas y fuentes.
Estructura de carpetas:
  - /fuentes → Material recopilado
  - /notas → Notas y apuntes
  - /entregables → Documentos finales
Criterio de calidad: Toda afirmacion debe estar respaldada por al menos una fuente.
```

## Proyecto de desarrollo de producto

```
Proyecto: [Nombre del producto]
Fase: [Discovery / Definition / Development / Launch]
Equipo: [Roles involucrados]
Archivos clave:
  - PRD.md → Documento de requerimientos (NO modificar sin confirmar)
  - roadmap.xlsx → Timeline del proyecto
  - research/ → Hallazgos de investigacion de usuarios
Convenciones:
  - Nombres de archivo: YYYY-MM-DD-tipo-descripcion
  - Formato de documentos: Markdown para borradores, DOCX para versiones finales
```

## Carpeta de finanzas

```
Proyecto: Gestion financiera [periodo]
Archivos sensibles: Tratar toda la informacion como confidencial.
Datos:
  - /facturas → Facturas recibidas (PDF)
  - /reportes → Reportes mensuales
  - /presupuesto → Archivos de presupuesto
Reglas:
  - No eliminar ningun archivo bajo ninguna circunstancia
  - Verificar calculos con formulas, no hardcodear valores
  - Formato de moneda: USD con 2 decimales
  - Formato de fecha: DD/MM/YYYY para documentos, YYYY-MM-DD para nombres de archivo
```

---

[Volver al indice](../README.md)
