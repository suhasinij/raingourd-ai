const adviceButton = document.getElementById("adviceButton");
 
adviceButton.addEventListener("click", function () {
 
    const crop = document.getElementById("crop").value;
    const location = document.getElementById("location").value;
    const question = document.getElementById("question").value.trim();
 
    const status = document.getElementById("status");
    const recommendation = document.getElementById("recommendation");
    const answer = document.getElementById("answer");
 
    if (!question) {
        status.textContent = "Input Required";
        recommendation.textContent = "Please enter a farming question.";
        answer.textContent = "Tell RainGourd AI what you would like to know about your crop.";
        return;
    }
 
    status.textContent = "Analyzing...";
    recommendation.textContent = "RainGourd AI is analyzing your farming question.";
    answer.textContent = "Considering crop, location and farming conditions...";
 
    adviceButton.disabled = true;
    adviceButton.textContent = "🤖 Analyzing...";
 
    setTimeout(function () {
 
        const q = question.toLowerCase();
 
        let recommendationText;
        let answerText;
 
        if (q.includes("irrigat") || q.includes("water")) {
 
            recommendationText =
                "Avoid unnecessary irrigation today if heavy rain is expected.";
 
            answerText =
                `For ${crop} in ${location}, RainGourd AI recommends checking rainfall conditions before irrigation. If sufficient rain is expected, postpone irrigation to avoid waterlogging and unnecessary water use.`;
 
        } else if (q.includes("sow") || q.includes("plant")) {
 
            recommendationText =
                "Consider postponing sowing if heavy rain is expected tomorrow.";
 
            answerText =
                `For ${crop} in ${location}, heavy rainfall can affect newly sown crops. RainGourd AI recommends waiting for a suitable weather window before sowing.`;
 
        } else if (q.includes("fertilizer") || q.includes("fertiliser")) {
 
            recommendationText =
                "Avoid applying fertilizer immediately before heavy rainfall.";
 
            answerText =
                `For ${crop} in ${location}, applying fertilizer before heavy rain may result in nutrient loss. Consider applying it when weather conditions are more suitable.`;
 
        } else {
 
            recommendationText =
                "Review current weather and crop conditions before taking action.";
 
            answerText =
                `RainGourd AI has received your question about ${crop} in ${location}. Consider local weather, soil conditions and crop requirements before making a farming decision.`;
 
        }
 
        recommendation.textContent = recommendationText;
        answer.textContent = answerText;
 
        status.textContent = "Completed";
 
        adviceButton.disabled = false;
        adviceButton.textContent = "🤖 Get Farming Advice";
 
    }, 700);
});
