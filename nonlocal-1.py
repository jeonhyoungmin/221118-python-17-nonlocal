# nonlocal-1.py

def outer_func():
  count = 0
  def inner_func():
    count += 1
    print(count)
  
  inner_func()
  inner_func()
  inner_func()
  inner_func()

outer_func()