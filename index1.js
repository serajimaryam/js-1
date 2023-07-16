let color_array ='blue,red,green,black'
let word=''

for (i=0;i<color_array.length;i++){
    if (color_array[i]!=','){
        word=word+=color_array[i]
    }
    else{
        word=word
        i++
    }
       
}
console.log(word)
