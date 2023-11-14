import { redirect } from "react-router-dom";


export const FETCH_SHIUCH_REQUESTS_URL = "https://run.mocky.io/v3/b88573ea-fbef-4cc4-b07b-50a150e2904d"
export const FETCH_KIDS_URL = "https://run.mocky.io/v3/b1dd72ae-6b52-4eed-98b9-457e883c3d89"
export const options = [{ value: "new", label: "new" }, { value: "approved", label: "approved" }, { value: "rejected", label: "rejected" }, { value: "kids", label: "suggestions" }]
const FETCH_DATA = "https://run.mocky.io/v3/f7cd29c2-1237-4651-92d9-62f2429f3ea4"


export const newRequestsLoader = async () => {
    const response = await fetch(FETCH_DATA);
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    return data
  }
  export const kidsLoader = async () => {
    const response = await fetch(FETCH_KIDS_URL);
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    data && redirect("/suggestions")
    return data.data;
  };