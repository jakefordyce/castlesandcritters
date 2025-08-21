const entries = document.querySelectorAll(".entry");
const abilitiesDropdown = document.getElementById("abilities-select");

abilitiesDropdown.addEventListener("change", selectTag);

function selectTag(e) {
    entries.forEach((entry) => {
        entry.classList.remove("hidden");
        //Loop through all of the abilities
        for (let ability of entry.children){
            //Loop through the nodes within each ability
            for (let item of ability.children){
                //Find the one that is for the ability tags
                if (item.classList.contains("ability-tags")){
                    //Find tags that match the ones selected
                    if (!item.innerText.toLowerCase().includes(e.target.value)){
                        //hide the ability and its masteries
                        entry.classList.add("hidden");
                    }
                }
            }
        }
    });
}
