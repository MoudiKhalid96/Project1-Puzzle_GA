# Puzzle
## INTRODUCTION
This project is required to complete the JDI course from Misk Academy and General Assembly by work individually to get practice of some covered materials taken so far for now. It is about a game called **'Puzzle'** is to be sorted after picking the wanted picture and transfer it to a puzzle.



## TECHNOLOGIES
* HTML 5
* CSS 3
* JavaScript 1.8.5 
* JQuery 3.5.1


## INSTALATION INSTRCUTIONS
1. Fork 
2. Clone 
    * ```$ git clone URL ```
3. Add the changes 
    * ```$ git add .```
4. Save changes 
    * ```$ git commit -m "mgs"```
5. Push work into Github 
    * ```$ git remote add origin BRANCH```
    * ```$ git push -u origin BRANCH```
6. Pull request
    * create apull request in Github site



## STRUCTURE
    |--CSS
    |   `--puzzle-style.css
    |
    |--HTML
    |   `--puzzle.html
    |
    |--image
    |   |--ballon.png
    |   |--clock.jpg
    |   |--flower.png
    |   `--puzzle-icon.png
    |
    |--JS
    |   `--main.js
    |
    `--README.md


## FEATURES
* Pick the puzzle you want to play with
* Shuffle the puzzle many times

## WIREFRAME
![wireframe](Puzzle-wireframe.png) 

## CODE

### 1. HTML
```html
<div id='pictures'>
            <h3>Pick a picture to create puzzle</h3>
            
            <ul>
                <li id='pic1' class="border"><img src="../image/balloon.png" alt="balloon"></li>
                <li id='pic2' class="border"><img src="../image/flower.png" alt="flower"></li>
                <li id='pic3' class="border"><img src="../image/clock.jpg" alt="chair"></li>
            </ul> 
        </div>

        <div id="puzzle">

            <h3 id="change">Click here to pick another picture</h3>

            <main>
                <table>
                    <tr>
                        <td class='square1' id='row1column1' onClick='moveSquare(1 , 1)'></td>
                        <td class='square2' id='row1column2' onClick='moveSquare(1 , 2)'></td>
                        <td class='square3' id='row1column3' onClick='moveSquare(1 , 3)'></td>
                    </tr>
                    <tr>
                        <td class='square4' id='row2column1' onClick='moveSquare(2 , 1)'></td>
                        <td class='square5' id='row2column2' onClick='moveSquare(2 , 2)'></td>
                        <td class='square6' id='row2column3' onClick='moveSquare(2 , 3)'></td>
                    </tr>
                    <tr>
                        <td class='square7' id='row3column1' onClick='moveSquare(3 , 1)'></td>
                        <td class='square8' id='row3column2' onClick='moveSquare(3 , 2)'></td>
                        <td class='square9' id='row3column3' onClick='moveSquare(3 , 3)'></td>
                    </tr>
                </table>
                <button type="button" onclick="shuffle()">Reshuffle</button>
            </main>

        </div>
```
### 2. CSS

```css
body{
    background-color: rgb(187, 176, 176);
    transition-duration: 1s;
}    
ul li{
    float: left;
    list-style-type: none;
    margin: 5%;
}

img{
    width: 9em;
    height: 9em;
    border-radius: 3px;
    margin: 1em;
    cursor: pointer;
}

img:hover{
    border: 2px solid black;
    transition-duration: 1s;
}

td{
    display: table-cell;
    border: 1px solid black;
    background-color: white;
}

.square1{
    background-position: left top;
}
.square2{
    background-position: center top;
}

.square3{
    background-position: right top;
}

.square4{
    background-position: left center;
}

.square5{
    background-position: center center;
}

.square6{
    background-position: right center;
}

.square7{
    background-position: left bottom;
}

.square8{
    background-position: center bottom;
}

.square9{
    background: none;    
}

#change{
    cursor: pointer;
    transition-duration: 1s;
}

#change:hover{
    text-shadow: 2px 2px 10px black;
    transition-duration: 1s;
}
 
#puzzle{
    display: none;
}

h3{
    font-size: 3em;
    display: flex;
    justify-content: center;
}

main{
    display: flex;
    justify-content: center;
}

button{
    margin-left: 1em;
    height: 30px
    
}

.border{
    border-radius: 3px;
}
```

### 3. JavaScript and JQuery

```javascript
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
                    $('.square9').css({'background': 'white'})
                    // shuffle();
                    finishPuzzle()
                }),

                $('#pic3').click(function(){
                    $('#pictures').hide('slow');
                    $('#puzzle').show('slow');
                    $('td').css({'background-image': 'url(../image/clock.jpg)', 'width': '11em', 'height': '10em'});
                    $('.square9').css({'background': 'white'})
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
                let template = document.getElementById(square1).className;
                document.getElementById(square1).className = document.getElementById(square2).className;
                document.getElementById(square2).className = template;
                
                //Square1 has class of 2, and Square2 has class of 1
            }//end of squareSwiping function


            function moveSquare(row, column) {
                let square = document.getElementById('row' + row + 'column' + column).className;
                if (square != 'square9') { 
                    //in case white square on right
                    if (column < 3) {
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
                let counter = 0;
                let squareNumber = 0;
                for (let row=1 ;  row<4 ; row++) {
                    for(let column=1 ; column<4 ; column++){

                        if(document.getElementById('row' + row + 'column' + column) === ('square'+(squareNumber + 1))){
                            counter ++;
                            squareNumber++;
                        }
                    }
                    
                }

                if(squareNumber == 9){
                    alert('Good job .. you finished the puzzle')
                }
            }
            
```