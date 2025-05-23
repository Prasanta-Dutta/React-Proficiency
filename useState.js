// 1. What can we pass as argument with forEach():

const { useState } = require("react");

// const { useState } = require("react");

array.forEach((element, index, array) => {
  // You get all three: element, index, and the full array
});


// We pass a callback that receives multiple arguments automatically.



// 2. What can we pass as argument with useState():

// ✅ 1. A value (object, number, string, etc.)
// setUserData({ email: "a@a.com", password: "123456" });


// ✅ 2. An updater function : So the updater function for setUserData only gets one argument: the previous state. There’s no index or array like in forEach.

setUserData((prevState) => {
  // prevState is like `element` in forEach
  console.log(prevState); // the current state before the update
  return {
    ...prevState,
    email: "updated@example.com",
  };
});

// 1. So we can pass a value or an Updater function with setUserData().
// 2. And the updater function also receive one argument i.e. the previous state of the userData variable (i.e. a shallow copy of it/reference)


// 3. Why we can change here as it's const, 
    const [userData, setUserData] = useState({
        name: "",
        email: ""
    })

    // Because const [userData, setUserData] ---> is an array which has a veriable and a function().
    // And in const array we can reassign elements/index value, but can't reassign the array.