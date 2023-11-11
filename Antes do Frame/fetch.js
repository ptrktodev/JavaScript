const key = "04105f3a63399900b37fa84e3ec7168e";
const url = `https://api.themoviedb.org/3/tv/popular?api_key=${key}`;

fetch(url)
    // Tranforma a requisição em json
    .then((r) => r.json())
    // Manipula os dados JSON
    .then((json) => {
        const { results } = json;
        console.log(`ID: ${results[0].id}`);
        console.log(`Name: ${results[0].name}`);
        console.log(`Descrição: ${results[0].overview}`);
    })
    .catch((error) => console.log(`Erro: ${error}`));

/*    
          for (let i = 0; i < results.length; i++) {
            console.log(`ID: ${results[i].id}`);
            console.log(`Name: ${results[i].name}`);
            console.log(`Descrição: ${results[i].overview}`);
        }  
*/
