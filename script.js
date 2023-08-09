let users =[];
//let firstName,lastName,email,age,mobileno;


const addUser = () =>{
     let firstName =document.getElementById('firstName').value;
     let lastName= document.getElementById('lastName').value;
     let email =document.getElementById('email').value;
     let age= document.getElementById('age').value;
     let mobileno =document.getElementById('mobile').value;
     

    //fn = firstName.value;
    //console.log(firstName,lastName,email,age,mobileno);
   
    /*;*/

   users.push({

        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        age:this.age,
        mobileno: this.mobile


   });
    let divElement = document.getElementById('table-data');
    divElement.innerHTML=null;

    let tableElement = document.createElement('table');

    let trElement = document.createElement('tr');
    for(let i =0;i<users.length;i++){
        let user=users[i];
        console.log(user.fn);
        //td element for first name
        let tdElement1= document.createElement('td');
        tdElement1.innerHTML=users.firstName;
        trElement.append(tdElement1);

        //td element for last name
        let tdElement2= document.createElement('td');
        tdElement2.innerHTML=users.lastName;
        trElement.append(tdElement2);

        //td element for email
        let tdElement3= document.createElement('td');
        tdElement3.innerHTML=users.email;
        trElement.append(tdElement3);

        //td element for age
        let tdElement4=document.createElement('td');
        tdElement4.innerHTML=users.age;
        trElement.append(tdElement4);

        //td element for last name
        let tdElement5=document.createElement('td');
        tdElement5.innerHTML=users.mobileno;
        tdElement5.append(tdElement5);

    }
    tableElement.appendChild(trElement);
    //divElement.appendChild(tableElement);
    
        /*firstName: document.getElementById(first).value,
        lastName:lname.value,
        email:mail.value,
        age:age.value,
        mobile:mobileno.value*/



    //});
    //console.log(addUser());

  /*  

    let tbodyElement = document.createElement('tbody');

    //let listElement=document.createElement('ul');
    let trElement= document.createElement('tr');

    for(let i =0;i<users.length;i++){
        let user=users[i];
        let tdElement= document.createElement('td');
        tdElement.innerHTML=users.firstName;
        trElement.append(tdElement);
    }
    
    tbodyElement.append(trElement);*/
}