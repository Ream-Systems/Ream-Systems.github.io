
var script = document.createElement("script");
script.src = 'https://unpkg.com/showdown/dist/showdown.min.js';  
document.body.appendChild(script);

var converter;

function Blog(path) {
    this.path = path;
    this.articles = [];
}

Blog.prototype.add = async function(article){

    if(article.html == undefined){

        await fetch(this.path + "/" + article.path + "/" + article.title + ".md")
        .then(response => {
            return response.text();
        }).then(text =>{
            article.html = convert(text);
            this.articles.push(article);
        })

    } else this.articles.push(article);

}

Blog.prototype.indexOf = function(title){
    var found = -1;

    for(var i = 0;i < this.articles.length;i++){
        if(this.articles[i].title == title) {
            found = i;
            break;
        }
    }

    if(found != -1) return index;
    else return false;
    
}


Blog.prototype.get = function(title){

    var index = this.indexOf(title);

    if(index) return this.articles[index];
    else return false;
    
}


Blog.prototype.remove = function(title){
    var index = this.indexOf(title);

    if(index) {
        this.articles.splice(index, 1);
        return true;
    } else return false;
    
}


function convert(text){
    return converter.makeHtml(text);
}



var check = setInterval(function() {
    try{
        if (showdown) {
            converter = new showdown.Converter();

            blog = new Blog("https://ream.systems/blog");

            async function addArticles(){
    
                var name = window.location.href.split('#')[1];

                await blog.add({
                    title:name,
                    path:name
                });

            }
           
            addArticles().then(()=>{

                var titles = document.getElementsByClassName('articleTitle');

                console.log(titles);

                for(var i = 0;i<titles.length;i++){
                    titles[i].innerHTML = blog.articles[0].title;
                }

                document.getElementById('article').innerHTML = blog.articles[0].html;

            });
           
            clearInterval(check);
        }
    } catch(err){}
 }, 100);