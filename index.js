// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//     }

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then((response) => response.json())
//     .then((object) => console.log(object))
//     .catch((error) => {
//         alert("Bad things!");
//         console.log(error.message)
//     })

function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    })
    .then((response) => response.json())
    .then((user) =>  document.body.append(user.id))
    .catch((error) => document.body.append(error.message))
}
submitData("abc", "abc@gmail.com");