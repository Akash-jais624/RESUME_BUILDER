function addNewWEField(){
    console.log("adding new field");

    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);


}
function addNewEQField(){
    console.log("adding new field");

    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",1);
    newNode.setAttribute("placeholder","Enter here");

    let eqOb=document.getElementById("eq");
    let eqAddButtonOb=document.getElementById("eqAddButton");
    eqOb.insertBefore(newNode, eqAddButtonOb);


}

function addNewPRField(){
    console.log("adding new field");

    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("prField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",3);
    newNode.setAttribute("placeholder","Enter here");

    let prOb=document.getElementById("pr");
    let prAddButtonOb=document.getElementById("prAddButton");
    prOb.insertBefore(newNode, prAddButtonOb);


}
function addNewACField(){
    console.log("adding new field");

    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("acField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",3);
    newNode.setAttribute("placeholder","Enter here");

    let acOb=document.getElementById("ac");
    let acAddButtonOb=document.getElementById("acAddButton");
    acOb.insertBefore(newNode, acAddButtonOb);


}
function addNewCEField(){
    console.log("adding new field");

    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("ceField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",3);
    newNode.setAttribute("placeholder","Enter here");

    let ceOb=document.getElementById("ce");
    let ceAddButtonOb=document.getElementById("ceAddButton");
    ceOb.insertBefore(newNode, ceAddButtonOb);


}

// generate function
function generateResume(){
    // console.log("generating resume");

    let nameField=document.getElementById("nameField").value;
    let nameT=document.getElementById("nameT");
    nameT.innerHTML=nameField;

    // contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    // address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("mailT").innerHTML=document.getElementById("mailField").value;

    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    document.getElementById("techT").innerHTML=document.getElementById("techField").value;

    document.getElementById("ipsT").innerHTML=document.getElementById("ipsField").value;

    document.getElementById("iahT").innerHTML=document.getElementById("iahField").value;

    document.getElementById("lkT").innerHTML=document.getElementById("lkField").value;

 // QUALIFICATION
 let eqs=document.getElementsByClassName("eqField");
 let str="";
 for(let e of eqs){
    str=str + `<li> ${e.value} <li/>`;
 }
 document.getElementById("eqT").innerHTML=str;



 let wes=document.getElementsByClassName("weField");
 let str1="";
 for(let e of wes){
    str1=str1 + `<li> ${e.value} <li/>`;
 }
 document.getElementById("weT").innerHTML=str1;



 let prs=document.getElementsByClassName("prField");
 let str2="";
 for(let e of prs){
    str2=str2 + `<li> ${e.value} <li/>`;
 }
 document.getElementById("prT").innerHTML=str2;



 let acs=document.getElementsByClassName("acField");
 let str3="";
 for(let e of acs){
    str3=str3 + `<li> ${e.value} <li/>`;
 }
 document.getElementById("acT").innerHTML=str3;




 let ces=document.getElementsByClassName("ceField");
 let str4="";
 for(let e of ces){
    str4=str4 + `<li> ${e.value} <li/>`;
 }
 document.getElementById("ceT").innerHTML=str4;
}


