  //Get input el 
  let filterInput = document.getElementById('filterInput');
  //Add event listener
  filterInput.addEventListener('keyup', filterNames);

  function filterNames(){
      //Get value of input
      let filterValue = document.getElementById('filterInput').value.toUpperCase();
      console.log(filterValue);
      //Get names ul
      let ul = document.getElementById('names');
      //get items
      let li = ul.querySelectorAll('.collection-item');
      
      //loop through collection-item lis
      for(let i = 0; i < li.length; i++){
          let a = li[i].getElementsByTagName('a')[0];
          // if matched
          if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
              //console.log(a.innerHTML.toUpperCase().indexOf(filterValue));
              li[i].style.display = '';
          }else{
              li[i].style.display = 'none';
          }
      }
  }