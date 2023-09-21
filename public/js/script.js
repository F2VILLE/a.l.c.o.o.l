document.querySelector(".button").onclick = () => {
    fetch("/generate").then(res => res.json().then(r => {
        document.querySelector("#output").innerText = r.name
        document.querySelector("#imageOutput").setAttribute("src", r.image)
    })).catch(alert)
}