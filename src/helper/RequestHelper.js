import axios from "axios";

export const sendHttpRequest = async (endpoint) => {
  try {
    const response = await axios.get(`http://${endpoint}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const devices = [
  {
    id: 1,
    endpoint: "Relay1",
    title: "",
    assigned: false,
  },
  {
    id: 2,
    endpoint: "Relay2",
    title: "",
    assigned: false,
  },
  {
    id: 3,
    endpoint: "Relay2",
    title: "",
    assigned: false,
  },
  {
    id: 4,
    endpoint: "Relay4",
    title: "this is jus for testing 4",
    assigned: false,
  },
];
