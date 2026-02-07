function runAnalysis() {
    const desc = document.getElementById('txt-area').value.toLowerCase();
    const resultDiv = document.getElementById('analysis-result');
    const resultContent = document.getElementById('res-content');

    if(!desc) {
        alert("Please describe your issue first.");
        return;
    }

    resultDiv.style.display = 'block';
    resultContent.innerHTML = "Processing data...";

    setTimeout(() => {
        let remedy = "Based on your input, we suggest keeping the area clean and dry. ";
        if(desc.includes("red") || desc.includes("itch")) {
            remedy += "Possible mild inflammation. Remedy: Apply a cold compress and avoid scratching. Use a fragrance-free moisturizer.";
        } else if (desc.includes("blurry") || desc.includes("eye")) {
            remedy += "Possible eye strain. Remedy: Follow the 20-20-20 rule. Rest your eyes and use lubricating drops. If pain persists, see an ophthalmologist.";
        } else {
            remedy += "General suggestion: Monitor symptoms for 24 hours. If they worsen, use the 'Appointment' button above.";
        }
        resultContent.innerHTML = remedy;
        addChatMsg("bot", "I've analyzed your description. Check the analysis box for suggestions!");
    }, 1500);
}
