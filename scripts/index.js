
// #Load the categories
function loadCategories() {
    //1- fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    //2- convert promise to json
    .then((res)=>res.json())
    //3- send data to display
    .then((data)=>{
        displayCategories(data.categories)
    })
}
// #Load the videos
function loadVideos(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res=>res.json())
    .then(data =>{
        displayVideos(data.videos)
    })
}


// display function for categories
function displayCategories(categories){
    //4- Get the container of category
    const categoryContainer = document.getElementById('category-btn-container');
    //5- Loop operation on array of object
    for(let cat of categories){
    //6-Create element
    const divCategory = document.createElement('div')
    divCategory.innerHTML=`
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `
    //7-append the element
    categoryContainer.appendChild(divCategory);
    }
   
}

// {
//     "category_id": "1001",
//     "video_id": "aaad",
//     "thumbnail": "https://i.ibb.co/f9FBQwz/smells.jpg",
//     "title": "Smells Like Teen Spirit",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
//             "profile_name": "Oliver Harris",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "5.4K",
//         "posted_date": "1672656000"
//     },
//     "description": "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances."
// }

// Display function for videos
const displayVideos = (videos) =>{
    const videoContainer = document.getElementById("video-container");
    videos.forEach(video => {
        console.log(video)
        const videoCard = document.createElement('div');
        videoCard.innerHTML=   
     `
        
            <div class="card bg-base-100 ">
                <figure class="relative">
                <img class="w-full h-[200px] object-cover"
                  src="${video.thumbnail}"
                  alt="Shoes" />
                  <span class="absolute bg-black text-white text-sm px-2 rounded-sm  bottom-2 right-1">3hrs 56 min ago</span>
              </figure>
              <div class="flex gap-4 mt-4 px-1">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-9 rounded-full ring-2 ring-offset-2">
                          <img src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>
                </div>
                <div class="">
                    <h1 class="text-black text-xl font-bold">${video.title}</h1>
                    <div class="flex gap-2 justify-items-start items-center ">
                        <p class="font-normal text-gray-600">${video.authors[0].profile_name}</p>
                        <img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="">
                    </div>
                    <p class="font-normal text-gray-600">${video.others.views}</p>
                </div>
              </div>
             </div>
    
 `
        videoContainer.appendChild(videoCard);
    });
  

}

// #Call the all function created upper
loadCategories();

// document.getElementById("all-btn").addEventListener('click',function(){
//     loadVideos();
// })