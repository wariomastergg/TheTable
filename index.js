const bannerImages= ["cinomonRolls.png", "cookieAndPudding.png", "grilledCheesAndSoup.png"]

function changeBanner(){
    const img = document.getElementById("heroImage")
    for(let i = 0; i < bannerImages.length; i++){
        setTimeout(() => {
            img.src = `/images/bannerImages/${bannerImages[i]}`
        }, 6000 * i)
    }
    changeBanner()
}



// changeBanner()
