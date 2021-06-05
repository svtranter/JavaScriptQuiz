const { format } = require("path/posix");

function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("q1").style.display = "inline-block";
}

function question2() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("q2").style.display = "inline-block";
}
  
function question3() {
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "inline-block";
}

function question4() {
    document.getElementById("q3").style.display = "none";
    document.getElementById("q4").style.display = "inline-block";
}

function question5() {
    document.getElementById("q4").style.display = "none";
    document.getElementById("q5").style.display = "inline-block";
}

function question6() {
    document.getElementById("q5").style.display = "none";
    document.getElementById("q6").style.display = "inline-block";
}

function question7() {
    document.getElementById("q6").style.display = "none";
    document.getElementById("q7").style.display = "inline-block";
}

function question8() {
    document.getElementById("q7").style.display = "none";
    document.getElementById("q8").style.display = "inline-block";
}

function results() {
    calculateResults()
    document.getElementById("q8").style.display = "none";
    document.getElementById("results").style.display = "inline-block";
  }

function calculateResults() {
    const radios1 = document.querySelectorAll('input[name="q1_answer"]');
    let q1Value;
    for (const rb of radios1) {
      if (rb.checked) {
          q1Value = rb.value;
          break;
      }
    }

    const radios2 = document.querySelectorAll('input[name="q2_answer"]');
    let q2Value;
    for (const rb of radios2) {
      if (rb.checked) {
          q2Value = rb.value;
          break;
      }
    }

    const radios3 = document.querySelectorAll('input[name="q3_answer"]');
    let q3Value;
    for (const rb of radios3) {
      if (rb.checked) {
          q3Value = rb.value;
          break;
      }
    }

    const radios4 = document.querySelectorAll('input[name="q4_answer"]');
    let q4Value;
    for (const rb of radios4) {
      if (rb.checked) {
          q4Value = rb.value;
          break;
      }
    }

    const radios5 = document.querySelectorAll('input[name="q5_answer"]');
    let q5Value;
    for (const rb of radios5) {
      if (rb.checked) {
          q5Value = rb.value;
          break;
      }
    }

    const radios6 = document.querySelectorAll('input[name="q6_answer"]');
    let q6Value;
    for (const rb of radios6) {
      if (rb.checked) {
          q6Value = rb.value;
          break;
      }
    }

    const radios7 = document.querySelectorAll('input[name="q7_answer"]');
    let q7Value;
    for (const rb of radios7) {
      if (rb.checked) {
          q7Value = rb.value;
          break;
      }
    }

    const radios8 = document.querySelectorAll('input[name="q8_answer"]');
    let q8Value;
    for (const rb of radios8) {
      if (rb.checked) {
          q8Value = rb.value;
          break;
      }
    }

    let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value) + Number(q6Value) + Number(q7Value) + Number(q8Value);
    let result = total / 8;
    
    if (result > 6) {
        msg = "You are the golden maknae Jungkook!";
        document.getElementById('result-photo').src="jungkook.jpg";
        document.getElementById('result-photo').alt="Headshot of Jungkook";
    } else if (result > 5) {
        msg = "You are most handsome man of 2020 V!";
        document.getElementById('result-photo').src="v.jpg"
        document.getElementById('result-photo').alt="Headshot of V"
    } else if (result > 4) {
        msg = "You are modern dancer ChimChim Jimin!";
        document.getElementById('result-photo').src="jimin.jpg"
        document.getElementById('result-photo').alt="Headshot of Jimin"
    } else if (result > 3) {
        msg = "You are strict dance captain and our hope J-Hope!";
        document.getElementById('result-photo').src="j-hope.png"
        document.getElementById('result-photo').alt="J-Hope smiles and waves at an award show"
    } else if (result > 2) {
        msg = "You are serial napper Suga!"
        document.getElementById('result-photo').src="suga.jpg"
        document.getElementById('result-photo').alt="Headshot of Suga"
    } else if (result > 1) {
        msg = "You are Worldwide Handsome Jin!"
        document.getElementById('result-photo').src="jin.jpg"
        document.getElementById('result-photo').alt="Headshot of Jin"
    } else {
        msg = "You are our clumsy yet clever leader RM!"
        document.getElementById('result-photo').src="rm.jpg"
        document.getElementById('result-photo').alt="Headshot of RM"
    }

    document.getElementById("result").innerHTML = msg;

}