
export const FETCH_SHIUCH_REQUESTS_URL = "https://run.mocky.io/v3/b88573ea-fbef-4cc4-b07b-50a150e2904d"
export const FETCH_KIDS_URL = "https://run.mocky.io/v3/b1dd72ae-6b52-4eed-98b9-457e883c3d89"
export const options = [{ value: "new", label: "new" }, { value: "approved", label: "approved" }, { value: "rejected", label: "rejected" }, { value: "suggestions", label: "suggestions" }]
export const newRequestsLoader = async () => {
    const response = await fetch(FETCH_SHIUCH_REQUESTS_URL);
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    return data
  }
  export const kidsLoader = async () => {
    const response = await fetch(FETCH_KIDS_URL);
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    return data.data;
  };