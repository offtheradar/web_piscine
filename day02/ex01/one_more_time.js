var date;
var days_of_week = ["lundi", "Lundi", "mardi", "Mardi", "mercredi", "Mercredi", "jeudi", "Jeudi", "vendredi", "Vendredi", "samedi", "Samedi", "dimance", "Dimanche"];
var months = ["janvier", "Janvier", "fevrier", "Fevrier", "Mars", "mars", "Avril", "avril", "Mai", "mai", "juin", "Juin", "juillet", "Juillet", "aout", "Aout", "septembre", "Septembre", "Octobre", "octobre", "novembre", "Novembre", "decembre", "Decembre"];

if (process.argv[2]) {
	date = process.argv[2].split(' ');
	if (date.length != 5 || !days_of_week.includes(date[0]) || 1 <= Number(date[1]) <= 31 || !months.includes(dates[3])) {
		console.log("Wrong Format");
	} else {
		console.log(date);
	}
} else {
	console.log("Wrong Format");
}
