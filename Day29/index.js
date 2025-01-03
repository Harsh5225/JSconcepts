require('dotenv').config();
const apikey= process.env.API_KEY;
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=kanpur&appid=${apikey}&units=metric`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// async function weatherData() {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apikey}`
//     );
//     const data = await response.json();
//     console.log("hello");

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// weatherData();
