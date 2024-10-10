const inc = document.getElementById("inc");
const re = document.getElementById("re");
const dec = document.getElementById("dec");
const count = document.getElementById("count")
let c=0;
inc.onclick=function(){
    c++;
    count.textContent=c;
}
re.onclick=function(){
    c=0;
    count.textContent=c;
}
de.onclick=function(){
    c--;
    count.textContent=c;
}