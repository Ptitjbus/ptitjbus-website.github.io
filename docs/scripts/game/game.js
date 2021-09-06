document.addEventListener("DOMContentLoaded",function(){

	let canvas = document.querySelector("canvas")
	let c = canvas.getContext("2d")
	let ball = {y:100, s:1}

	setInterval(function(){

		c.clearRect(0,0,canvas.width,canvas.height)
		c.beginPath()
		c.arc(300,ball.y,50,0,2*Math.PI,true)
		c.fillStyle = "blue"
		c.fill()
		
		ball.s += 0.05
		ball.y += ball.s

		if(ball.y + 50 > canvas.height){
			ball.y = canvas.height - 50
		}

	},10)

	

})