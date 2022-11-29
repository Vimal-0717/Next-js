import { data } from "autoprefixer";

export async function fetcher(url,option={}){
    let response;
    if(!options){
        response=await fetch(url);
    }else{
        response=await fetch(url,options);
    }
    const daa=await response.json();
    return data;
    }
