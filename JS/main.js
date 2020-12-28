$(document).ready(
    $('#pic1').click(function(){
        $('#pictures').hide('slow');
        $('#puzzle').show('slow');
        $('td').css({'background-image': 'url(../image/balloon.png)', 'width': '10em', 'height': '10em'});
        $('.square9').css({'background': 'white'})
        // shuffle();
        finishPuzzle()
    }),


    $('#pic2').click(function(){
        $('#pictures').hide('slow');
        $('#puzzle').show('slow');
        $('td').css({'background-image': 'url(../image/flower.png)', 'width': '12em', 'height': '10em'});
        // $('.square9').css({'background': 'white'})
        // shuffle();
        finishPuzzle()
    }),

    $('#pic3').click(function(){
        $('#pictures').hide('slow');
        $('#puzzle').show('slow');
        $('td').css({'background-image': 'url(../image/clock.jpg)', 'width': '11em', 'height': '10em'});
        // $('.square9').css({'background': 'white'})
        // shuffle();
        finishPuzzle()
    }),

    $('#change').click(function(){
        $('#puzzle').hide('slow');
        $('#pictures').show('slow');
    })
)



function shuffle(){
    for (let row=1 ; row<=3 ; row++) { //For each row in puzzle
        for (let column=1 ; column<=3 ; column++) { //For each column in that row in puzzle
        
            let randomRow = parseInt(Math.random() * 10); //Pick a random row from 1 to 3
            while(randomRow > 3 || randomRow == 0){//in case row is grater than 3 or equals to 0
                randomRow = parseInt(Math.random() * 10); 
            }//end while loop

            let randomColumn = parseInt(Math.random() * 10); //Pick a random column from 1 to 3
            while(randomColumn > 3 || randomColumn == 0){//in case column is grater than 3 or equals to 0
                randomColumn = parseInt(Math.random() * 10);
            }//end while loop

        
            //swipe up the two squares in a puzzle
            squareSwiping('row' + row + 'column' + column, 'row' + randomRow + 'column' + randomColumn); //Swap the look & feel of both squares

        }//end for column
    }//end for row 

}//end of shuffle function


function squareSwiping(square1, square2) {
    //Square1 has class of 2, and Square2 has class of 1

    let template = document.getElementById(square1).className;
    document.getElementById(square1).className = document.getElementById(square2).className;
    document.getElementById(square2).className = template;    

    console.log('class 1'+ document.getElementById(square1).className)
    console.log('class 2'+ document.getElementById(square2).className)
}//end of squareSwiping function


function moveSquare(row, column) {
    let square = document.getElementById('row' + row + 'column' + column).className;
    if (square != 'square9') { 
        //in case white square on right
        if (column < 3) {//1
            if ( document.getElementById('row' + row + 'column' + (column+1)).className == 'square9') {
                squareSwiping('row' + row + 'column' + column, 'row' + row + 'column' + (column+1));
                return;
            }
        }

        //in case white square on left
        if (column > 1) {
            if ( document.getElementById('row' + row + 'column' + (column-1)).className == 'square9') {
                squareSwiping('row' + row + 'column' + column, 'row' + row + 'column' + (column-1));
                return;
            }
        }

        //in case white square on bottom
        if (row < 3) {
            if ( document.getElementById('row' + (row+1) + 'column' + column).className == 'square9') {
                squareSwiping('row' + row + 'column' + column, 'row' + (row+1) + 'column' + column);
                return;
            }
        }
        
        //in case white square on top
        if (row > 1) {
            if ( document.getElementById('row' + (row-1) + 'column' + column).className == 'square9') {
                squareSwiping('row' + row + 'column' + column, 'row' + (row-1) + 'column' + column);
                return;
            }
        }
    }
}//end of moveSquare function.

function finishPuzzle(){
    let squareNumber = 0;
    
    for (let row=1 ;  row<4 ; row++) {
        for(let column=1 ; column<4 ; column++){

            if(document.getElementById('row' + row + 'column' + column) === ('square'+(squareNumber + 1))){
                squareNumber++;
            }

        }//end for column
    }//end for row

    if(squareNumber == 9){
        alert('Good job .. you finished the puzzle')
    }//end if 
}//end of finishPuzzle function
