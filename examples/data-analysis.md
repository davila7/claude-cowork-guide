# Ejemplo: Analisis de datos

## Escenario

Tienes un dataset de ventas en CSV y necesitas un analisis completo con visualizaciones y un Excel ejecutivo.

## Prompt utilizado

```
Analiza el archivo ventas_2025.csv y crea dos entregables:

ENTREGABLE 1: Excel ejecutivo (analisis-ventas.xlsx)
- Tab "Resumen": KPIs principales (total ventas, ticket promedio, crecimiento MoM)
- Tab "Por Region": Tabla pivot con ventas por region y mes, con formato condicional
- Tab "Top Productos": Ranking de productos por revenue, con grafico de barras
- Tab "Tendencias": Graficos de linea mostrando tendencias mensuales
- Tab "Datos Limpios": Dataset limpio y estandarizado

Formulas requeridas: VLOOKUP donde aplique, SUMIFS para agregaciones, formato condicional para resaltar en verde los meses que superaron la meta y en rojo los que no.

ENTREGABLE 2: Dashboard HTML (dashboard-ventas.html)
- Cards con KPIs principales al inicio
- Grafico de lineas: ventas mensuales con linea de tendencia
- Grafico de barras: comparacion por region
- Grafico de pastel: distribucion por categoria de producto
- Tabla interactiva con los datos detallados
- Diseno responsive, colores profesionales

Asunciones:
- Meta mensual: $100,000
- Moneda: USD
- Si hay datos faltantes, documentalos pero no inventes valores
```

## Que hace Claude

1. Lee y explora el dataset (dimensiones, tipos, calidad)
2. Limpia los datos (valores nulos, formatos inconsistentes)
3. Calcula metricas y KPIs
4. Crea el Excel con formulas funcionales y formato
5. Genera el dashboard HTML con graficos interactivos
6. Documenta cualquier problema encontrado en los datos

## Tips

- Proporciona contexto sobre las columnas si los nombres no son descriptivos
- Especifica la meta o benchmark contra el cual comparar
- Pide que documente asunciones y decisiones de limpieza
- Si el dataset es grande (>10k filas), menciona que optimice el rendimiento
- Siempre pide que verifique los calculos con un ejemplo manual

---

[Volver al indice](../README.md)
