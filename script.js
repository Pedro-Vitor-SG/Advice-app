let refresh_btn = document.querySelector("#dice-refresh")

refresh_btn.addEventListener('click', () => {
    location.reload()
})

function get(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main() {
    let id_el = document.querySelector(".id_setence")
    let advice = document.querySelector(".advice-setence")
    dt = get("https://api.adviceslip.com/advice")
    data = JSON.parse(dt)
    console.log(data)
    id_el.innerHTML = `#${data.slip.id}`
    advice.innerHTML = `${data.slip.advice}`

}
main()