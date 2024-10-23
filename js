let main = document.getElementById("main");
let arr = [
    "https://w0.peakpx.com/wallpaper/206/587/HD-wallpaper-virat-kohli-71st-century-kholi-kissing-lockit-kholi-lockit-virat-kholi-cricketer-india-thumbnail.jpg",
    "https://images.bhaskarassets.com/web2images/521/2019/08/05/0521_stym.jpg",
    "https://w0.peakpx.com/wallpaper/479/722/HD-wallpaper-ms-dhoni-india-world-cup-cricket.jpg",
    "https://c8.alamy.com/comp/P6X0FP/emirates-old-trafford-manchester-uk-3rd-july-2018-international-twenty20-cricket-england-versus-india-kl-rahul-of-india-celebrates-as-he-reaches-his-century-and-guides-india-to-victory-credit-action-plus-sportsalamy-live-news-P6X0FP.jpg",
    "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTNAwUwxw4OlNLep5sU4Ap8KZVSdJ0yM-5hpLksS3rGbdOB3EOmV76BsVJZvQnbRk5MPxNPzyWuE5cW0h4"
];

let s = "";
for (let i = 1; i <= 60; i++) {
    let r = Math.floor(Math.random() * arr.length);
    s += `<div class="box">
            <img src="${arr[r]}">
          </div>`;
}

main.innerHTML = s;

// Event listener for changing images randomly on click
main.addEventListener("click", function () {
    let boxes = document.querySelectorAll(".box img");
    boxes.forEach((img) => {
        let r = Math.floor(Math.random() * arr.length);
        img.src = arr[r];
    });
});




