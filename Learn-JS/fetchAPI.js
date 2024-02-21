// get data from form (here written in hod code)
const getDataFromForm = () => {
    let requestFromFormData = {
        firstName : 'Jazz',
        lastName : 'Athee',
        categories : ['nerdy'],
        limit : 3 
    }
    return requestFromFormData
}

const buildRequestUrl = (getData) => {
  return `HTTP://xxxxxxxx.xxx?firstName=${getData.firstName}&lastName=${getData.lastName}&limitTo=${getData.categories}`
}

const requestJoke =  (url) => {
    const response =  fetch(url)
    const parseJson =  response.json
    const joke = parseJson.value.joke
    postJokeTopage(joke)
}
const postJokeTopage = (joke) => {
    console.log(joke)
}

const processJokeRequest =  () => {
    const getData = getDataFromForm()
    const requestUrl = buildRequestUrl(getData) 
     requestJoke(requestUrl)
    console.log(requestUrl)
}

processJokeRequest();