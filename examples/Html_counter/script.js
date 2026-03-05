let cnt = 0;

function render() {
    document.querySelector('#root').innerHTML = `
         
            <h1>Counter HTML App </h1>
            <p>count ${cnt} </p> 
            <button onclick="increament()">Increament</button> 
            <button onclick="decreament()">Decreament</button> 
      
    `;
}

function increament() {
    cnt++;
    render();
}

function decreament() {
    cnt--;
    render();
}

render(); 