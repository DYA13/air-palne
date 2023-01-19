const URL_API = 'https://61f4662310f0f7001768c90f.mockapi.io/api/airplane'

const getData = () => fetch(URL_API)
.then((response) => {
if(response.ok) {
   return response.json()
}
throw new Error(response.status);
})

.catch((err) =>{console.error(err)})


export default getData;