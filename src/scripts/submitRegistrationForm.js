import dataManager from "./dataManager"

const registrationFormButton = () => {
    document.querySelector("#formButton").addEventListener("click", () => {
        const userName = document.querySelector("#inputUsername").value
        const password = document.querySelector("#inputPassword").value
        const first_name = document.querySelector("#inputFirstName").value
        const last_name = document.querySelector("#inputLastName").value
        const email = document.querySelector("#inputEmail").value

        const inputUserObject = {
            userName: userName,
            password: password,
            first_name: first_name,
            last_name: last_name,

        }
        dataManager.getData()
            .then((userList => {
                const search = userList.filter(user => user.userName === inputUserObject.userName )
                console.log(search)
                if (search.length) {
                    alert("This user name is taken")

                } else {
                    dataManager.postUserData(inputUserObject)

                    // document.querySelector("#output").innerHTML += ""
                }


            })



            )
    })
}

export default registrationFormButton