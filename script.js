document.addEventListener("DOMContentLoaded", function () {
    console.log("Frontend je propojen!");
});
async function nextScene() {
    const playerInput = document.getElementById("playerInput").value;
    document.getElementById("playerInput").value = "";

    const response = await fetch("https://dunge.io/next", {  // Změň URL na svůj backend!
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            character: selectedCharacter,  // Musíš někde definovat
            input: playerInput
        })
    });

    const data = await response.json();
    document.getElementById("story").innerText = data.story;
}