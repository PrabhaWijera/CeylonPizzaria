import React from "react";

async function ImagetoBase64(file:any){
const reader =new FileReader();


// reader.readAsDataURL(file);---> this can be convert to file Base64

reader.readAsDataURL(file);

const data=new Promise((resolve,reject)=>{
  reader.onload=()=> resolve(reader.result)
  reader.onerror=err=>reject(err);
})
return data;
}

export { ImagetoBase64};