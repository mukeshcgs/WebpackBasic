const posts = [
    {title:'Post 1', body : '1'},
    {title:'Post 2', body : '2'},
];

function getPosts(){
    setTimeout(() => {
        let output ='';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
getPosts();