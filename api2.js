console.log("jio")
// my key = 621fc6a3e4a4479d9429a9168f2fc497
let id1 = document.getElementById("id1")

function newsApi() {
    url = 'http://newsapi.org/v2/top-headlines?sources=bbc-news&apikey=621fc6a3e4a4479d9429a9168f2fc497'
    fetch(url).then(function(response) {
        console.log(response, "response")
        return response.text()
        .then(function (data) {
            // console.log(data[])
            let articles = JSON.parse(data)
            console.log(articles.articles, "articles")
            let Articles = articles.articles
            Articles.forEach(function (element, index) {
                let news =
                    `<p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#Collapse${index}" role="button" 
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
newsApi();
// xhr.onreadystatechange = function (params) {
//     console.log("ready state is", xhr.readyState)
// }
// xhr.onload = function () {
//     if (this.status === 200) {
//         let json = JSON.parse(this.responseText)
//         let articles = json.articles;

//         console.log(articles)
//     } else {

//         console.log("error")
//     }
// }
// xhr.send();
