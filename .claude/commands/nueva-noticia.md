# Skill: Nueva Noticia del Laboratorio ProfundaMente

## Objetivo
Crear una nueva noticia para el sitio ProfundaMente. El proceso genera una entrada en `src/lib/mockData.ts` con `category: 'news'`. La tarjeta aparece automáticamente en `/noticias/` (vía `NewsCard`) y la página de detalle en `/noticias/[slug]/` (vía la ruta dinámica existente). No es necesario crear ningún archivo nuevo de página o componente.

---

## PASO 1 — Recolección de información

Si el usuario invocó el comando sin argumentos o con información incompleta, conduce una entrevista conversacional en este orden. Solicita un bloque a la vez; no presentes todos los campos de golpe.

### Bloque A — Identidad básica
Pregunta por:
- **Título** completo de la noticia
- **Fecha** de publicación (acepta "hoy", una fecha en cualquier formato legible, o ISO). Convierte siempre a formato `YYYY-MM-DDTHH:mm:ssZ`.

### Bloque B — Resumen
- **Excerpt** (1–2 oraciones concisas que aparecerán en la tarjeta de la lista de noticias). Máximo 180 caracteres recomendado.

### Bloque C — Cuerpo de la noticia
- **Cuerpo completo** (`body_content`): texto que se mostrará en la página de detalle `/noticias/[slug]/`. Puede ser extenso. Separa párrafos con `\n\n`. Si el usuario lo comparte en el chat en texto plano, respétalo tal cual, solo normaliza los saltos de línea.

### Bloque D — Imagen Hero
Pregunta si el usuario tiene una imagen:
- **Sí, aporta URL o ruta local**: úsala directamente.
  - Rutas locales deben empezar con `/images/` y corresponder a un archivo en `public/images/`. Si el archivo no existe ahí, avisa al usuario que debe copiarlo.
  - URLs externas deben ser de dominios ya allowlisted en `next.config.ts` (`lh3.googleusercontent.com` o `images.unsplash.com`). Si el usuario da otra URL, advierte y sugiere usar Unsplash.
- **No tiene / "auto"**: elige una URL de Unsplash temáticamente relevante al tema de la noticia. Prefiere fotos de entornos académicos, médicos, o de laboratorio. Formato: `https://images.unsplash.com/photo-XXXXXXXXXXXXXXXXX?w=800&auto=format&fit=crop`

### Bloque E — Visual e ícono
- **Logo icon**: nombre de un ícono de Material Symbols. Sugiere 3 opciones según el tema y pide confirmación. Ejemplos útiles para noticias: `event`, `emoji_events`, `science`, `biotech`, `article`, `campaign`, `lab_research`, `military_tech`, `workspace_premium`, `school`, `group`, `diversity_3`.

### Bloque F — Hashtags y redes
- **Tags**: array de strings sin `#`. Ejemplo: `['IA', 'FUCS', 'Investigación']`. Sugiere tags basados en el contenido si el usuario no los tiene claros.
- **Redes sociales** (opcional): si el usuario quiere añadir links a redes, pide: plataforma, URL e ícono Material Symbol. Si no aplica, omite el campo `social_links` del objeto.
- **¿Es noticia destacada?** (`is_featured: true`): solo para hitos mayores (premios, publicaciones de alto impacto, lanzamientos importantes). Por defecto `false`.

---

## PASO 2 — Generación del objeto

### Cómputo del ID
Lee el archivo `src/lib/mockData.ts` y encuentra el valor numérico más alto entre todos los `id` existentes. El nuevo `id` es ese valor + 1, como string.

### Generación del slug
Algoritmo en orden:
1. Minúsculas
2. Sustituir: `á→a`, `é→e`, `í→i`, `ó→o`, `ú→u`, `ü→u`, `ñ→n`
3. Reemplazar cualquier carácter que no sea `[a-z0-9 ]` por espacio
4. Reemplazar uno o más espacios por un guion `-`
5. Recortar guiones al inicio y al final
6. Limitar a 60 caracteres (cortar en la última palabra completa)

Ejemplo: `"Premio ASH 2025 — Logro Internacional"` → `premio-ash-2025-logro-internacional`

### Estructura del objeto

```typescript
{
  id: '<SIGUIENTE_ID_STRING>',
  title: '<TÍTULO>',
  slug: '<slug-generado>',
  excerpt: '<RESUMEN>',
  body_content: `<CUERPO CON \n\n ENTRE PÁRRAFOS>`,
  category: 'news',
  tags: ['<TAG1>', '<TAG2>'],
  published_at: '<ISO_STRING>',
  base_relevance: 90,
  views_count: 0,
  is_active: true,
  is_featured: false,  // o true si el usuario confirmó hito mayor
  solution_url: null,
  average_rating: 0,
  rating_count: 0,
  image_url: '<URL_O_RUTA>',
  logo_icon: '<MATERIAL_ICON>',
  // Solo si el usuario proporcionó redes:
  social_links: [
    { platform: '<PLATAFORMA>', url: '<URL>', icon: '<MATERIAL_ICON>' }
  ]
}
```

**No incluyas** los campos `social_links` si el usuario no proporcionó redes sociales; no los añadas como array vacío.

---

## PASO 3 — Inserción en mockData.ts

Inserta el nuevo objeto como **primer elemento** del array `mockContent` (inmediatamente después del corchete de apertura `[`). Esto lo pone al tope de la lista cronológica.

**Estilo de código obligatorio**:
- Usa comillas simples `'` para strings cortos (título, slug, tags, etc.)
- Usa template literal `` ` `` solo para `body_content` si contiene saltos de línea `\n`
- No añadas comentarios al objeto
- Mantén la coma al final del objeto antes del siguiente elemento

---

## PASO 4 — Verificación

1. Corre `npm run build` desde el directorio `profundamente-web/`.
2. Si el build falla, muestra el error al usuario, identifica la causa y corrígela antes de continuar.
3. Si el build pasa (48+ páginas generadas), confirma al usuario.

---

## PASO 5 — Commit y despliegue

Haz commit solo si el build pasó:

```bash
git add src/lib/mockData.ts
git commit -m "Add news: <título-corto>"
git push origin main
```

El GitHub Actions desplegará automáticamente. Informa al usuario:
- **URL de la tarjeta** en la lista: `https://jjsprockel.github.io/profundamente-web/noticias/`
- **URL de la página de detalle**: `https://jjsprockel.github.io/profundamente-web/noticias/<slug>/`

---

## Reglas de estilo adicionales

- **Tono del excerpt**: neutro-informativo, en tercera persona o impersonal.
- **Imagen Unsplash auto**: no uses la misma URL que ya existe en mockData. Verifica con grep antes de proponer.
- Si el usuario pide "pausar" o "guardar para después", guarda el borrador del objeto como código en el chat sin escribir al archivo.
- Si hay duda sobre si una URL de imagen es válida, avisa al usuario antes del build.
