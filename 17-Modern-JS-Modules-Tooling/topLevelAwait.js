// modules allow await to work in top level code

try {
    let [data] = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
    console.log(data);
} catch (err) {
    console.error("Error:", err.message);
}
