

fetch('https://ream.systems/blog/articles.json').then((response)=>{
    return response.text();
}).then(text =>{
    
    
    const articles = JSON.parse(text).articles;

    console.log(articles);
        
    var script = document.createElement("script");
    script.src = 'https://unpkg.com/showdown/dist/showdown.min.js';  
    document.body.appendChild(script);

    var converter;

    function Blog(path) {
        this.path = path;
        this.articles = [];
    }

    Blog.prototype.add = async function(article){

        this.articles.push(article);

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
        
                    for(var i = 0;i<articles.length;i++){

                        await blog.add(articles[i]);
                    
                    }

                }
            
                addArticles().then(()=>{
                    
                    for(var i = 0;i<blog.articles.length;i++){

                        console.log('cool');
                        
                        var elem = document.createElement('div');

                        if(!window.location.href.includes('blog')){

                            elem.classList.add('case');
                            elem.innerHTML = '<div class="row"><div class="col-md-6 col-lg-6 col-xl-8 d-flex"><a href="https://ream.systems/articles#'+ blog.articles[i].title +'" class="img w-100 mb-3 mb-md-0" style="background-image: url(' + blog.path + '/' + blog.articles[i].path + '/' + blog.articles[i].img + ');"></a></div><div class="col-md-6 col-lg-6 col-xl-4 d-flex"><div class="text w-100 pl-md-3"><span class="subheading">' + blog.articles[i].description + '</span><h2><a href="https://ream.systems/articles#'+ blog.articles[i].title +'">'+ blog.articles[i].title + '</a></h2><div class="meta"><p class="mb-0"><a>'+ blog.articles[i].date +'</a></p></div></div></div></div>';    

                        } else {

                            elem.classList.add('col-md-4');
                            elem.classList.add('d-flex');
                            elem.classList.add('ftco-animate');
                            elem.innerHTML = '<div class="blog-entry justify-content-end"><a href="https://ream.systems/articles#'+ blog.articles[i].title + '" class="block-20" style="background-image: url(' + blog.path + '/' + blog.articles[i].path + '/' + blog.articles[i].img + ');"></a><div class="text p-4 float-right d-block"><div class="topper d-flex align-items-center"><div class="one py-2 pl-3 pr-1 align-self-stretch"><span class="day">'+ blog.articles[i].date.split('-')[0] + '</span></div><div class="two pl-0 pr-3 py-2 align-self-stretch"><span class="yr">' + blog.articles[i].date.split('-')[2] + '</span> <span class="mos">' + blog.articles[i].date.split('-')[1] + '</span></div></div><h3 class="heading mb-3"><a href="https://ream.systems/articles#'+ blog.articles[i].title + '">'+ blog.articles[i].title +'</a></h3><p>'+ blog.articles[i].description+'</p><p><a href="https://ream.systems/articles#'+ blog.articles[i].title + '" class="btn-custom"><span class="ion-ios-arrow-round-forward mr-3"></span>Read more</a></p></div></div>';

                        }
                        
                        document.getElementById('blog').appendChild(elem);

                    }
                });
            
                clearInterval(check);
            }
        } catch(err){}
    }, 100);
    
})

