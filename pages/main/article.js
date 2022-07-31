

	async function getCovid(){
		try{
			return await fetch('https://covid-193.p.rapidapi.com/statistics?country=Qatar',{
				method: 'GET',
				headers: {
						'X-RapidAPI-Key': 'a3cd827027msh0132ea0897450e5p1a2c87jsncbbc1fd35305',
						'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
							}
			})
			.then(response => response.json())
			.then(res => res)
			.then(myArray => {for (const key in myArray) {
				console.log(key);
			
			}}
				
				
		)
		}
		catch(err){
			console.log(err)
		}
	}
	getCovid()