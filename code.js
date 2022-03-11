let answer
let num1
let num2
let array
let symbol
let lastSymbol=""
let x =[]

function add(a,b){
    let c=a+b
    return c
}

function subt(a,b){
    return (a-b)
}

function mult(a,b){
    return (a*b)
}

function div(a,b){
    if(b==0){
        return "ERROR"
    }else{
    return (a/b)}
}

function operate(symbol,a,b){
    if(symbol=="+"){return answer=add(a,b)}
    else{if(symbol=="-"){return answer=subt(a,b)}
        else{if(symbol=="*"){return answer=mult(a,b)}
            else{return answer=div(a,b)}
    }}
}

const rp=document.getElementById("reload")
rp.addEventListener("click", function(){
    document.location.reload(true)})

const C=document.querySelectorAll("button")

// click effect
    for(let i=0;i<=C.length-1;i++){
        C[i].addEventListener("click", function(){
        C[i].classList.add("clicked")
        C[i].addEventListener("transitionend",function (e){
            this.classList.remove("clicked")
    });
    })};

// mouse over / mouse out
    for(let i=0;i<=C.length-1;i++){
        C[i].addEventListener("mouseover", function(){
        C[i].classList.add("over")
    })};
    for(let i=0;i<=C.length-1;i++){
        C[i].addEventListener("mouseout", function(){
        C[i].classList.remove("over")
    })};

// crazy operations by clicking
    for(let i=0;i<=C.length-1;i++){
        C[i].addEventListener("click", function(){
            if(C[i].innerHTML=="."&&x.includes(".")){}else{
            if(C[i].innerHTML=="="){
                if(x==""){}else{if(answer==undefined){answer=Number(x.join(""))
                    document.getElementById("upperResult").innerHTML=Math.round(answer*100)/100
                    x=[]
                    document.getElementById("result").innerHTML=""  
                }else{
                    if(symbol=="/"&&x==0){
                        document.getElementById("upperResult").innerHTML="ERROR"                            
                        document.getElementById("result").innerHTML=""}
                        else{
                        document.getElementById("upperResult").innerHTML=Math.round(operate(symbol,Number(answer),Number(x.join("")))*100)/100
                        x=[]
                        document.getElementById("result").innerHTML=""}                  
                }}
            }
            else{
                if(C[i].innerHTML=="+"||C[i].innerHTML=="-"||C[i].innerHTML=="*"||C[i].innerHTML=="/"){
                    if(x==""){
                        symbol=C[i].innerHTML
                        document.getElementById("upperResult").innerHTML=Math.round(answer*100)/100+symbol
                    }else{if(answer==undefined){
                        symbol=C[i].innerHTML
                        answer=Math.round(Number(x.join(""))*100)/100
                        document.getElementById("upperResult").innerHTML=answer+symbol
                        x=[]
                        document.getElementById("result").innerHTML=""
                    }else{
                        lastSymbol=symbol
                        symbol=C[i].innerHTML
                        if(lastSymbol=="/"&&x==0){
                            document.getElementById("upperResult").innerHTML="ERROR"                            
                            document.getElementById("result").innerHTML=""
                        }else{
                        answer=Math.round(operate(lastSymbol,Number(answer),Number(x.join("")))*100)/100
                        document.getElementById("upperResult").innerHTML=answer+symbol
                        x=[]
                        document.getElementById("result").innerHTML=""}
                        
                    }}
                }else{
                    let z=Array.from(C[i].innerHTML)
                    if(z=="←"){
                        x.pop()
                    }else{
                    x=x.concat(z)}
                    if(z=="."){
                        pointButton.classList.add("disabled")
                    }else{
                        pointButton.classList.remove("disabled")
                    }
                    document.getElementById("result").innerHTML=x.join("")
                }

            }
}})}

// crazy operations by keyboard
document.addEventListener("keydown", function(e){
        let j
        if(e.key=="="){j="="}else{
        if(e.key=="Enter"){j="="}else{
        if(e.key=="Backspace"){j="←"}else{
        if(e.key=="Shift"){document.location.reload(true)}else{
        if(e.key=="."&&x.includes(".")){}else{j=e.key}}}}}
        if(j=="="){
            if(x==""){}else{if(answer==undefined){answer=Number(x.join(""))
                document.getElementById("upperResult").innerHTML=Math.round(answer*100)/100
                x=[]
                document.getElementById("result").innerHTML=""  
            }else{
                if(symbol=="/"&&x==0){
                    document.getElementById("upperResult").innerHTML="ERROR"                            
                    document.getElementById("result").innerHTML=""}
                    else{
                    document.getElementById("upperResult").innerHTML=Math.round(operate(symbol,Number(answer),Number(x.join("")))*100)/100
                    x=[]
                    document.getElementById("result").innerHTML=""}                  
            }}
        }
        else{
            if(j=="+"||j=="-"||j=="*"||j=="/"){
                if(x==""){
                    symbol=j
                    document.getElementById("upperResult").innerHTML=Math.round(answer*100)/100+symbol
                }else{if(answer==undefined){
                    symbol=j
                    answer=Math.round(Number(x.join(""))*100)/100
                    document.getElementById("upperResult").innerHTML=answer+symbol
                    x=[]
                    document.getElementById("result").innerHTML=""
                }else{
                    lastSymbol=symbol
                    symbol=j
                    if(lastSymbol=="/"&&x==0){
                        document.getElementById("upperResult").innerHTML="ERROR"                            
                        document.getElementById("result").innerHTML=""
                    }else{
                    answer=Math.round(operate(lastSymbol,Number(answer),Number(x.join("")))*100)/100
                    document.getElementById("upperResult").innerHTML=answer+symbol
                    x=[]
                    document.getElementById("result").innerHTML=""}
                    
                }}
            }else{
                let z=Array.from(j)
                if(z=="←"){
                    x.pop()
                }else{
                x=x.concat(z)}
                if(z=="."){
                    pointButton.classList.add("disabled")
                }else{
                    pointButton.classList.remove("disabled")
                }
                document.getElementById("result").innerHTML=x.join("")
            }

        }
})

// keyboard entry effect
document.addEventListener("keydown", function(e){
    let w
    if(e.key=="."){w=="."}else{
        w=document.getElementById(e.key)}
        w.classList.add("clicked")
        w.addEventListener("transitionend",function (e){
            this.classList.remove("clicked")
    })
})

const pointButton=document.getElementById("point")
