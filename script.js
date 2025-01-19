

// function createPyramid(rows) {
//     const maxRows = window.innerWidth <= 425 ? Math.min(rows, 14) : rows;
//     const pyramid = document.getElementById('pyramid');
//     pyramid.innerHTML = ''; 

//     for(let i = 0; i < maxRows; i++) {
//         const row = document.createElement('div'); 
//         row.className ='row'; 
//         for (let j = 0; j <= i; j++) {
//             const block = document.createElement('div'); 
//             block.className = 'block'; 
//             row.appendChild(block); 
//         }
//     pyramid.appendChild(row);
//     }
// }



// let animationTime = null; 
// let currentRow = 0; 
// let isAnimating = false;
// function startAnimation() {
//     if (isAnimating) {
//         return; 
//     }
//     isAnimating = true; 
//     const rows = document.querySelectorAll('.row'); 
//     const color = document.getElementById('colorPicker').value; 
//     const delay = parseInt(document.getElementById('delayInput').value, 10) || 500; 
//     animationTime = setInterval(function (){
//         for (let i = 0; i < rows.length; i++) {
//             const blocks = rows[i].querySelectorAll('.block');
//             blocks.forEach(function (block){
//                 block.style.backgroundColor = 'white'; 
//             })
//         }
//         for (let i = 0; i <= currentRow; i++) {
//             const blocks = rows[i].querySelectorAll('.block');
//             blocks.forEach(function (block){
//                 block.style.backgroundColor = color; 
//             })
//         }
//         currentRow++;
//         if (currentRow >= rows.length) {
//             currentRow = 0;
//         }
//     }, delay);
// }

// function stopAnimation() {
//     clearInterval(animationTime); 
//     isAnimating =false; 
// }


// function updatePyramid() {
//     stopAnimation();
//     currentRow = 0;

//     let rows = parseInt(document.getElementById('rowsInput').value, 10) || 5;


//     if (window.innerWidth <= 425) {
//         rows = Math.min(rows, 14);
//         document.getElementById('rowsInput').value = rows; 
//     }

//     createPyramid(rows);
// }

// document.getElementById('colorPicker').addEventListener('input', function () {
//     stopAnimation(); 
//     currentRow = 0; 
//     const rows = parseInt(document.getElementById('rowsInput').value, 10) || 3; 
//     createPyramid(rows); 
// });

// document.getElementById('delayInput').addEventListener('input', function () {
//     stopAnimation(); 
//     currentRow = 0; 
//     const rows = parseInt(document.getElementById('rowsInput').value, 10) || 5; 
//     createPyramid(rows); 
// });
// document.getElementById('rowsInput').addEventListener('input', function () {
//     stopAnimation(); 
//     currentRow = 0; 
//     const rows = parseInt(document.getElementById('rowsInput').value, 10) || 5; 
//     createPyramid(rows); 
// });
// document.getElementById('startButton').addEventListener('click', startAnimation);
// document.getElementById('stopButton').addEventListener('click', stopAnimation);

// ----------------------------------------------------------

// const restartBtn = document.querySelector('.restart')

// restartBtn.addEventListener('click', ()=>{
//     let animationTime = null; 
//     let currentRow = 0; 
//     let isAnimating = false;
// })

// ------------------------------------------------------------
// const restartBtn = document.querySelector('.restart');

// restartBtn.addEventListener('click', ()=>{
//     stopAnimation(); 
//     currentRow = 0; 
//     document.getElementById('rowsInput').value = 3; 
//     document.getElementById('colorPicker').value = '#61dafb';
//     document.getElementById('delayInput').value = 500;
//     createPyramid(3);
 
// });


// window.addEventListener('resize', updatePyramid);


// createPyramid(3);





function createPyramid(rows) {
    let maxRows;
    if (window.innerWidth <= 425) {
        maxRows = 10; 
    } else if (window.innerWidth <= 768) {
        maxRows = 16; 
    } else {
        maxRows = 30; 
    }
    rows = Math.min(rows, maxRows); 
    const pyramid = document.getElementById('pyramid');
    pyramid.innerHTML = ''; 

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div'); 
        row.className = 'row'; 
        for (let j = 0; j <= i; j++) {
            const block = document.createElement('div'); 
            block.className = 'block'; 
            row.appendChild(block); 
        }
        pyramid.appendChild(row);
    }
}

let animationTime = null; 
let currentRow = 0; 
let isAnimating = false;

function startAnimation() {
    if (isAnimating) return;
    isAnimating = true; 

    const rows = document.querySelectorAll('.row'); 
    const color = document.getElementById('colorPicker').value; 
    const delay = parseInt(document.getElementById('delayInput').value, 10) || 500; 
    
    animationTime = setInterval(() => {
        rows.forEach(row => {
            row.querySelectorAll('.block').forEach(block => block.style.backgroundColor = 'white');
        });

        for (let i = 0; i <= currentRow; i++) {
            rows[i]?.querySelectorAll('.block').forEach(block => block.style.backgroundColor = color);
        }

        currentRow++;
        if (currentRow >= rows.length) {
            currentRow = 0;
        }
    }, delay);
}



function stopAnimation() {
    clearInterval(animationTime);
    isAnimating = false;
}



function updatePyramid() {
    stopAnimation();
    currentRow = 0;

    let rows = parseInt(document.getElementById('rowsInput').value, 10) || 5;
    let maxRows;

    if (window.innerWidth <= 425) {
        maxRows = 10;
    } else if (window.innerWidth <= 768) {
        maxRows = 16;
    } else {
        maxRows = 30;
    }



    if (rows > maxRows) {
        alert(`${maxRows} rows are possible on this device!`);
        rows = maxRows;
        document.getElementById('rowsInput').value = rows; 
    }

    createPyramid(rows);
}

document.getElementById('colorPicker').addEventListener('input', updatePyramid);
document.getElementById('delayInput').addEventListener('input', updatePyramid);
document.getElementById('rowsInput').addEventListener('input', updatePyramid);
document.getElementById('startButton').addEventListener('click', startAnimation);
document.getElementById('stopButton').addEventListener('click', stopAnimation);

document.querySelector('.restart').addEventListener('click', () => {
    stopAnimation();
    currentRow = 0;
    document.getElementById('rowsInput').value = 3; 
    document.getElementById('colorPicker').value = '#61dafb';
    document.getElementById('delayInput').value = 500;
    createPyramid(3);
});

window.addEventListener('resize', updatePyramid);



createPyramid(3);
