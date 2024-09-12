import axios from "axios";

const dataSF = axios.create({
  baseURL: `https://data.sfgov.org/resource/bbb8-hzi6.json`,
});

const getFoodTrucks = async () => {
  const response = await dataSF.get();
  return response.data;
};

export const main = async () => {
  console.log("Getting food trucks...");

  const foodTrucks = await getFoodTrucks();

  const formattedFoodTrucks = foodTrucks.map((truck) => {
    return {
      name: truck.applicant,
      address: truck.location,
      openClose: `${truck.start24} - ${truck.end24}`,
      applicant: truck.applicant,
    };
  });

  console.table(formattedFoodTrucks);
};
