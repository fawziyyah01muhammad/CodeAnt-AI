let checkmenu = document.getElementById("check-menu") 
    let hambuger = document.getElementById('open') 
    let exit = document.getElementById('close')
    let repoCon = document.getElementById('repo-con')

	function showMenu(){
        repoCon.style.backgroundColor = "rgb(230, 230, 230)"
	checkmenu.style.top = "65px";
        hambuger.style.display = "none"
        exit.style.display = "block"
        nav.style.boxShadow = "0 0 0px 0 red"
        nav.style.border = 'none'

	}
	function hideMenu(){
	checkmenu.style.top = "-550px";
        hambuger.style.display = "block"
        exit.style.display = "none"
        repoCon.style.backgroundColor = "white"
	}