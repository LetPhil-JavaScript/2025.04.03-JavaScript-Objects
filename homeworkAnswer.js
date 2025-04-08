// MMO Ultima Online 
// Max Total Stats: 225

let shay = {
    name: "Ark", 
    class: "Lumberjack",
    title: "Grandmaster",
    stats: {
        strength: 100,
        stamina: 100, 
        mana: 25,
    },
}

//  Step One: Access Properties 
// "Ark is a Grandmaster Lumberjack"
console.log(`${shay.name} is a ${shay.title} ${shay.class}`);
// Issue: Servers Went Down, Send Character to last known city
// Step Two: Add key "city" assign value = "Minoc"
shay.city = "Minoc";

// Issue Character Update
// Step Three: New Stat "luck" value = 25
shay.stats.luck = 25;

// Update The Account "shay"
// Step Four:
// Add new key "skills" contain an array of 3 skills 
// ["lumberjacking", "carpentry", "bowFletching"]
shay.skills = ["lumberjacking", "carpentry", "bowFletching"];

// Check the updated object
console.log("Updated shay:", shay);