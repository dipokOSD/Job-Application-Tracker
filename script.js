let currentTab = "all";

const tabActive = ['bg-black','text-white' ];
const tabInactive = ['bg-gray-300', 'text-slate-700', 'border-slate-200'];

const allContainar=document.getElementById("allCards")
const iterviweContainar=document.getElementById("interviwe-section")
const rejectContainar=document.getElementById("rejected-section")
const emptyState=document.getElementById("empty-state")

console.log(allContainar,iterviweContainar,rejectContainar);

function switchTab(tab) {
    const tabs = ["all", "Interviwe", "Rejected"];
    currentTab=tab;
    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t);
        if (t === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        } 
        else {
            tabName.classList.remove(...tabActive);
             tabName.classList.add(...tabInactive);
        }
    }


    const pages=[allContainar,iterviweContainar,rejectContainar]
    for (const section of pages) {
        section.classList.add("hidden")
        
    }
    emptyState.classList.add("hidden")
    if(tab==="all"){
        allContainar.classList.remove("hidden")
        if(allContainar.children.length<1){
            emptyState.classList.remove("hidden")
        }
    }
    else if(tab==="Interviwe"){
        iterviweContainar.classList.remove("hidden")
        if(iterviweContainar.children.length <1){
             emptyState.classList.remove("hidden")
        }
    }
    else{
        rejectContainar.classList.remove("hidden")
        if(rejectContainar.children.length <1){
             emptyState.classList.remove("hidden")
        }
    }
    
    updedeStat()
}

// stat updede

const totalStat=document.getElementById("stat-total")
const interviweStat=document.getElementById("stat-interview")
const rejectedStat=document.getElementById("stat-rejected")
const availableStat=document.getElementById("available")

switchTab(currentTab);

document.getElementById("all-jobs-cards").addEventListener("click",function(event){
    // console.log(event.target);
   const clickedElement=event.target;
    const card=clickedElement.closest(".card")
    const parent=card.parentNode;
    const status=card.querySelector(".status")
    


   if(clickedElement.classList.contains("interviwe")){
    
    iterviweContainar.appendChild(card)
     status.classList.remove("text-red-500", "border-red-500");
        status.classList.add("text-green-500", "border-green-500");
    status.innerText="Interviwed";
   }
   if(clickedElement.classList.contains("rejected")){
    rejectContainar.appendChild(card)
    status.classList.remove("text-green-500", "border-green-500");
        status.classList.add("text-red-500", "border-red-500");
     status.innerText="Rejected";
   }
   if(clickedElement.classList.contains("delete")){
    parent.removeChild(card)
   }
   updedeStat()
})


function updedeStat(){
    const count={
        all : allContainar.children.length,
        Interviwe : iterviweContainar.children.length,
        Rejected : rejectContainar.children.length,
    }
totalStat.innerText= count["all"]
interviweStat.innerText= count["Interviwe"]
rejectedStat.innerText= count["Rejected"]
availableStat.innerText=count[currentTab]
if(count[currentTab] < 1){
    emptyState.classList.remove("hidden")
}else{
    emptyState.classList.add("hidden")
}
}

updedeStat()


















