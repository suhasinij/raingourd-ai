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
        answer.textContent = "Enter your question to get farming guidance.";
        return;
    }
 
    status.textContent = "Analyzing...";
    recommendation.textContent = "RainGourd AI is analyzing your question...";
    answer.textContent = "Considering crop and weather conditions...";
 
    adviceButton.disabled = true;
    adviceButton.textContent = "Analyzing...";
 
    setTimeout(function () {
 
        const q = question.toLowerCase();
 
        let recommendationText;
        let answerText;
 
        // Scenario 1: Irrigation
        if (q.includes("irrigate") || q.includes("water")) {
 
            recommendationText =
                "Do not irrigate the crop today if heavy rain is expected.";
 
            answerText =
                `For ${crop} in ${location}, RainGourd AI recommends avoiding unnecessary irrigation when sufficient rainfall is expected. Check local weather conditions before irrigating.`;
 
        }
 
        // Scenario 2: Sowing
        else if (q.includes("sow") || q.includes("sowing") || q.includes("plant")) {
 
            recommendationText =
                "Postpone sowing if heavy rain is expected tomorrow.";
 
            answerText =
                `For ${crop} in ${location}, heavy rainfall may affect newly sown crops. RainGourd AI recommends waiting for a more suitable weather window before sowing.`;
 
        }
 
        // Scenario 3: Fertilizer
        else if (
            q.includes("fertilizer") ||
            q.includes("fertiliser") ||
            q.includes("fertilize") ||
            q.includes("fertilise")
        ) {
 
            recommendationText =
                "Do not apply fertilizer immediately before heavy rainfall.";
 
            answerText =
                `For ${crop} in ${location}, applying fertilizer before heavy rain may lead to nutrient loss. Consider applying fertilizer when weather conditions are suitable.`;
 
        }
 
        // Other questions
        else {
 
            recommendationText =
                "Review crop and weather conditions before taking action.";
 
            answerText =
                `RainGourd AI has analyzed your question about ${crop} in ${location}. Consider local weather, soil conditions and crop requirements before making a farming decision.`;
        }
 
        recommendation.textContent = recommendationText;
        answer.textContent = answerText;
 
        status.textContent = "Completed";
 
        adviceButton.disabled = false;
        adviceButton.textContent = "Get Farming Advice";
 
    }, 700);
});
