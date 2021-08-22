import axios from "axios";

export const getDevices = async () => {
  return await axios.get(`${process.env.REACT_APP_API}`);
};
