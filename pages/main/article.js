// const NEWSAPI = "https://community-official-world-cup.p.rapidapi.com/wc/matches";
// async function getNewws(){
//   try{
//     return await fetch(NEWSAPI,{
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'a3cd827027msh0132ea0897450e5p1a2c87jsncbbc1fd35305',
//         'X-RapidAPI-Host': 'community-official-world-cup.p.rapidapi.com'
//       }

//     }).then(response =>
//       response.json()).then(res =>
//         console.log(res.id))
//   }
//   catch(err){
//     console.log(err);
//   }
// }
// getNewws()
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a3cd827027msh0132ea0897450e5p1a2c87jsncbbc1fd35305',
		'X-RapidAPI-Host': 'live-score-api.p.rapidapi.com'
	}
};

fetch('https://live-score-api.p.rapidapi.com/federations/list.json?secret=undefined&key=undefined', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));