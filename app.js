document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let width = 10
    let squares = [] 
    let bombAmount = 20
    
    function createBoard() {
        const bombsArray = Array(bombAmount).fill('bomb')
        console.log(bombsArray)
        
        const emptyArray = Array(width*width - bombAmount).fill('valid')
        console.log(emptyArray)
        
        const gameArray = emptyArray.concat(bombsArray)
        console.log(gameArray)
        
        const shuffledArray = gameArray.sort(() => Math.random -0.5)
        console.log(shuffledArray)
        
        for (let i = 0; i < width*width; i ++){
            const square = document.createElement('div')
            square.setAttribute('id', i)
            grid.appendChild(square)
            squares.push(square)
        }
        
    }
    createBoard()
})