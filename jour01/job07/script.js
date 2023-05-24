function jourtravaille(date) {
  let ferier = ["2020-01-01", "2020-04-13", "2020-05-01", "2020-05-08", "2020-05-21", "2020-06-01", "2020-07-14", "2020-08-15", "2020-11-01", "2020-11-11", "2020-12-25"]; 
  if (date in ferier) {
    console.log("Le " + date.substr(8,2) + " " + date.substr(5,2) + " " + date.substr(0,4) + " est un jour férier");
  } else {
    let dayX = parseInt(date.substr(8,2)) + parseInt(date.substr(5,2))*28 + 3 * (parseInt(date.substr(5,2))%2)
    for (let day = 1; day < 366; day++) {
      if (day-4)
