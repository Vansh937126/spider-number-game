# 🕷️ Spider Number Game

A browser-based strategy game built with **HTML, CSS, and JavaScript** where players compete against AI-controlled bots to survive and become the last participant standing.

The game is inspired by the classic "Guess 80% of the Average" concept but adds a unique twist with a **life system**, **bot elimination**, and multiple rounds of gameplay.

---

## 🎮 Demo Video

🎥 Watch the gameplay here:



https://github.com/user-attachments/assets/27b9af46-31f6-4777-90dd-7375f136b90e



---
Win screen looks like:
<img width="1449" height="817" alt="Screenshot 2026-06-16 at 10 49 58 PM" src="https://github.com/user-attachments/assets/1d0c5524-9bf8-46f6-996c-603b58009d4d" />


## 🚀 Features

- 🎯 Interactive number-guessing strategy game
- 🤖 Three AI-controlled bots
- ❤️ Life system for both player and bots
- ❌ Bot elimination when lives reach zero
- 🏆 Round-by-round winner determination
- 📊 Dynamic Spider Number calculation
- 🔄 Multiple rounds until a final winner emerges
- 📱 Responsive and user-friendly interface
- ⚡ Built entirely with Vanilla JavaScript

---

## 🕹️ How the Game Works

### Step 1
The player enters a number between **0 and 100**.

### Step 2
Each active bot randomly selects a number between **0 and 100**.

### Step 3
The average of all active participants' numbers is calculated.

### Step 4
The **Spider Number** is generated:

```text
Spider Number = 0.8 × Average
```

### Step 5
The participant whose chosen number is closest to the Spider Number wins the round.

### Step 6
Every non-winning participant loses one life.

### Step 7
Participants whose lives reach **0** are eliminated and no longer participate in future rounds.

### Step 8
The game continues until:

- 🎉 All bots are eliminated → Player Wins
- 💀 Player loses all lives → Game Over

---

## 🧠 Strategy

Winning is not about choosing the largest number.

Since the Spider Number is always **80% of the average**, successful gameplay requires:

- Predicting bot behavior
- Estimating the overall average
- Choosing numbers strategically rather than randomly
- Surviving long enough to eliminate all bots

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📂 Project Structure

```text
Spider-Number-Game/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ▶️ Running the Project

### Clone the Repository

```bash
git clone <your-repository-url>
```

### Open the Project

Simply open:

```text
index.html
```

in your browser

OR

Use **VS Code Live Server** for the best experience.

---

## 🎯 Learning Outcomes

This project helped practice:

- DOM Manipulation
- Event Handling
- JavaScript Logic Building
- Arrays and Objects
- Random Number Generation
- Game State Management
- Conditional Rendering
- Responsive Web Design

---

## 🔮 Future Improvements

- Difficulty levels for bots
- Multiplayer mode
- Sound effects
- Animated transitions
- Score tracking system
- Local storage support
- Online leaderboard

---

## 👨‍💻 Author

**Vansh Jain**

Built as a fun web development project using HTML, CSS, and JavaScript.

---

If you like this project, consider giving it a ⭐ on GitHub.
