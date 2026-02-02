let tasques=[];
let indexBuit=0;

function mostrarTasques(){
    document.getElementsByClassName("filtres")[0].innerHTML ='';
    document.getElementsByClassName("filtres")[0].innerHTML +=`
        <button class="boto-filtre actiu" onclick="mostrarTasques()">Totes</button>
        <button class="boto-filtre" onclick="mostrarPendents()">Pendents</button>
        <button class="boto-filtre" onclick="mostrarCompletades()">Completades</button>`;
    if (getIndexBuit()>0){
        document.getElementById("llistaTasques").innerHTML ='';
        for (let i=0;i<tasques.length;i++){
            document.getElementById("llistaTasques").innerHTML += 
            `<li class="tasca ${tasques[i].status === 'completada' ? 'completada' : ''}"><input type="checkbox" class="checkbox" onclick="tascaCompletada(${i})" ${statusTasca(i)}></input><p class="text-tasca">${tasques[i].name}</p></li>`;
                
        }
    }
}

function statusTasca(i){
    if (tasques[i].status === 'completada'){
        return 'checked';
    }else{
        return '';
    }
}
function tascaCompletada(i){
    if (tasques[i].status === 'pendent'){
        tasques[i].status='completada';
        
    }else{
        tasques[i].status='pendent';
    }
    actualizarEstadisticas();
    mostrarTasques();
}

function limpiarInput(){
    document.getElementById('inputTasca').value='';
}
function getIndexBuit(){
    for (let i=0;i<tasques.length;i++){
        if (tasques[i] === null){
            return i;
        }
    }
    return tasques.length;
}

function afegirTasca(){
    indexBuit = getIndexBuit();
    const tasca= document.getElementById("inputTasca").value;
    if (tasca!=''){
        tasques[indexBuit]= {name: tasca, status: 'pendent'};
        mostrarTasques();
        limpiarInput();
        actualizarEstadisticas();
    }
}

function eliminarTasques(){
    document.getElementById("llistaTasques").innerHTML =`<li class="missatge-buit">No hi ha tasques. Afegeix-ne una!</li>`;
    tasques = [];
    actualizarEstadisticas();
}

function countPendents(){
    let pendents=0;
    for (let i = 0;i<tasques.length;i++){
        if (tasques[i].status === 'pendent'){
            pendents++;
        }
    }
    return pendents;
}

function countCompletades(){
    let completades=0;
    for (let i = 0;i<tasques.length;i++){
        if (tasques[i].status === 'completada'){
            completades++;
        }
    }
    return completades;
}

function actualizarEstadisticas(){
    document.getElementById("estadistiques").innerHTML = `Total: ${tasques.length} | Pendents: ${countPendents()} | Completades: ${countCompletades()}`
}

function mostrarPendents(){
    document.getElementsByClassName("filtres")[0].innerHTML ='';
    document.getElementsByClassName("filtres")[0].innerHTML +=`
        <button class="boto-filtre" onclick="mostrarTasques()">Totes</button>
        <button class="boto-filtre actiu" onclick="mostrarPendents()">Pendents</button>
        <button class="boto-filtre" onclick="mostrarCompletades()">Completades</button>`;
    if (getIndexBuit()>0){
        document.getElementById("llistaTasques").innerHTML ='';
        for (let i=0;i<tasques.length;i++){
            if (tasques[i].status === 'pendent'){
                document.getElementById("llistaTasques").innerHTML += 
                `<li class="tasca"><input type="checkbox" class="checkbox" onclick="tascaCompletada(${i})" ${statusTasca(i)}></input><p class="text-tasca">${tasques[i].name}</p></li>`;   
            }
        }
    }
}

function mostrarCompletades(){
    document.getElementsByClassName("filtres")[0].innerHTML ='';
    document.getElementsByClassName("filtres")[0].innerHTML +=`
        <button class="boto-filtre" onclick="mostrarTasques()">Totes</button>
        <button class="boto-filtre" onclick="mostrarPendents()">Pendents</button>
        <button class="boto-filtre actiu" onclick="mostrarCompletades()">Completades</button>`;
    if (getIndexBuit()>0){
        document.getElementById("llistaTasques").innerHTML ='';
        for (let i=0;i<tasques.length;i++){
            if (tasques[i].status === 'completada'){
                document.getElementById("llistaTasques").innerHTML += 
                `<li class="tasca"><input type="checkbox" class="checkbox" onclick="tascaCompletada(${i})" ${statusTasca(i)}></input><p class="text-tasca">${tasques[i].name}</p></li>`;   
            }
        }
    }
}

