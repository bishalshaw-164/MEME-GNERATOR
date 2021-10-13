const canvas = new fabric.Canvas('canvas', {
    width: 500,
    height: 500,
    backgroundColor: '#fff'
})


let file = document.getElementById('file')

file.addEventListener('change', () => {
    let img = file.files[0]
    if (!img) {
        return
    }
    let reader = new FileReader()

    reader.onload = function (e) {
        let data = reader.result
        fabric.Image.fromURL(data, function (img) {
            canvas.add(img)
            canvas.add(img)
            if (img.width > canvas.width) {
                img.scaleToWidth(canvas.width)
            }
        })
    }

    reader.readAsDataURL(img)
})
 
let addText = document.getElementById('add')
let text = document.getElementById('caption')
let color = document.getElementById('color')
addText.addEventListener('click',function(){

    let _text = new fabric.Text(text.value,{
        left: 100, 
        top: 100,
        fontSize: 30,
        fill: color.value
    });
    canvas.add(_text)
})
window.addEventListener('keydown',(e)=>{
    if(e.key=='Delete'){
        canvas.remove(canvas.getActiveObject())
    }
})

let save = document.getElementById('save');
save.addEventListener('click',()=>{
    let data = canvas.toDataURL()
    let link = document.createElement('a')
    link.href = data
    link.download = 'img.png'
    link.click()
})

// let file = document.getElementById('file')

// file.addEventListener('change', function(){
//     let img = file.files[0]
//     if(!img){
//         return
//     }
//     let reader = new FileReader()

//     reader.onload = function(e){
//         let data = reader.result
//         fabric.Image.fromURL(data, function(img){
//             canvas.add(img)
//             if(img.width > canvas.width){
//                 img.scaleToWidth(canvas.width)
//             }
//         })
//         console.log(data)
//     }

//     reader.readAsDataURL(img)
// })
