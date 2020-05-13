const converter = new showdown.Converter();
var articles = [
    {
        title:'example',
        date:'13/5/2020',
        path:'example/example.md'
    }
]

read(articles[0].path);

function read(path){
    fetch("https://ream.systems/blog/" + path)
    .then(response => {
        convert(response.text());
    });
}

function convert(text){
    console.log(converter.makeHtml(text));
}

