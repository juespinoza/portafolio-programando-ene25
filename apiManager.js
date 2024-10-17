class APIManager {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  // baseUrl: la url de mi API
  // resourceName: el nombre de registro que quiero obtener (especificado por la documentacion de la API)
  // resourceId: identificador unico de un registro en el sistema que provee la API
  // fetch(URI = "baseUrl/resourceName/[resourceId]")

  // Obtener todos los posts
  async getPosts() {
    try {
      const respuesta = await fetch(`${this.baseUrl}/posts`);
      //   console.log("respuesta de promesa", respuesta);
      if (respuesta.ok) {
        const posts = await respuesta.json();
        // console.log("respuesta correcta", posts);
        return posts;
      } else {
        // console.log("error en la respuesta");
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const testAPIManager = new APIManager("https://jsonplaceholder.typicode.com");
const processPosts = async () => {
  const posts = await testAPIManager.getPosts();
  if (posts.length > 0) {
    posts.forEach((post) => {
      console.log(`Post > ${post.title}`);
    });
  }
};
processPosts();
