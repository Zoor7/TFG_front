const baseurl='http://localhost:3001/api/comments'



export const createComment=async(comment)=>{

    const res= await (await fetch(`${baseurl}/create`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(comment)
    })).json()
    
    return res

}