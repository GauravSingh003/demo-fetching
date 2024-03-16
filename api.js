let URL = "https://picsum.photos/200/300";

// function hello(){
//     document.write("hello here!");
// }
const hello = async () => {
    console.log("fetchinf data.....");
    let newData = await fetch(URL);
    console.log(newData)
}
