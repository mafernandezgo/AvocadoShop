/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app"
const url = "https://platzi-avo.vercel.app/api/avo"
const appNode = document.querySelector("#app")
appNode.className = "grid grid-cols-3 gap-5 mt-12"

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD"
    }).format(price)

    return newPrice
}


// conectarnos al servidor
window
.fetch(url)
//procesar respuestas y convertirla en JSON
.then((response) => response.json())
//json -> data 
.then((responseJson) => {
    const todosLosItems = []
    responseJson.data.forEach(item => {
        const image = document.createElement("img");
        image.src = `${baseUrl}${item.image}`
        image.className = "border-green-200 border rounded-full p-4"
        const title = document.createElement("h2")
        title.textContent = item.name
        title.className = "text-3xl text-green-700 p-4"
        const price = document.createElement("div")
        price.textContent = `Price: ${formatPrice(item.price)}`
        price.className = "text-green-900 p-4 bg-green-50 rounded-lg border border-green-50 hover:border-green-200 hover:bg-white"
        const container = document.createElement("div")
        container.className = " hover:bg-green-50 rounded-lg grid place-items-center p-6"
        container.append(image, title, price)

        todosLosItems.push(container)
    });
    appNode.append(...todosLosItems)
})

