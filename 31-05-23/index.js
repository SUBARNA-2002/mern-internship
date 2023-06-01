const data=[
    {
        image:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/11/dhamaka-1637310639.jpg",
        title:"Dhamaka",
        rating:5,
    },
    {
        image:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/11/dhamaka-1637310639.jpg",
        title:"Dhamaka",
        rating:5,
    }, 
    {
        image:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/11/dhamaka-1637310639.jpg",
        title:"Dhamaka",
        rating:5,
    }, 
    {
        image:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/11/dhamaka-1637310639.jpg",
        title:"Dhamaka",
        rating:5,
    },
     {
        image:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/11/dhamaka-1637310639.jpg",
        title:"Dhamaka",
        rating:5,
    }, 
    {
        image:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/11/dhamaka-1637310639.jpg",
        title:"Dhamaka",
        rating:5,
    }, 
    {
        image:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/11/dhamaka-1637310639.jpg",
        title:"Dhamaka",
        rating:5,
    }, 
    {
        image:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/11/dhamaka-1637310639.jpg",
        title:"Dhamaka",
        rating:5,
    },
    {
        image:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/11/dhamaka-1637310639.jpg",
        title:"Dhamaka",
        rating:5,
    }
]
 const movieBox=document.getElementById("movie_show");

//  for(let i=0;i<data.length;i++){
//     const div=document.createElement("div");
//     const image=document.createElement("img");
//     image.src=data[i].image;
//     const movietitle=document.createElement("h3");
//     movietitle.innerText=data[i].title;
//     const rating=document.createElement("p");
//     rating.innerText=data[i].rating;
//     div.append(image,movietitle,rating);
//     movieBox.append(div);
//  }

data.forEach((el)=>{
    const div=document.createElement("div");
    div.className="sty1";
    const image=document.createElement("img");
    image.src=el.image;
    const movietitle=document.createElement("h1");
    movietitle.innerText=el.title;
    movietitle.className="sty";
    const rating=document.createElement("p");
    rating.innerText=el.rating;
    rating.className="sty";
    const button=document.createElement("button");
    button.innerText="Click Movie";
    button.addEventListener("click",()=>{
       alert(`You Clicked on ${el.title}`);
       window.location.href=("http://localhost:8081/myData");
    });
    button.className="btn btn-primary";
    div.append(image,movietitle,rating,button);
    movieBox.append(div);
})