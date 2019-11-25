
//pass by value
function board(boardName)
{
    console.log("Board Name"+boardName);
}
var boardName="Javascript";
board(boardName);

//PAss by reference
function board(boardName)
{
    boardName.name="New Board";
    console.log("Board Name1 "+ boardName.name);
}
var boardName=
{
    "name":"Javascript1"
};
console.log(boardName.name);
board(boardName);
console.log(boardName.name);
