const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=295369&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=30&open_now=false&lang=en_US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '34b9ec01admsh3906e1bd33aa483p11042ajsn94dee599ffd8',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}