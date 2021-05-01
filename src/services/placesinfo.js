const baseurl='http://localhost:3001/api'


export const getPlaces=async ()=>{

    const res= await (await fetch(`${baseurl}/places`)).json()
    return res

}