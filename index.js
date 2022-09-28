const pianoKeys = document.querySelectorAll('.key')

//in our js file we're gonna pick them up (24 mp3 files)


function playSound(newUrl){
    console.log(newUrl)
    new Audio(newUrl).play()
  
}


pianoKeys.forEach((key, i)=>{ //looping to create a new url and then passing it to into playSound function
  const number = i < 9 ? '0' + (i + 1) : (i + 1)
  const newUrl = '24-piano-keys/key' + number + '.mp3'
  key.addEventListener('click', ()=>playSound(newUrl))


 })

