function add() {
var a_result=

Number(document.getElementById("a_num1").value)
+
Number(document.getElementById("a_num2").value) ;
document.getElementById("a_result").innerHTML = a_result ;
}



function sub() {
var s_result=

Number(document.getElementById("s_num1").value)
-
Number(document.getElementById("s_num2").value) ;
document.getElementById("s_result").innerHTML = s_result ;
}



function mul() {
var m_result=

Number(document.getElementById("m_num1").value)
*
Number(document.getElementById("m_num2").value) ;
document.getElementById("m_result").innerHTML = m_result ;
}



function div() {
var d_result=

Number(document.getElementById("d_num1").value)
/
Number(document.getElementById("d_num2").value) ;
document.getElementById("d_result").innerHTML = d_result ;
}