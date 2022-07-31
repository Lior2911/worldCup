
const loadGif = document.getElementById("loadingImg")
async function getUserList() {
  let userAPI = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
  loadGif.innerHTML = " <img src='../appImages/loadingGif.gif' alt=''>"
  try {
    return await fetch(userAPI).then(response => 
      response.json()
    )
  } catch (error) {
    alert("somthing wrong,please refresh or wait")
  } finally {
    loadGif.innerHTML = " "
  }
}

function printToTable() {
  let myTable = document.getElementById("userData")
  getUserList()
  .then((res)=>{
    res.forEach(element => {
      myTable.innerHTML += `
      <tr>

      <td class='border-dark border-2'>${element.name.first}</td>
      <td class='border-dark border-2'>${element.name.last}</td>
      <td class='border-dark border-2'>${element.email}</td>
      <td class='border-dark border-2'>${element.phone}</td>
      </tr>
      `
      
      
    })
   
  })
}
printToTable()




const options={method: 'GET',
headers: {
  'X-RapidAPI-Key': 'a3cd827027msh0132ea0897450e5p1a2c87jsncbbc1fd35305',
  'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
}
};
async function getCovid(){
  try{
    return await fetch("https://covid-193.p.rapidapi.com/statistics?country=Qatar",options).
    then(response => response.json())
    // .then(response => console.log(response))
   
  }
  catch(err){
    console.log(err);
  }
}
// function printToList(){
//   getCovid().then((res)=>{
//     for(const key in res){
//       console.log(res['']);
//     }
//   }
// )
// }
// printToList()




// const optionsB = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a3cd827027msh0132ea0897450e5p1a2c87jsncbbc1fd35305',
// 		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
// 	}
// };

// fetch('https://covid-193.p.rapidapi.com/countries/', optionsB)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));