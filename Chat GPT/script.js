document.getElementById("questionInput").addEventListener("keypress", function(event) {
    // Faqat Enter tugmasi bosilganda javobni olish
    if (event.key === "Enter") {
      getAnswer();
    }
  });
  
  function getAnswer() {
    const question = document.getElementById("questionInput").value;
  
    if (!question) {
      document.getElementById("answer").innerText = "Iltimos, savol kiriting.";
      return;
    }
  
    try {
      // Math bilan ishlash
      let result = evaluateMathExpression(question);
      document.getElementById("answer").innerText = `Javob: ${result}`;
    } catch (error) {
      document.getElementById("answer").innerText = "Xatolik! Iltimos, matematik ifodani tekshirib ko'ring.";
    }
  }
  
  // Matematik ifodalarni baholash
  function evaluateMathExpression(expression) {
    // Math bilan hisoblash
    return eval(expression);
  }
  