


async function fetchData() {
    const graph = document.getElementById("graph");
    const data = await fetch('./data.json');
    const dataJson = await data.json();
    for (let x in dataJson){
        const dayDiv = document.createElement("div");
        dayDiv.classList.add('dayDiv')
        const amount = document.createElement('p');
        amount.classList.add('amount');
        amount.classList.add(dataJson[x].day + 'Amount');
        amount.textContent = '$' + dataJson[x].amount;
        dayDiv.appendChild(amount);
        const bar = document.createElement("div");
        bar.addEventListener('mouseenter', () => {
            amount.classList.toggle('active');
        });
        bar.addEventListener('mouseleave', () => {
            amount.classList.toggle('active');
        })
        bar.classList.add('bar');
        bar.classList.add(dataJson[x].day);
        bar.style.height = (dataJson[x].amount * 3)+'px';
        dayDiv.appendChild(bar);
        const whichDay = document.createElement("p");
        whichDay.textContent = dataJson[x].day;
        dayDiv.appendChild(whichDay);
        graph.appendChild(dayDiv);
    }
}


window.onload = fetchData;