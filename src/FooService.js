
export function FooService(a,b) {
  return a + b;
}

export function BarService(x,y) {
  if (x > 5) {
    return x;
  } else {
    return x - y;
  }
}