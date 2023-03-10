//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click', goFetch)

const imageYes = document.getElementById('#imgs')
const videoYes = document.getElementById('#vids')
const whatToHide = document.querySelector('.hidden')

// function isItImage() {
//     imageYes.classList.add('hiddenAgain')
//     videoYes.classList.toggle('hiddenAgain')
// }
// function isItVideo() {
//     videoYes.classList.add('hiddenAgain')
//     imageYes.classList.toggle('hiddenAgain')
// }
function hideMe() {
    whatToHide.classList.toggle('hidden')
}

// function visibleMe() {
//     document.getElementById('visible').hidden = "hidden";
// }

// function hideMeNot() {
//     whatToHide.classList.toggle('visible')
// }

function goFetch() {

    const choice = document.querySelector('input').value

    const url = `https://api.nasa.gov/planetary/apod?api_key=fXy91vPpgphrr6uy2QyZSRdFX2tPIBoeqAmAOvTi&date=${choice}`

    // const urlFetch = "https://api.nasa.gov/planetary/apod?api_key=${choice}"

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.media_type === 'video') {

                document.querySelector('iframe').src = data.url
                // isItImage()
                document.querySelector('iframe').style.display = 'block'   // Show img element
                document.querySelector('img').style.display = 'none'   // Hide video elemen

            } else if (data.media_type === 'image') {
                document.querySelector('img').src = data.hdurl
                // isItVideo()

                document.querySelector('img').style.display = 'block'   // Show img element
                document.querySelector('iframe').style.display = 'none'   // Hide video elemen

            }

            document.querySelector('#explanation').innerText = data.explanation
            document.querySelector('#theDate').innerText = data.date
            document.querySelector('#title').innerText = data.title
            document.querySelector('#copyright').innerText = data.copyright
        })
        .catch(err => {
            console.log(`error ${err}`)

        })

    hideMe()

}



