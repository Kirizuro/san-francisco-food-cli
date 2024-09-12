import axios from "axios";

import arg from "arg";

const argumentsAsOptions = (rawArgs) => {
  const args = arg({
    "--help": Boolean,
    "--type": String,
    "--address": String,
    "--name": String,
    "-h": "--help",
    "-t": "--type",
    "-a": "--address",
    "-n": "--name",
  });

  return {
    type: args["--type"] || false,
    address: args["--address"] || false,
  };
};
const dataSF = axios.create({
  baseURL: `https://data.sfgov.org/resource/bbb8-hzi6.json`,
  headers: {
    "X-App-Token": "xUNyF0RUVGEN3GaiPFWw37xj1",
  },
});

const getFoodTrucks = async () => {
  const response = await dataSF.get();
  return response.data;
};

const parseParams = (options) => {
  if (!options.type && !options.address) {
    return "";
  }
  console.log(options);

  if (Object.keys(options).length === 1) {
    return `?${Object.keys(options)}=${Object.values(options)}`;
  }

  return `?${options.type}=${options[options.type]}&${options.address}=${
    options[options.address]
  }`;
};

export const main = async () => {
  // const options = argumentsAsOptions(process.argv);

  // const params = parseParams(options);

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
