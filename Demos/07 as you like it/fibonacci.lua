print ("Fibonacci first 10 in Lua (LuaJ)")

local function Fibonacci_iterative(n)
  a, b = 0, 1

  for i = 1, n do
    print(string.format("Lua Fibonacci: %s",b))
    a, b = b, a + b
  end
  return a
end

Fibonacci_iterative(10)
