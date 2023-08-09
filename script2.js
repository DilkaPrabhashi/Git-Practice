let users = [];

const addUser = () => {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    let mobileno = document.getElementById('mobile').value;

    users.push({
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age,
        mobileno: mobileno
    });

    let divElement = document.getElementById('table-data');
    divElement.innerHTML = null;

    let tableElement = document.createElement('table');
   

    // Create table headers
    let trHeaderElement = document.createElement('tr');
    let thElement1 = document.createElement('th');
    thElement1.innerHTML = "First Name";
    let thElement2 = document.createElement('th');
    thElement2.innerHTML = "Last Name";
    let thElement3 = document.createElement('th');
    thElement3.innerHTML = "Email";
    let thElement4 = document.createElement('th');
    thElement4.innerHTML = "Age";
    let thElement5 = document.createElement('th');
    thElement5.innerHTML = "Mobile Number";
    trHeaderElement.append(thElement1, thElement2, thElement3, thElement4, thElement5);
    tableElement.appendChild(trHeaderElement);

    
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let trElement = document.createElement('tr');

        let tdElement1 = document.createElement('td');
        tdElement1.innerHTML = user.firstName;
        let tdElement2 = document.createElement('td');
        tdElement2.innerHTML = user.lastName;
        let tdElement3 = document.createElement('td');
        tdElement3.innerHTML = user.email;
        let tdElement4 = document.createElement('td');
        tdElement4.innerHTML = user.age;
        let tdElement5 = document.createElement('td');
        tdElement5.innerHTML = user.mobileno;

        trElement.append(tdElement1, tdElement2, tdElement3, tdElement4, tdElement5);
        tableElement.appendChild(trElement);
    }
    /*tableElement.classList.add(users-table);*/  
    divElement.appendChild(tableElement);
    
   // return false;
    
    //event.preventDefault();
}
const resetUser= () =>{
document.getElementById('firstName').value = "";
document.getElementById('lastName').value = "";
document.getElementById('email').value = "";
document.getElementById('age').value = "";
document.getElementById('mobile').value = "";
}
