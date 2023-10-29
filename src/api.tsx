
export const getData = async (url:string) => {
    if(!url) return
    console.log(url)
    const response = await fetch(url)
    if (!response.ok) throw ({ status: 500, message: "Problem fetching data" })
    return response.json()
}