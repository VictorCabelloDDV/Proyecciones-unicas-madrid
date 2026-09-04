from datetime import datetime
import os
import re


def limpiar_proyecciones():
  ruta_js = os.path.join("js", "movies.js")
  ahora = datetime.now()
  print(f"[{ahora.strftime('%Y-%m-%d %H:%M:%S')}] Iniciando limpieza...")

  try:
    with open(ruta_js, "r", encoding="utf-8") as f:
      contenido = f.read()
  except FileNotFoundError:
    print(f"Error: No se ha encontrado el archivo en '{ruta_js}'.")
    return

  # 1. Localizamos dónde empiezan y terminan las películas dentro del array de JS
  inicio_array = contenido.find("[")
  fin_array = contenido.rfind("]") + 1

  if inicio_array == -1 or fin_array == 0:
    print("Error: No se ha encontrado el array de películas en js/movies.js")
    return

  prefijo = contenido[:inicio_array]  # Ejemplo: "const movies = \n"
  cuerpo_js = contenido[inicio_array:fin_array]

  total_eliminadas = 0

  # 2. En lugar de parsear todo el archivo de golpe con json.loads,
  # extraemos cada bloque de película individualmente usando un patrón seguro.
  # Esto nos permite aislar el error de la línea 285 y que no afecte al resto.
  # Buscamos cada objeto de película dentro del array principal.

  # Como approach súper robusto: evaluamos o limpiamos mediante un reemplazo inteligente de screenings
  # Vamos a buscar cada película y sus screenings mediante expresiones regulares de bloques.

  # Dividimos el contenido en bloques de películas individuales buscando las llaves principales
  # O mejor aún: recorremos el array mediante un enfoque de sub-cadenas por película.
  # Dividimos por objetos '{' ... '}' dentro del array general
  print("Analizando y limpiando proyecciones pasadas...")

  # Una forma infalible en Python para leer archivos JS tipo base de datos de objetos:
  # Vamos a buscar cada bloque de película (delimitado por { y })
  # Pero para evitar romper nada, usaremos la librería 'demjson3' si estuviera,
  # o aplicaremos un parser nativo por bloques iterativo.

  # Como tu archivo tiene una estructura repetitiva, vamos a buscar cada objeto screening
  # dentro de cada película y comprobar su fecha con una expresión regular.

  def evaluar_screening(match_screening):
    nonlocal total_eliminadas
    # Extraemos el texto del screening
    bloque_screening = match_screening.group(0)

    # Buscamos fecha y hora dentro del screening
    match_date = re.search(r'"date"\s*:\s*"([^"]+)"', bloque_screening)
    match_time = re.search(r'"time"\s*:\s*"([^"]+)"', bloque_screening)

    if not match_date or not match_time:
      return bloque_screening  # Si falta algún dato, lo dejamos tal cual

    fecha_str = f"{match_date.group(1)} {match_time.group(1)}"

    try:
      fecha_screening = datetime.strptime(fecha_str, "%Y-%m-%d %H:%M")
      if fecha_screening >= ahora:
        return bloque_screening  # Se mantiene porque es futura
      else:
        total_eliminadas += 1
        # Intentamos extraer el cine para mostrarlo
        match_cinema = re.search(r'"cinema"\s*:\s*"([^"]+)"', bloque_screening)
        cine_str = match_cinema.group(1) if match_cinema else "Cine desconocido"
        print(f"  -> Eliminada función pasada: Fecha/Hora: {fecha_str} | Cine: {cine_str}")
        return None  # Marcado para borrar
    except ValueError:
      return bloque_screening

  # Vamos a procesar cada bloque de película para limpiar sus screenings de forma segura
  # Encontramos todas las películas buscando sus bloques 'id' y 'screenings'
  # Un enfoque más directo: procesamos el texto buscando los arrays de screenings de cada película.

  # Reemplazamos los bloques de screenings de manera quirúrgica:
  def procesar_pelicula(match_peli):
    bloque_peli = match_peli.group(1)
    
    # Extraemos el título para los logs
    match_title = re.search(r'"title"\s*:\s*"([^"]+)"', bloque_peli)
    titulo_peli = match_title.group(1) if match_title else "Desconocida"

    # Buscamos el array de screenings de esta película
    match_screenings = re.search(r'"screenings"\s*:\s*\[(.*?)\]', bloque_peli, re.DOTALL)
    if not match_screenings:
      return match_peli.group(0)

    contenido_screenings = match_screenings.group(1)
    
    # Si está vacío, no hay nada que limpiar
    if not contenido_screenings.strip():
      return match_peli.group(0)

    # Separamos cada objeto de screening individual ({...})
    # Usamos una búsqueda de objetos delimitados por llaves
    objetos_screenings = re.findall(r'(\{.*?\})', contenido_screenings, re.DOTALL)

    screenings_validos = []
    sesiones_borradas = []

    for obj in objetos_screenings:
      match_date = re.search(r'"date"\s*:\s*"([^"]+)"', obj)
      match_time = re.search(r'"time"\s*:\s*"([^"]+)"', obj)

      if not match_date or not match_time:
        screenings_validos.append(obj)
        continue

      fecha_str = f"{match_date.group(1)} {match_time.group(1)}"
      try:
        fecha_screening = datetime.strptime(fecha_str, "%Y-%m-%d %H:%M")
        if fecha_screening >= ahora:
          screenings_validos.append(obj)
        else:
          nonlocal total_eliminadas
          total_eliminadas += 1
          match_cinema = re.search(r'"cinema"\s*:\s*"([^"]+)"', obj)
          cine_str = match_cinema.group(1) if match_cinema else "Cine desconocido"
          sesiones_borradas.append(f"Cine: {cine_str} | Fecha/Hora: {fecha_str}")
      except ValueError:
        screenings_validos.append(obj)

    if sesiones_borradas:
      print(f"\nSe ha borrado la sesión de la peli: **{titulo_peli}**")
      print("Se han borrado estas sesiones:")
      for sesion in sesiones_borradas:
        print(f"   - {sesion}")

    # Reconstruimos el array de screenings para esta película
    nuevo_array_screenings = "[\n            " + ",\n            ".join(screenings_validos) + "\n        ]" if screenings_validos else "[]"

    # Reemplazamos el array antiguo por el nuevo limpio en el bloque de la peli
    bloque_peli_limpio = bloque_peli.replace(match_screenings.group(0), f'"screenings": {nuevo_array_screenings}')
    return "{" + bloque_peli_limpio + "}"

  # Encontramos cada objeto película principal dentro del array general
  # Dividimos el cuerpo por los objetos de primer nivel
  # Patrón para encontrar cada objeto de película `{ ... }`
  
  # Como patrón seguro, aplicamos el procesador a nivel de objetos de película:
  # Encontramos todas las películas delimitadas por llaves dentro del array
  patron_pelicula = re.compile(r'\{([^\{\}]*(?:\{[^\{\}]*\}[^\{\}]*)*)\}', re.DOTALL)
  
  # Verificamos que contengan la propiedad "id" para asegurarnos de que son las pelis
  def filtro_reemplazo(match):
    texto = match.group(0)
    if '"id":' in texto or '"id" :' in texto:
      return procesar_pelicula(match)
    return texto

  cuerpo_limpio = patron_pelicula.sub(filtro_reemplazo, cuerpo_js)

  # Reconstruimos el archivo final manteniendo el prefijo original intacto
  contenido_final = prefijo + cuerpo_limpio

  with open(ruta_js, "w", encoding="utf-8") as f:
    f.write(contenido_final)

  print(
      f"\n--- Limpieza completada con éxito ---\nSe han eliminado un total de"
      f" {total_eliminadas} proyecciones pasadas en js/movies.js."
  )


if __name__ == "__main__":
  limpiar_proyecciones()