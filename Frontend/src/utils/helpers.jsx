import { backendUrl } from "./config";

export const makeUnauthenticatePOSTRequest = async(route, body)=>{
    const response = await fetch(backendUrl + route,{
        method : "POST",
        headers : {
            "Content-Type":"application/json",
        },
        body : JSON.stringify(body),
    })
    const fromattedResponse = await response.json();
    return fromattedResponse;
}