
const baseurl='http://localhost:3001/api/users'


export const addPlace=async(placeId)=>{

    const res= await (await fetch(`${baseurl}/addplace`,{
        method:'POST',
        body:placeId
    })).json
    console.log(res)
    return res

}

export const addLike=async(placeId)=>{

    const res= await (await fetch(`${baseurl}/addplace`,{
        method:'POST',
        body:placeId
    })).json
    console.log(res)
    return res

}

export const addComment=async(commentId)=>{

    const res= await (await fetch(`${baseurl}/addComment`,{
        method:'POST',
        body:commentId
    })).json
    console.log(res)
    return res

}