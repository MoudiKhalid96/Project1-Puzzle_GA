$(document).ready(
    // When click on the first picture
    $('#pic1').click(function(){
        $('#pictures').hide('slow');
        $('#puzzle').show('slow');
        $('.square1, .square2, .square3, .square4, .square5, .square6, .square7, .square8, square9').css({'background-image': 'url(../image/balloon.png)', 'width': '10em', 'height': '10em'});
        // shuffle();
    }),

    // When click on the second picture
    $('#pic2').click(function(){
        $('#pictures').hide('slow');
        $('#puzzle').show('slow');
        $('.square1, .square2, .square3, .square4, .square5, .square6, .square7, .square8, square9').css({'background-image': 'url(../image/flower.png)', 'width': '10em', 'height': '10em'});
        // shuffle();
    }),

    // When click on the third picture
    $('#pic3').click(function(){
        $('#pictures').hide('slow');
        $('#puzzle').show('slow');
        $('.square1, .square2, .square3, .square4, .square5, .square6, .square7, .square8, square9').css({'background-image': 'url(../image/clock.jpg)', 'width': '10em', 'height': '10em'});
        // shuffle();
    }),

    // When user want to change the picture
    $('#changePicture').click(function(){
        $('#puzzle').hide('slow');
        $('#pictures').show('slow');
    })
)

// To shuffle/mix the squares on the puzzle
function shuffle(){
    for (let row=1 ; row<=3 ; row++) { //For each row in puzzle
        for (let column=1 ; column<=3 ; column++) { //For each column in that row in puzzle
        
            let randomRow = parseInt(Math.random() * 10); //random row from 1 to 3
            //in case row is grater than 3 or equals to 0
            while(randomRow > 3 || randomRow == 0){
                randomRow = parseInt(Math.random() * 10); 
            }

            let randomColumn = parseInt(Math.random() * 10); //random column from 1 to 3
            //in case column is grater than 3 or equals to 0
            while(randomColumn > 3 || randomColumn == 0){
                randomColumn = parseInt(Math.random() * 10);
            }

        
            //swipe up the two squares in a puzzle
            squareSwiping('row' + row + 'column' + column, 'row' + randomRow + 'column' + randomColumn); 

        }//end for column
    }//end for row 

}//end of shuffle function



function squareSwiping(square1, square2) {
    //Square1 has class and picture of 2, and Square2 has class and picture of 1

    //swip image
    let template = document.getElementById(square1).style.backgroundImage;
    document.getElementById(square1).style.backgroundImage = document.getElementById(square2).style.backgroundImage;
    document.getElementById(square2).style.backgroundImage = template;

    //swip position (class name)
    let template2 = document.getElementById(square1).className;
    document.getElementById(square1).className = document.getElementById(square2).className;
    document.getElementById(square2).className = template2;
    
}//end of squareSwiping function


//this function is to move squares from point to other
function moveSquare(row, column) {
    let square = document.getElementById('row' + row + 'column' + column).className;

    //if user clicks on square9 .. nothing will happen
    if (square != 'square9') { 

        //in case white square (square9) on right
        if (column < 3) {
            if ( document.getElementById('row' + row + 'column' + (column+1)).className == 'square9') {
                squareSwiping('row' + row + 'column' + column, 'row' + row + 'column' + (column+1));
                return;
            }
        }

        //in case white square (square9) on left
        if (column > 1) {
            if ( document.getElementById('row' + row + 'column' + (column-1)).className == 'square9') {
                squareSwiping('row' + row + 'column' + column, 'row' + row + 'column' + (column-1));
                return;
            }
        }

        //in case white square (square9) on bottom
        if (row < 3) {
            if ( document.getElementById('row' + (row+1) + 'column' + column).className == 'square9') {
                squareSwiping('row' + row + 'column' + column, 'row' + (row+1) + 'column' + column);
                return;
            }
        }
        
        //in case white square (square9) on top
        if (row > 1) {
            if ( document.getElementById('row' + (row-1) + 'column' + column).className == 'square9') {
                squareSwiping('row' + row + 'column' + column, 'row' + (row-1) + 'column' + column);
                return;
            }
        }
    }
}//end of moveSquare function.