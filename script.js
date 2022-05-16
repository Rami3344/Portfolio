const light = document.getElementById("sun");
const dark = document.getElementById('moon');
dark.style.display = "none"
enabled = true
function turnToLightMood (){
        document.body.style.backgroundColor = '#4e6d8a'
        document.getElementById('abt').style.color = '#4e6d8a'
        document.getElementById('prjct').style.color = '#4e6d8a'
        document.getElementById('cntct').style.color = '#4e6d8a'
        document.getElementById("nav").style.backgroundColor = 'white';
        document.getElementById("About").style.backgroundColor ='white';
        document.getElementById("Project").style.backgroundColor ='white';
        document.getElementById("Contact").style.backgroundColor ='white';
        document.getElementById("myprjct").style.color ='black';
        document.getElementById("hi").style.color ='black';
        document.getElementById("contact").style.color ='black';
        document.getElementById("desc").style.color ='black';
        document.getElementById("desc1").style.color ='black';
        document.getElementById("desc2").style.color ='black';
        document.getElementById("desc3").style.color ='black';
        document.getElementById("info").style.color ='black';
        document.getElementById("cntctinfo").style.color ='black';
        document.getElementById("ic1").style.color = 'black';
        document.getElementById("ic2").style.color = 'black';
        document.getElementById("btn1").style.backgroundColor = "#4e6d8a";
        document.getElementById("btna1").style.color = 'black'
        document.getElementById("btn2").style.backgroundColor = "#4e6d8a";
        document.getElementById("btna2").style.color = 'black'
        document.getElementById("btn3").style.backgroundColor = "#4e6d8a";
        document.getElementById("btna3").style.color = 'black'

        light.style.display = "none"
        dark.style.display = "inline-flex"
        enabled = false
}
function turnToDarkMood(){
    document.body.style.backgroundColor = 'rgb(0, 1, 7)';
    document.getElementById('abt').style.color = 'wheat'
    document.getElementById('prjct').style.color = 'wheat'
    document.getElementById('cntct').style.color = 'wheat'
    document.getElementById("nav").style.backgroundColor = 'rgb(19, 14, 44)';
    document.getElementById("About").style.backgroundColor ='rgb(19, 14, 44)';
    document.getElementById("Project").style.backgroundColor ='rgb(19, 14, 44)';
    document.getElementById("Contact").style.backgroundColor ='rgb(19, 14, 44)';
    document.getElementById("myprjct").style.color ='rgb(112, 179, 153)';
    document.getElementById("hi").style.color ='rgb(112, 179, 153)';
    document.getElementById("contact").style.color ='rgb(112, 179, 153)';
    document.getElementById("desc").style.color ='rgb(112, 179, 153)';
    document.getElementById("desc1").style.color ='rgb(112, 179, 153)';
    document.getElementById("desc2").style.color ='rgb(112, 179, 153)';
    document.getElementById("desc3").style.color ='rgb(112, 179, 153)';
    document.getElementById("info").style.color ='rgb(112, 179, 153)';
    document.getElementById("cntctinfo").style.color ='rgb(112, 179, 153)';
    document.getElementById("ic1").style.color = 'rgb(112, 179, 153)';
    document.getElementById("ic2").style.color = 'rgb(112, 179, 153)';
    document.getElementById("btn1").style.backgroundColor =' rgb(35, 12, 71)';
    document.getElementById("btna1").style.color = 'rgb(151, 151, 151)';
    document.getElementById("btn2").style.backgroundColor = 'rgb(35, 12, 71)';
    document.getElementById("btna2").style.color = 'rgb(151, 151, 151)';
    document.getElementById("btn3").style.backgroundColor = 'rgb(35, 12, 71)';
    document.getElementById("btna3").style.color = 'rgb(151, 151, 151)';
    light.style.display = "inline-flex"
    dark.style.display = 'none'
    enabled = true
}
light.addEventListener('click',turnToLightMood)
dark.addEventListener('click',turnToDarkMood)
const myImg = document.getElementById('Me')
function transfomImg(){
    myImg.style.width = '200px'
    myImg.style.height ='220px'
    myImg.style.marginRight ='100px'
    if(enabled === true){
        myImg.style.border = 'rgb(112, 179, 153) solid 5px'
    }else{
        myImg.style.border = 'black solid 5px'
    }

    myImg.style.transition ='1s'
}
function resetImg(){
    myImg.style.width ='180px'
    myImg.style.height ='200px'
    myImg.style.marginRight ='0'
    myImg.style.border = '0'
    myImg.style.transition ='1s'
}
myImg.onclick = transfomImg
myImg.onmouseleave = resetImg
