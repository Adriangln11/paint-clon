const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

let isDrawing = false
let currentTool = "brush"
let currentColor = "#000000"

canvas.addEventListener("mousedown", startDrawing)
canvas.addEventListener("mousemove", draw)
canvas.addEventListener("mouseup", stopDrawing)

function startDrawing(event) {
    isDrawing = true
    draw(event)
}

function draw(event) {
    if (!isDrawing) return

    let xAxis = event.clientX - canvas.offsetLeft
    let yAxis = event.clientY - canvas.offsetTop

    if (currentTool === "brush") {
        context.fillStyle = currentColor
        context.fillRect(xAxis, yAxis, 5, 5)
    } else if (currentTool === "eraser") {
        context.clearRect(xAxis, yAxis, 10, 10)
    }
}

function stopDrawing() {
    isDrawing = false;
}

document.getElementById("brush").addEventListener("click", function() {
    currentTool = "brush"
})

document.getElementById("eraser").addEventListener("click", function() {
    currentTool = "eraser"
})
document.getElementById("clean").addEventListener("click", function() {
    context.clearRect(0, 0, canvas.width, canvas.height)
})

document.getElementById("colorPicker").addEventListener("input", function() {
    currentColor = this.value
})
