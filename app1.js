let url = "https://dog.ceo/api/breeds/image/random";

async function dogImage(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    }
    catch(err)
    {
        return ("Error While loading!!");
    }
}

let btn = document.querySelector("button");
let dogimg = document.querySelector("#dog");
btn.addEventListener("click",async ()=>{
    let output = await dogImage();
    console.log(output);
    dogimg.setAttribute("src",output);
})