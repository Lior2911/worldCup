let load = document.getElementById("loadGif")
const covidInfo = document.getElementById("paragOne")
	async function getCovid(){
		load.disabeld = false

		try{
			return await fetch('https://covid-193.p.rapidapi.com/statistics?country=Qatar',{
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': 'a3cd827027msh0132ea0897450e5p1a2c87jsncbbc1fd35305',
					'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
				}

			})
			.then(response => response.json())
			.then(res =>
				res.response
				)
				.then(dataObj =>
					covidInfo.innerHTML =`
	
				<div class='col p-2 fst-italic '> 
				<h1>Qatar's Covid-19 stats.</h1>
			<p> Help Fighting Covid-19</p>
			<div class='col'>
			<img
		src="images/covid.jpg"
		class="img-fluid h-50"
		alt=""/>
		<div class='p-2 w-75'> - Based on COVID-19 epidemiology  in different countries and their local health risk indicators, Qatar has developed specific health and safety measures for travelers coming to Qatar – Standard Health Measures and Red Health Measures.
		<br> check below Covid-19's status who update daily.
		</div>
	</div>
			<div class='p-2 bg-dark bg-opacity-25 borter-top border-dark'>

				 	<div class=''>country : <b>
				  ${dataObj[0].country} </b>
					</div>
					<div>new cases :<b> 
				  ${dataObj[0].cases.new} </b>
					</div>
					<div>active : <b>
				  ${dataObj[0].cases.active} </b>
					</div>
					<div>total deaths : <b>
				  ${dataObj[0].deaths.total} </b>
					</div>
					<div>last update : <b>
				  ${dataObj[0].time} </b>
					</div>
			</div>
				
				</div>
				
			
					`	)
		}
		catch(err){
			console.log(err)
		}
		finally{
			load.disabeld = true
		}
	}
	getCovid()
