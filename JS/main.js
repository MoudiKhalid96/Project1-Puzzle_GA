$(document).ready(
    // When user want to change the picture
    $('#changePicture').click(function () {
        $('#puzzle').hide('slow');
        $('#pictures').show('slow');
        reset();
    })
)

$('li').click(function () {
    $(this).each(function () {
        switch (this.id) {
            case 'pic1':
                $('.square1, .square2, .square3, .square4, .square5, .square6, .square7, .square8').css({ 'background-image': 'url(image/balloon.png)' })
                break;

            case 'pic2':
                $('.square1, .square2, .square3, .square4, .square5, .square6, .square7, .square8').css({ 'background-image': 'url(image/flower.png)' })
                break;
            case 'pic3':
                $('.square1, .square2, .square3, .square4, .square5, .square6, .square7, .square8').css({ 'background-image': 'url(image/clock.jpg)' })
                break;
        }

        $('#pictures').hide('slow');
        $('#puzzle').show('slow');
    })
})

// To shuffle/mix the squares on the puzzle
function shuffle() {
    for (let row = 1; row <= 3; row++) { //For each row in puzzle
        for (let column = 1; column <= 3; column++) { //For each column in that row in puzzle

            let randomRow = parseInt(Math.random() * 3) + 1; //random row from 1 to 3
            let randomColumn = parseInt(Math.random() * 3) + 1; //random column from 1 to 3

            //swipe up the two squares in a puzzle
            squareSwiping('row' + row + 'column' + column, 'row' + randomRow + 'column' + randomColumn);

        }
    }

}

//swipe up the two squares in a puzzle (called inside function `shuffle` and `moveSquare`)
function squareSwiping(square1, square2) {
    //Square1 has class and picture of 2, and Square2 has class and picture of 1

    //swip image
    let template = $(`#${square1}`).css("background-image");
    $(`#${square1}`).css("background-image", $(`#${square2}`).css("background-image"));
    $(`#${square2}`).css("background-image", template);



    //swip position (class name)
    let template2 = $(`#${square1}`).attr('class');
    $(`#${square1}`).attr('class', $(`#${square2}`).attr('class'));
    $(`#${square2}`).attr('class', template2);

}//end of squareSwiping function


//this function is to move squares from point to other
function moveSquare(row, column) {
    let square = $(`#row${row}column${column}`).attr('class');

    //if user clicks on square9 .. nothing will happen
    // unless it's not the square with class `square9`
    if (square != 'square9') {

        //in case white square (square9) on right
        if (column < 3) {
            if ($(`#row${row}column${column + 1}`).attr('class') == 'square9') {
                squareSwiping('row' + row + 'column' + column, 'row' + row + 'column' + (column + 1));
                return;
            }
        }

        //in case white square (square9) on left
        if (column > 1) {
            if ($(`#row${row}column${column - 1}`).attr('class') == 'square9') {
                squareSwiping('row' + row + 'column' + column, 'row' + row + 'column' + (column - 1));
                return;
            }
        }

        //in case white square (square9) on bottom
        if (row < 3) {
            if ($(`#row${row + 1}column${column}`).attr('class') == 'square9') {
                squareSwiping('row' + row + 'column' + column, 'row' + (row + 1) + 'column' + column);
                return;
            }
        }

        //in case white square (square9) on top
        if (row > 1) {
            if ($(`#row${row - 1}column${column}`).attr('class') == 'square9') {
                squareSwiping('row' + row + 'column' + column, 'row' + (row - 1) + 'column' + column);
                return;
            }
        }
    }
}//end of moveSquare function.