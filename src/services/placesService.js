const baseurl='http://localhost:3001/api/places'


export const getPlaces=async ()=>{

    const res= await (await fetch(`${baseurl}`)).json()
    return res

}

export const addLike=async(userId)=>{

    const res= await (await fetch(`${baseurl}/addLike`,{
        method:'PUT',
        body:userId
    })).json
    return res

}
export const addComment=async(comment)=>{

    const res= await (await fetch(`${baseurl}/addComment`,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(comment)
    })).json()
    
    return res

}

