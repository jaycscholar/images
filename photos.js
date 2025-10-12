//CRTL SHFT R for hard refresh when updating web file

async function fetchAndDisplayPhotos() {
     try {
          const response = await fetch("https://jaycscholar.github.io/images/imageStack.json");
          //const response = await fetch("imageStack.json");
          const photos = await response.json();

          const container = document.createElement("div");

          const title = document.createElement("h2");
          title.textContent = "Photos from API"
          container.appendChild(title);

          document.body.appendChild(container);


            let j = 1;
//removed photos.length
 for (let i = 0; i < 100; i++) {
const photo = photos[i];
const photoDiv = document.createElement("div");

photoDiv.innerHTML = `
<h3>${j} ${photo.title} </h3>
<img width="700" src='${photo.photoUrl}'>
`;

//console.log(photo.url)
j++; 



         container.appendChild(photoDiv);
     }
               console.log("working to change html")

  }  catch (error) {
          console.log("Error fetching user data with async/await:", error);
     }
}
     
fetchAndDisplayPhotos();