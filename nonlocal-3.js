// nonlocal-3.js

function outer_func(){
  let count = 0
  function inner_func(){
    count ++
    console.log(count)

  }
  inner_func()
  inner_func()
  inner_func()
  inner_func()
}

outer_func()