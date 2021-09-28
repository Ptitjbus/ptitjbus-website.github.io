document.addEventListener("DOMContentLoaded",function(){

	let canvas = document.querySelector("canvas")
	let c = canvas.getContext("2d")
	let ball = {y:100, s:1}
	let jump = false

	setInterval(function(){

		c.clearRect(0,0,canvas.width,canvas.height)
		c.beginPath()
		c.arc(300,ball.y,50,0,2*Math.PI,true)
		c.fillStyle = "blue"
		c.fill()
		
		ball.s += 0.05
		ball.y += ball.s

		if(ball.y + 50 > canvas.height && !jump){
			ball.y = canvas.height - 50
		}
		



		let height = 1;
	document.addEventListener('keydown', (event) =>{
		if(event.key == 'z'){
			jump = true
			for(let i= 0; i<height;i++){
				ball.y -= ball.s
			}
		}
		else{
			jump = false
		}
	})
	console.log(ball.y)
	},10)
	
	

})
