
function Q3(){
    let usersArray  =  [ 			
        {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},			
        {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},
        {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},			
        {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},			
        {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},			
        {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}
	];
    let resultsArray = usersArray.map(item =>  
        <tr>
          <td class="empTable-col">{item.id}</td>
          <td class="empTable-col">{item.email}</td>
          <td class="empTable-col">{item.first_name}</td>
          <td class="empTable-col">{item.last_name}</td>
          <td class="empTable-col"><img src={item.avatar}/></td>
        </tr> );
    return (
        <>
            <table class="empTable center">
         
         <tr>
           <th>ID</th>
           <th>Email</th>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Avatar</th>
         </tr>

         {resultsArray}

       </table>
        </>
    );
}
export default Q3;