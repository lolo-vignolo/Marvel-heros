- App realizada con Next.js
- run dev -> npm run dev

Explicacón:

- Pagina 1 - Login para entrar a la app
- Pagina Home - Listado de heroes cargados utilizando getStaticProps, ya que es data que estará estática dentro de mi aplicación. De esta forma en el momento de build se hará el pre-rendering y estará lista para ser servida al cliente.
- Pagina Card - En card puede ver información de un hero seleccionado, alli se utiliza el getServerSideProp ya que es una ruta dinámica y se estrá usando el ID para cargar los datos, de ser IDs regulares se prodría utilizar el getStaticPath, pero no fue el caso. Aquí tambien se llamó a la API para extraer info de los comics. Igualmente se utilizó getServerSidePorps.
- En esta pagina tambien puedes agregar un heroe a favoritos, para ello en la carpeta helper encontratas funciones donde se ve la comunicacion con el LocalStorage, para guardar, recuperar, eliminar y actualizar información.
- pagina My Team: aquí cada usuario puede crear su euqipo de heroes y darle un nombre y una descripción. Para esto se utiliza el local storage.

- cada pagina fue trabajada con componentes hubicados en la capeta componentes, para tener un codigo limpio y organizado.
- Ademas encontrarás una carpeta de hooks y otra llamada api donde se encuantra la función responsable de hacer las peticiones utilizando axios.

Saludos.
