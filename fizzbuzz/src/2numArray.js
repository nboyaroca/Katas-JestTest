const numArray = (numList, num) => {
    
    if (numList%num == 0) {
    return (numList.map(div()))
    }

    function div(){
    return (numList/num)
    }
}


module.exports = numArray;
