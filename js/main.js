/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

let divs = document.querySelectorAll("div")
let images = document.querySelectorAll("img")
let spanCount = document.querySelector('#para span')
let countImg = 0;
spanCount.innerHTML = countImg;
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
for (let i = 0; i < images.length; i++) {

    images[i].addEventListener("mouseenter", function() {
        divs[i].classList.toggle("hover-img")
    })

    images[i].addEventListener("mouseleave", function() {
        divs[i].classList.toggle("hover-img")
    })

    images[i].addEventListener("click", function() {
        divs[i].classList.toggle("select")

        if (divs[i].classList.contains("select")) {
            countImg++
            spanCount.innerHTML = countImg;
        } else {
            countImg--
            spanCount.innerHTML = countImg;
        }
    })
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/