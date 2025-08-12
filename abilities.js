const abilities = document.querySelectorAll(".ability");
const abilitiesDropdown = document.getElementById("abilities-select");

abilitiesDropdown.addEventListener("change", selectTag);

function selectTag(e) {
    //Loop through all of the abilities
    abilities.forEach((ability) => {
        ability.classList.remove("hidden");
        //Loop through the nodes within each ability
        for (let item of ability.children){
            //Find the one that is for the ability tags
            if (item.classList.contains("ability-tags")){
                //Find tags that match the ones selected
                if (!item.innerText.toLowerCase().includes(e.target.value)){
                    ability.classList.add("hidden");
                }
            }
        }
    });
}
