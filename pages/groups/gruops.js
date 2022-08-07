const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a3cd827027msh0132ea0897450e5p1a2c87jsncbbc1fd35305',
		'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
	}
}

const divGames = document.getElementById("games")
async function getGames(){
  try{
    return await fetch('https://free-football-soccer-videos.p.rapidapi.com/',options)
    .then(response =>response.json())
    .then(res =>
     divGames.innerHTML =
      `<div class='row d-flex flex-wrap  p-2 justify-content-between'>
     <div class='col-sm-12 col-md-4 bg-light p-2'><h1> ${res[0].title}</h1> <b> date:</b> ${res[0].date} ${res[0].embed}</div>
     <div class='col-sm-12 col-md-4 bg-light p-2'><h1> ${res[1].title}</h1> <b> date:</b> ${res[1].date} ${res[1].embed}</div>
     <div class='col-sm-12 col-md-4 bg-light p-2'><h1> ${res[2].title}</h1> <b> date:</b> ${res[2].date} ${res[2].embed}</div>
     <div class='col-sm-12 col-md-4 bg-light p-2'><h1> ${res[3].title}</h1> <b> date:</b> ${res[3].date} ${res[3].embed}</div>
     <div class='col-sm-12 col-md-4 bg-light p-2'><h1> ${res[4].title}</h1> <b> date:</b> ${res[4].date} ${res[4].embed}</div>
     <div class='col-sm-12 col-md-4 bg-light p-2'><h1> ${res[5].title}</h1> <b> date:</b> ${res[5].date} ${res[5].embed}</div>
     <div class='col-sm-12 col-md-4 bg-light p-2'><h1> ${res[6].title}</h1> <b> date:</b> ${res[6].date} ${res[6].embed}</div>
     <div class='col-sm-12 col-md-4 bg-light p-2'><h1> ${res[7].title}</h1> <b> date:</b> ${res[7].date} ${res[7].embed}</div>
     <div class='col-sm-12 col-md-4 bg-light p-2'><h1> ${res[8].title}</h1> <b> date:</b> ${res[8].date} ${res[8].embed}</div>
    
     </div>
  

  `)

  }
  catch(err){
    console.log(err);
  }
}
getGames()


