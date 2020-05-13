var script = document.createElement("script");
script.src = 'https://unpkg.com/showdown/dist/showdown.min.js';  
document.body.appendChild(script);

var converter;


document.addEventListener('DOMContentLoaded',()=>{

    converter = new showdown.Converter();

});

function Blog(path) {
    this.path = path;
    this.articles = [];
}

Blog.prototype.add = function(article){
    if(article.html == undefined){

        fetch(this.path + article.path + "/" + article.title + ".md")
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


document.addEventListener('DOMContentLoaded',()=>{

    blog = new Blog("https://ream.systems/blog/");

    var articles = [
        {
            title:'example',
            description:'Example blog post!',
            date:'13/5/2020',
            path:'example',
            img:'images/car.jpg'
        }
    ]

    articles.forEach(article =>{
        blog.add(article);
    })

    console.log(blog.get('example').html);

    
})


