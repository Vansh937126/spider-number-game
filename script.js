let playerLives = 10;

let botLives = {
  "Bot 1": 10,
  "Bot 2": 10,
  "Bot 3": 10
};

function playGame() {

  // User Input
  let userInput = Number(document.getElementById("userNumber").value);

  // Validation
  if (userInput < 0 || userInput > 100 || isNaN(userInput)) {
    alert("Enter a number between 0 and 100");
    return;
  }

  // Active Bots
  let activeBots = [];

  if (botLives["Bot 1"] > 0) {
    activeBots.push({
      name: "Bot 1",
      number: Math.floor(Math.random() * 101)
    });
  }

  if (botLives["Bot 2"] > 0) {
    activeBots.push({
      name: "Bot 2",
      number: Math.floor(Math.random() * 101)
    });
  }

  if (botLives["Bot 3"] > 0) {
    activeBots.push({
      name: "Bot 3",
      number: Math.floor(Math.random() * 101)
    });
  }

  // Calculate Average
  let total = userInput;
  let count = 1;

  activeBots.forEach(bot => {
    total += bot.number;
    count++;
  });

  let average = total / count;

  // Spider Number
  let spiderNumber = average * 0.8;

  // Distance Calculation
  let distances = {
    "You": Math.abs(userInput - spiderNumber)
  };

  activeBots.forEach(bot => {
    distances[bot.name] =
      Math.abs(bot.number - spiderNumber);
  });

  // Find Winner
  let winner = Object.keys(distances).reduce((a, b) =>
    distances[a] < distances[b] ? a : b
  );

  // Reduce Lives
  if (winner !== "You") {
    playerLives--;
  }

  activeBots.forEach(bot => {
    if (bot.name !== winner) {
      botLives[bot.name]--;
    }
  });

  // Result Display
  let resultHTML = `

    <h2>Game Result</h2>

    <div class="life-box">
      ❤️ Your Lives: ${playerLives}
    </div>
    <hr>
    <p>
      <strong>Your Number:</strong> ${userInput}
    </p>

    <h3>Bot Details</h3>
  `;

  activeBots.forEach(bot => {

    resultHTML += `
      <p>
        <strong>${bot.name}</strong> :
        ${bot.number}
        | Lives: ${botLives[bot.name]}
      </p>
    `;
  });

  resultHTML += `

    <hr>

    <p>
      <strong>Average:</strong>
      ${average.toFixed(2)}
    </p>

    <p>
      <strong>Spider Number:</strong>
      ${spiderNumber.toFixed(2)}
    </p>

    <div class="winner">
      🏆 The closest is: ${winner}
    </div>
  `;

  // Eliminated Bots
  for (let bot in botLives) {

    if (botLives[bot] <= 0) {

      resultHTML += `
        <p style="color:red;">
          ❌ ${bot} Eliminated
        </p>
      `;
    }
  }

  // Player Eliminated
  
if (playerLives <= 0) {

    resultHTML += `
      <h2 style="color:red;">
        💀 GAME OVER
      </h2>
    `;
    let newbut=document.createElement("button");
    newbut.innerText="Restart Game";
    divv=document.querySelector(".container");
    divv.append(newbut);
    DIV=document.querySelector(".result");
    
    sub=document.querySelector("#submitBtn");
    sub.style.display="none";
    newbut.style.marginTop="20px";
    newbut.onclick=function(){
      location.reload();
    };
  };
  
  // All Bots Eliminated
  let aliveBots =
    Object.values(botLives).filter(
      life => life > 0
    );

  if (aliveBots.length === 0) {

    resultHTML += `
      <h2 style="color:green;">
        🎉 VICTORY!
      </h2>
    `;
  }

  // Display
  document.getElementById("result").innerHTML =
    resultHTML;
   

};
