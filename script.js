let dummieData = [{
    name: "Henk",
    titel: "Feedback",
    bericht: "Goede ervaring"
},
{
    name: "Peter",
    titel: "Review",
    bericht: "mooi muziek"

}]

    function addBlogPosten(item) {
        const article = document.createElement("article")
        article.classList.add("blog-post")
        const name = document.createElement("h2")
        name.innerText = item.name
        const titel = document.createElement("h3")
        titel.innerText = item.titel 
        const bericht = document.createElement("p")
        bericht.innerText = item.bericht

        article.appendChild(name)
        article.appendChild(titel)
        article.appendChild(bericht)

        const blogContainer = document.querySelector(".blog-container")
        blogContainer.appendChild(article)
        


    }

    dummieData.forEach((item) => addBlogPosten(item))

    const form = document.querySelector(".formulier-blog")
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        const formulierFieldNaam = document.getElementById("naam").value
        const formulierFieldTitle = document.getElementById("title").value
        const formulierFieldBericht = document.getElementById("bericht").value
        const newObj = {
            name: formulierFieldNaam,
            titel: formulierFieldTitle,
            bericht: formulierFieldBericht,
            }

            formulierFieldNaam.value = ""
            formulierFieldTitle.value = ""
            formulierFieldBericht.value = ""
            
            dummieData = [...dummieData, newObj]

        console.log('test',dummieData);
        dummieData.forEach((item) => addBlogPosten(item))
    });