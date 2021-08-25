let id1 = document.getElementById("id1")

let ip = document.getElementById("input")
let Reuters = document.getElementById("Reuters")
let Politico = document.getElementById("Politico")
let bbc = document.getElementById("bbc")
let cnn = document.getElementById("cnn")
let toi = document.getElementById("toi")
let gn = document.getElementById("gn")
bbc.addEventListener("click", () => {
    document.getElementById("input").value = bbc.innerText
    var1 = bbc.innerText
    id1.innerHTML = ""
    newsApi(var1);
    
})
Reuters.addEventListener("click", () => {
    document.getElementById("input").value = Reuters.innerText
    var1 = Reuters.innerText
    id1.innerHTML = ""
    newsApi(var1);
    
})
Politico.addEventListener("click", () => {
    document.getElementById("input").value = Politico.innerText
    var1 = Politico.innerText
    id1.innerHTML = ""
    newsApi(var1);
})
cnn.addEventListener("click", () => {
    document.getElementById("input").value = cnn.innerText
    var1 = cnn.innerText
    id1.innerHTML = ""
    newsApi(var1);
})
toi.addEventListener("click", () => {
    document.getElementById("input").value = toi.innerText
    var1 = toi.innerText
    id1.innerHTML = ""
    newsApi(var1);
})
gn.addEventListener("click", () => {
    document.getElementById("input").value = gn.innerText
    var1 = gn.innerText
    id1.innerHTML = ""
    newsApi(var1);
})
    
function newsApi(var1) {
    url = `http://newsapi.org/v2/top-headlines?sources=${var1}&apikey=apikey`
    fetch(url).then(function(response) {
        console.log(response, "response")
        return response.text()
        .then(function (data) {
            let articles = JSON.parse(data)
            console.log(articles.articles, "articles")
            let Articles = articles.articles
            Articles.forEach(function (element, index) {
                let news =
                    `<p>
                <a class="btn btn-warning" data-bs-toggle="collapse" href="#Collapse${index}" role="button" 
                    aria-expanded="false" aria-controls="Collapse${index}"><b>${element.author}: </b> ${element.title}</a>
             </p>
        
                <div class="row">
                <div class="col">
                    <div class="collapse multi-collapse"  id="Collapse${index}">
                        <div class="card card-body">
                                   ${element.content} <a href="${element.url}" target= "_blank">Read more...</a>
                        </div>
                    </div>
                </div>
                </div>`

                id1.innerHTML += news
            });
        })
    })
}

