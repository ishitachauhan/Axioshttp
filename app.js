const axios = require('axios')

async function httpRequest(){
    try {
        const URL = "https://jsonplaceholder.typicode.com/posts";
       
        const getResponse = await axios.get(URL);
        console.log(getResponse)
        const postResponse = await axios.post(URL, {
          firstName: "ishita",
          lastName: "chauhan",
        });
        console.log(postResponse);
        const putResponse = await axios.put(URL, {
            id: 101,
            firstName: "Rajeev",
            lastName: "Kumar",
          });
           console.log(putResponse);
      
          const patchResponse = await axios.patch(URL, {
            firstName: "ishita",
            lastName: "chauhan",
          });
          console.log(patchResponse);
    }catch (error) {
        console.error(error);
}
}
httpRequest()
