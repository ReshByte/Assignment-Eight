import { toast } from "react-toastify";

const getDataFromLs = () => {
  const savedData = localStorage.getItem("appId");
  if (savedData) {
    return JSON.parse(savedData);
  } else {
    return [];
  }
};

const saveDataToLs = (id) => {
  const savedData = getDataFromLs();
  if (savedData.includes(id)) {
    return alert("Duplicate id")
  } else {
    savedData.push(id);
    localStorage.setItem("appId", JSON.stringify(savedData));
  }
};

const removeFromLs = (id) => {
  const savedData = getDataFromLs();
  const filteredData = savedData.filter((ids) => ids !== id);
  localStorage.setItem("appId", JSON.stringify(filteredData));
};

export { getDataFromLs, removeFromLs, saveDataToLs };