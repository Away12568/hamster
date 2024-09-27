 const coin = document.querySelector("#coin")
 const scoreEl = document.querySelector("#score")
 const buyUpgrade = document.querySelector("#buyUpgrade")
 let message = document.querySelector("#message")
 const buyBust = document.querySelector("#buyBust")


 let score = 1

 let clickValue = 1

 let UpgradeCoast = 100

 let boostCoast = 50

 let boostDuration = 5000

 coin.addEventListener("click" , () =>  {
    


    score+= clickValue
    scoreEl.textContent = score

 })

 buyUpgrade.addEventListener("click" , () => {

    if(score >= UpgradeCoast) {
        score -= UpgradeCoast

        scoreEl.textContent = score
        clickValue++
        UpgradeCoast =  Math.floor( UpgradeCoast * 1.5)

        buyUpgrade.textContent = `купить улучшение (${UpgradeCoast} коинов)`
        message.textContent = 'вы успешно купили улучшение и потратили'
    }
        else{
                message.textContent = `вы бомж`
        }
 })
 
 buyBust.addEventListener('click' , () => {
    if( score >= boostCoast ) {
        score -= boostCoast
        clickValue *= 2
           message.textContent = 'вы успешно купили улучшение буст'
           setTimeout(() => {
            clickValue = 1
            message.textContent = 'буст закончился'
           }, boostDuration);
    }
    else{
        message.textContent = 'недостачно денег хахаахха бомж'
}
 })
