const images = [{
    src: "https://i.pinimg.com/564x/5a/79/db/5a79db71e9de596e2daa23809a2a3d21.jpg?width=100&height=100",
    alt: "Cool picture 1",
    date: "2024-05-01"
}, {
    src: "https://i.pinimg.com/564x/c9/7e/fc/c97efc6b5caae44c7df06a5006b00dd4.jpg",
    alt: "Cool picture 2",
    date: "2024-05-02"
}, {
    src: "https://i.pinimg.com/564x/8d/98/c3/8d98c3dcbd41f14ff166fae9c6563ea6.jpg",
    alt: "Cool picture 3",
    date: "2024-05-03"
}, {
    src: "https://i.pinimg.com/564x/b1/4d/f3/b14df3730130cfd833ae8d7a6384ceca.jpg",
    alt: "Cool picture 4",
    date: "2024-05-04"
}, {
    src: "https://i.pinimg.com/564x/0e/26/6b/0e266b96a891acc6be86cf8175c81c13.jpg",
    alt: "Cool picture 5",
    date: "2024-05-05"
}, {
    src: "https://i.pinimg.com/564x/90/02/7c/90027c4e9a868bfee5414fab82c21e82.jpg",
    alt: "Cool picture 6",
    date: "2024-05-06"
}, {
    src: "https://i.pinimg.com/564x/1d/73/08/1d73084ed0037f6f86b391f6619947d2.jpg",
    alt: "Cool picture 7",
    date: "2024-05-07"
}, {
    src: "https://i.pinimg.com/564x/b3/26/82/b32682f877503d3319e2c3579e1b5bab.jpg",
    alt: "Cool picture 8",
    date: "2024-05-08"
}, {
    src: "https://i.pinimg.com/564x/55/c4/d1/55c4d1290e50050793687dcfee9fb6f1.jpg",
    alt: "Cool picture 9",
    date: "2024-05-09"
}, {
    src: "https://i.pinimg.com/564x/63/a2/f6/63a2f6605450f6d66b9db2779cc4a2b0.jpg",
    alt: "Cool picture 10",
    date: "2024-05-10"
}, {
    src: "https://i.pinimg.com/564x/8b/db/a4/8bdba498693d0917b52ecbf46b8ed4b6.jpg",
    alt: "Cool picture 11",
    date: "2024-05-11"
}, {
    src: "https://i.pinimg.com/564x/39/2c/e1/392ce10eda2e47bf8af9f6ffc73273d9.jpg",
    alt: "Cool picture 12",
    date: "2024-05-12"
}, {
    src: "https://i.pinimg.com/564x/99/66/7c/99667c43607441b94b1f8038c1efcb7d.jpg",
    alt: "Cool picture 13",
    date: "2024-05-13"
}, {
    src: "https://i.pinimg.com/564x/b9/dc/8a/b9dc8ad309dad16a2a8d5837fcc6b733.jpg",
    alt: "Cool picture 14",
    date: "2024-05-14"
}, {
    src: "https://i.pinimg.com/564x/12/aa/32/12aa32979c82b4e588635fd022f4fce0.jpg",
    alt: "Cool picture 15",
    date: "2024-05-15"
}, {
    src: "https://i.pinimg.com/564x/43/b5/4c/43b54c9e8828e25f3245fcd3a289fbb9.jpg",
    alt: "Cool picture 16",
    date: "2024-05-16"
}];
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const modalImage = document.querySelector(".modalImage");
const modalText = document.querySelector(".modalText");
const modalDate = document.querySelector(".modalDate");
const headline = document.querySelector("h1");
const space1 = document.createElement("br");
const space2 = document.createElement("br");
headline.append(space1);
headline.append(space2);
images.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.alt = image.alt;
    imgElement.width = 450;
    imgElement.height = 450;
    headline.append(imgElement);


    imgElement.addEventListener('click', () => {
        modal.style.display = "flex";
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modalImage.width = 150;
        modalImage.height = 150;
        modalText.textContent = image.alt;
        modalDate.textContent = new Date(image.date);
    });
});
close.addEventListener('click', () => {
    modal.style.display = "none";
});