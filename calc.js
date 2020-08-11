  /*function add(){
                var a = document.getElementById('first').value;
                var b = document.getElementById('second').value;
                var out = parseInt(a)+parseInt(b)
                document.getElementById('output').innerText=out
            }
            function sub(){
                var a = document.getElementById('first').value;
                var b = document.getElementById('second').value;
                var out = parseInt(a)-parseInt(b)
                document.getElementById('output').innerText=out
            }*/
            function calc(opt){
                var a = document.getElementById('first').value;
                var b = document.getElementById('second').value;
                var out
                if(opt=="Add"){
                    out = parseInt(a)+parseInt(b)
                }else{
                    out = parseInt(a)-parseInt(b)
                }
                document.getElementById('output').innerText=out
            }
