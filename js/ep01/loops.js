// 1. while
// 2. do-while
// 3. for
// 4. forEach
// 5. for-in
// 6. for-of

while (condition) {
  // code
}

do {
  // code
} while (condition);

const array = [1, 2, 3, 4, 5];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  // code
}

for (const element of array) {
  console.log(element);
}

const object = {
  id: 1,
  name: "x",
  title: "test",
};

for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    console.log("element: ", element);
}

const arr = [1, 2, 3, 4, 5];
arr.forEach(function (value , index) {
    console.log(value , index);

    // 1,0
    // 2, 1
    // 3, 2
    // ...
})

