// Put your applicaiton javascript here


// const addToCart = document.querySelector("#AddToCart");
//   if (addToCart) {
//   console.log("found");
//   addToCart.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log("test");



// });

// }

async function addItem(variantId, quantity) {
    console.log("test")
    const result = await fetch("/cart/add.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            id: variantId,
            quantity: quantity
        })
    })
}
