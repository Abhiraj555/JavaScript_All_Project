const form= document.querySelector('form')
// this usecase will give you empty value
// const height = parseInt(documment.querySelector('#height').value)


form.addEventListener('submit', function(e){
    e.preventDefault();

    //>this value is String so wrape it:- document.querySelector('#height').value  
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#result')
    if(height==='' || weight==='' || height<0 || weight<0  || isNaN(height) || isNaN(weight)){
        result.innerHTML = `Please Enter a valid Height${height} and Weight ${weight} `
    }else{
        const Bmi =(weight/(height*height)/10000).toFixed(2)
        //show the result
    result.innerHTML = `Your BMI is ${Bmi}`
    }
    
    
})
