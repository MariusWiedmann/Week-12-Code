let table = document.getElementById('storage-table');
let row = table.insertRow(1);
products = [];

document.getElementById('submit').addEventListener('click', () => {
    
    let table = document.getElementById('storage-table');
    let row = table.insertRow(0);
    products = [];
    
    row.insertCell(0).innerHTML = document.getElementById('product-name').value;
    products.push(document.getElementById('product-name').value);

    row.insertCell(1).innerHTML = document.getElementById('product-number').value;
    products.push(document.getElementById('product-number').value);

    row.insertCell(2).innerHTML = document.getElementById('product-date').value;
    products.push(document.getElementById('product-date').value);

    //Adds edit and delete buttons every time you hit the submit button 
    row.insertCell(3).innerHTML = `
    <button class="btn btn-secondary" id="edit">Edit</button>
    <button class="btn btn-danger" id="delete">Delete</button>
    `

    console.log(products); //checking to see if data is being properly added to the products array;



    //Resets form inputs to default
    document.getElementById('product-name').value = '';  
    document.getElementById('product-number').value = '';  
    document.getElementById('product-date').value = '';  



    //Delete Button Functionality - **Needs Work 
    document.getElementById('delete').addEventListener('click', () => {
        console.log('deleting');
        for ( i = 0; i < products[i]; i++ ){
            //grab the index of the selected table row?
        }
        document.getElementById('storage-table').deleteRow(i); //i will be the index of the selected table row 
    });

    //Edit Button Functionality - **Needs Work 
    document.getElementById('edit').addEventListener('click', () => {
        console.log('editing')
        for( i = 0; i < products[i]; i++ ){
            //something to grab the exact index and execute a text box to change the inner HTML of the table row selected
        }
    });

});


