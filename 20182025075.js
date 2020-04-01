var sexo;
function indice() {    
    let peso=document.getElementById('peso').value;
    let altura=document.getElementById('altura').value;
    var imc;   
    imc=peso/((altura*altura)); 
    return imc;        
}

function estado(sexo){
    var masa=indice();
    if(sexo==1){
     if(masa<20){
        let est="Bajo de peso";
        return "Su indice de masa corporal es "+masa.toFixed(0)+" y teniendo encuenta que su sexo es masculino su estado es " +est;
       
    } 
    if(masa>=20&&masa<=24.9){
        let est="Peso normal";
        return "Su indice de masa corporal es "+masa.toFixed(0)+" y teniendo encuenta que su sexo es masculino su estado es " +est;
       
    } 
    if(masa>=25&&masa<=29.9){
        let est="Obsidad leve";
        return "Su indice de masa corporal es "+masa.toFixed(0)+" y teniendo encuenta que su sexo es masculino su estado es " +est;
       
    }
    if(masa>=30&&masa<=40){
        let est="Obsidad severa";
        return "Su indice de masa corporal es "+masa.toFixed(0)+" y teniendo encuenta que su sexo es masculino su estado es " +est;
       
    }
    if(masa>40){
        let est="Obsidad muy severa";
        return "Su indice de masa corporal es "+masa.toFixed(0)+" y teniendo encuenta que su sexo es masculino su estado es " +est;
       
    } 
}  
    if(sexo==2){
        if(masa<20){
           let est="Bajo de peso";
           return "Su indice de masa corporal es "+masa.toFixed(0)+" y teniendo encuenta que su sexo es femenino su estado es " +est;
          
       } 
       if(masa>=20&&masa<=23.9){
           let est="Peso normal";
           return "Su indice de masa corporal es "+masa.toFixed(0)+" y teniendo encuenta que su sexo es femenino  su estado es " +est;
          
       } 
       if(masa>=24&&masa<=28.9){
           let est="Obsidad leve";
           return "Su indice de masa corporal es "+masa.toFixed(0)+" y teniendo encuenta que su sexo es femenino  su estado es " +est;
          
       }
       if(masa>=29&&masa<=37){
           let est="Obsidad severa";
           return "Su indice de masa corporal es "+masa.toFixed(0)+" y teniendo encuenta que su sexo es femenino  su estado es " +est;
          
       }
       if(masa>37){
           let est="Obsidad muy severa";
           return "Su indice de masa corporal es "+masa.toFixed(0)+" y teniendo encuenta que su sexo es femenino  su estado es " +est;
          
       }   
       
   }
    
}
