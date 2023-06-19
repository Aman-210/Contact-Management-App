import axios from "axios";

const url = 'https://disease.sh/v3/covid-19/countries';

export const FetchData = async () => {
  try {
    const response = await axios.get(url);
    const data = response.data; // Array of country objects
      
    // Map over the country objects and extract the desired fields for each country
    const countryData = data.map(country => {
      const { updated, country: name, cases, deaths, recovered, active, critical, population } = country;
      return { updated, country: name, cases, deaths, recovered, active, critical, population };
    });

    return countryData;
  } catch (error) {
    console.log("Error:", error);
  }
};
// export const FetchData = async () => {
//   try {
//     const response = await axios.get(url);
//     const data = response.data; // Array of country objects

//     // Map over the country objects and extract the desired fields for each country
//     const countryData = data.map(country => {
//       const { updated, country: name, cases, deaths, recovered, active, critical, population } = country;
//       return { updated, country: name, cases, deaths, recovered, active, critical, population };
//     });

//     return countryData;
//   } catch (error) {
//     console.log("Error:", error);
//   }
// };






