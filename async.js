/* function getDatafromRandomServe(data){
     return "its taking to long to get data  "
}


console.log('1')
getDatafromRandomServe()
console.log('4') */

/* 
function getUserData(userId, callback){
     console.log(`Fetching data for user ${userId}...`)

     setTimeout(()=>{
          const userData = { 
          id: userId,
          name: "Jose Doe",
          email: "john@example.com"
     };
     callback(userData)
     }, 3000)
     //gets triggerd after successful completion
     //lookup 'setTimeout' 
     //outdated
}

     getUserData(123, function(data){
          console.log("User data received")
          console.log(data)
      })

      console.log("this runs first")

     
 */

/*

function getUser(userId, callback){
     setTimeout(() => {
          console.log(`Getting posts for ${user.username}...`);
          callback([
               {text: "Great Post!"},
               {text: "I learned a lot"}
          ])
     }, 1000)
}

getUser(1,  (user)=>{
     getUserPosts(user, (posts)=> {
     getComments(post[0], (comments) => {
          console.log(comments);
     })
     })
})

*/

/* 

console.log("starting promise example")

function getUserDataPromise(userId){
     return new Promise ((resolve, reject)=>{
          console.log(`Fetch data from server ${userID}`)

          setTimeout(()=>{
               const success =true;
               
               if (success){
                    const userData ={
                         id: userId,
                         name: "Jane smith",
                         email: "Faield to fecth"

                    };
                    resolve(userData);
               } else {
                    reject("failed to get data")
               }
          }, 1500);
     });
}


getUserDataPromise(456)
     .then((data) =>  {
          console.log("Promise resolve with data:")
          console.log(data);
     })
     .catch((error) => {
          console.log("Promise reject with error");
          console.log(error);
     });

     console.log("this represents a promise that would be run")

      */

/*

//Promise code

console.log("Starting fetch example");

function fetchUserList() {
     console.log("Fetching user list from API...")

     fetch("https://jsonplaceholder.typicode.com/users")

     .then((response) => {
          console.log("Response received:");
          return response.json();
     })
     .then((data) => {
          console.log("User data:", data);
     })
     .catch((error) => {
          console.log("Error fetching user data:", error);
     });       
}

fetchUserList();

console.log("This runs while waiting for fetch to complete");    

*/

/* 

//FetchUserList
async function getUserWithAsyncAwait() {
     try {
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const users = await response.json();
          users.forEach(user => {
               console.log(user.name + " - " + user.email);
          })
          console.log("User data with async/await:", users);
     } catch (error) {
          console.log("Error fetching user data with async/await:", error);
     }       
     
}

getUserWithAsyncAwait();

console.log("This runs while waiting for async/await to complete"); */



async function fetchAndDisplayUsers() {
     try {
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const users = await response.json();

          const container = document.createElement("div");

          const title = document.createElement("h2");
          title.textContent = "Users from API"
          container.appendChild(title);

          /* result
<div>
     <h2>Users from API</h2>
     <div style="border: 1px solid #ccc; margin: 10px; padding: 10px;">
          <h3>Leanne Graham</h3>
          <p>Email:

          */
          document.body.appendChild(container);
          
          console.log("users data", users);
          let j = 1;

          for (let i = 0; i < users.length; i++) {
               const user = users[i];
               const userDiv = document.createElement("div");
               // the following  does not need +=
               userDiv.innerHTML = `
               <h3>${j} ${user.name}</h3>
               <p>Email: ${user.email}</p>
               <p>Phone: ${user.phone}</p>
               <p>Company: ${user.company.name}</p> 
               `;
               j++;

               // userDiv.style.border = "1px solid #ccc";
               // userDiv.style.margin = "10px";
               // userDiv.style.padding = "10px";

               userDiv.classList.add("user-card");
               container.appendChild(userDiv);
          }
          console.log("working to change html")

     } catch (error) {
          console.log("Error fetching user data:", error);
     }

  

}

fetchAndDisplayUsers();

console.log("This runs while waiting for async/await to complete"); 

