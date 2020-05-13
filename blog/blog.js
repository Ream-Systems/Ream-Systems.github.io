const converter = new showdown.Converter();
var articles = [
    {
        title:'example',
        date:'13/5/2020',
        path:'example/example.html'
    }
]

function read(path){
    fetch("https://ream.systems/blog/" + path)
    .then(response => {
        console.log(response.text());
    });
}

function convert(text){
    return converter.makeHtml(text);
}

