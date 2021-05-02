const baseurl='http://localhost:3001/api/places'


export const getPlaces=async ()=>{

    const res= await (await fetch(`${baseurl}`)).json()
    return res

}

export const addLike=async(userId)=>{

    const res= await (await fetch(`${baseurl}/addLike`,{
        method:'POST',
        body:userId
    })).json
    console.log(res)
    return res

}

