function newItem() {
    // Add a new item to the list
    let li = $('<li></li>');
    let inputValue = $('input').val();
    li.append(inputValue);

    if (inputVale === '') {
        alert('You must write something');
    } else {
        $('#list').append(li);
    }

    // Crossing out an item from the list
    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    })

    //Delete item from list
    let crossOutButton = $('<crossOutButton></crossOutButton');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', function deleteListItem(){
        li.addClass('delete');
    });
  
    // Change the order of items in the list
    $('#list').sortable();
    
  };
  