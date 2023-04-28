$(document).ready(function(){

    let numberOfColors = 3

    Start_The_Game(numberOfColors)

    $("#easy").click(function(){
        numberOfColors = 3
        Start_The_Game(numberOfColors)
    })

    $("#hard").click(function(){
        numberOfColors = 6
        Start_The_Game(numberOfColors)
    })

    $("#again").click(function(){
        Start_The_Game(numberOfColors)
    })

    function Start_The_Game(numberOfColors){

        let colors = []

        $(".container").html("")

        for (let index = 0; index < numberOfColors; index++) {
            
            colors.push(Create_New_Color())
            
        }

        let colorToFind = colors[Math.floor(Math.random() * colors.length)]

    $(".color-rgb").text(colorToFind)
 
    console.log(colors)

    console.log(colorToFind)

    for (let index = 0; index < colors.length; index++) {
        
        $(".container").append(`
            <div class="box" style="background-color:${colors[index]}"></div>
        `)
        
    }

    $(".box").click(function(){
        let clickedColor = $(this).css("background-color")

        if(colorToFind === clickedColor){
            $(".box").css({
                "background-color":clickedColor,
                "opacity":1

            })

            Swal.fire({
                icon: 'success',
                title: 'Congratulations! You found color',
              })

        }else{
            $(this).css("opacity",0)

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'error',
                title: 'Try again'
              })

        }
    })

    }


    function Create_New_Color(){
          
        let r = parseInt(Math.random() * 255)
        let g = parseInt(Math.random() * 255)
        let b = parseInt(Math.random() * 255)

        let rgb = `rgb(${r}, ${g}, ${b})`

        return rgb

    }



})