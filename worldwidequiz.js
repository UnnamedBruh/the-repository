let questions = [
	{
		question: "There is technology that can tell between different smells in 2024.",
		type: 0,
		answers: {
			"Yes": false,
			"No": true
		}
	},
	{
		question: "Which organelle is the power plant of the cell?",
		type: 0,
		answers: {
			"Nucleus": false,
			"Mitochondrion": true,
			"Endoplasmatic Reticulum": false,
			"Golgi Body/Golgi Apparatus": false
		}
	},
	{
		question: "Which one of the objects makes up the substance of oil?",
		type: 0,
		answers: {
			"Trees": true,
			"Plants": true,
			"Metal": false,
			"Wood": false
		}
	},
	{
		question: "Is sugar sweet, or is sugar sour?",
		type: 0,
		answers: {
			"Sour": false,
			"Sweet": true
		}
	},
	{
		question: "True or false: Most of United States' foods are banned from other countries because of food dye/coloring.",
		type: 0,
		answers: {
			"Yes": true,
			"No": false
		}
	},
	{
		question: "Do meat preservations cure cancer, cause cancer, or increase the risk of cancer?",
		type: 0,
		answers: {
			"Cure cancer": false,
			"Cause cancer": false,
			"Increase the risk of cancer": true
		}
	},
	{
		question: "Does too much salt overwhelm the human's taste buds?",
		type: 0,
		answers: {
			"Yes": true,
			"No": false
		}
	},
	{
		question: "True or false: Salt is the same thing/referred to as Sodium.",
		type: 0,
		answers: {
			"Yes": true,
			"No": false
		}
	},
	{
		question: "Does the human body need a lot, or a small amount of sodium?",
		type: 0,
		answers: {
			"A lot": false,
			"Small amount": true
		}
	},
	{
		question: "Claustrophobia means that the person is afraid of:",
		type: 0,
		answers: {
			"Walls": false,
			"Tight/narrow areas": true,
			"Fruit": false,
			"Strangers": false
		}
	},
	{
		question: "Should all lives (including bugs) be well-respected? This has a correct answer.",
		type: 0,
		answers: {
			"Yes": true,
			"No": false
		}
	},
	{
		question: "Is yogurt made with fermintation?",
		type: 0,
		answers: {
			"No": false,
			"Yes": true
		}
	},
	{
		question: "Do you think life is a simulation? This is a free choice",
		type: 0,
		answers: {
			"Yes": true,
			"No": true
		}
	},
	{
		question: "Is LeBron James a basketball player?",
		type: 0,
		answers: {
			"Yes": true,
			"No": false
		}
	},
	{
		question: "What is a classic recipe for making barbeque sauce?",
		type: 0,
		answers: {
			"Ketchup and brown sugar": true,
			"Ketchup and sugar": false,
			"Ketchup and salt and sugar": false,
			"Well duh, barbeque sauce.": false
		}
	},
	{
		question: "Which word is a classic british term for a man?",
		type: 0,
		answers: {
			"Bloke": true,
			"Blann": false,
			"Boy": false,
			"Man": false
		}
	},
	{
		question: "Which gender has the highest voice pitch?",
		type: 0,
		answers: {
			"Female": true,
			"Male": false
		}
	},
	{
		question: "Do people with a black skin color have darker voices?",
		type: 0,
		answers: {
			"Yes": true,
			"No": false
		},
		warning: "If you're offended, this question isn't meant to be racist."
	},
	{
		question: "What are the organs a human has?",
		type: 0,
		answers: {
			"Heart, stomach, brain, lungs": true,
			"Heart, lips, brain, lungs": false,
			"Heart, stomach, brain, teeth": false,
			"Heart, brain, brain, lungs": false
		}
	},
	{
		question: "How many phalanges does a human finger (not a thumb) have?",
		type: 0,
		answers: {
			"3": true,
			"2": false,
			"4": false,
			"1": false
		}
	},
	{
		question: "What is the exact approximate amount of pH a human must have?",
		type: 0,
		answers: {
			"7.4": true,
			"7": false,
			"4.83": false,
			"9": false,
			"3.1": false
		}
	},
	{
		question: "What are the first 10 digits of PI?",
		type: 0,
		answers: {
			"3.141592653": true,
			"3.141952653": false,
			"3.141592628": false,
			"3.141592956": false,
			"3.149882275": false
		}
	},
	{
		question: "What are the first 10 digits of Euler's number?",
		type: 0,
		answers: {
			"2.718281828": true,
			"2.718288182": false,
			"2.711821821": false,
			"2.100110101": false,
			"0.123456789": false
		}
	},
	{
		question: "What is the true meaning of life?",
		type: 0,
		answers: {
			"To explore, to see the vast wonders of the world": true,
			"To suffer pain, to be treated as a slave for an eternity": false,
			"To live for an amount of time until you die. That's it.": false
		}
	},
	{
		question: "Which website is the most popular for playing games?",
		type: 0,
		answers: {
			"CoolMathGames.com": true,
			"KBHGames.com": true,
			"ArmorGames.com": true,
			"Amogus.com": false,
			"Google.com": false
		}
	},
	{
		question: "True or false: Dainty is used to describe an object that is dirty or unpleasant.",
		type: 0,
		answers: {
			"No": true,
			"Yes": false
		}
	},
	{
		question: "True or false: Gold bars cost at least in this range (in dollars): 10,000 - 100,000",
		type: 0,
		answers: {
			"Yes": true,
			"No": false
		}
	},
	{
		question: "Which is a very old way of making money?",
		type: 0,
		answers: {
			"Selling lemonade": true,
			"Suggesting people to buy cars": false,
			"Selling fidget toys": false,
			"Selling barbeque sauce": false
		}
	},
	{
		question: "Alcohol is generally bad for your body, but it is good for:",
		type: 0,
		answers: {
			"Healing our skin": true,
			"Repairing our cars": false,
			"Hand sanitizers": true,
			"The economy": false
		}
	},
	{
		question: "ADHD makes it so you get distracted more easily. Is this true?",
		type: 0,
		answers: {
			"Yes": true,
			"No": false
		}
	},
	{
		question: "Autism makes it so you have trouble sleeping sometimes, but you would have better brain development. Is this true?",
		type: 0,
		answers: {
			"Yes": true,
			"No": false
		}
	},
	{
		question: "How many seconds are in a minute?",
		type: 0,
		answers: {
			"60": true,
			"30": false,
			"90": false
		}
	},
	{
		question: "How many days are in a month (an exact approximate)?",
		type: 0,
		answers: {
			"30": true,
			"29": false,
			"31": false
		}
	},
	{
		question: "Do you think transparent wood might replace plastic someday? This is a free choice",
		type: 0,
		answers: {
			"Yes": true,
			"No": true
		}
	},
	{
		question: "Which instrument is the #1 most hardest to play?",
		type: 0,
		answers: {
			"Bagpipes": true,
			"Piano": false,
			"Accordion": false,
			"Tuba": false
		}
	},
	{
		question: "True or false: It is generally rude to say 'Ok, boomer' to someone specifically a senior.",
		type: 0,
		answers: {
			"True": true,
			"False": false
		}
	},
	{
		question: "Is the grim reaper a myth, or is he real?",
		type: 0,
		answers: {
			"He is a myth": true,
			"He is real": false
		}
	},
	{
		question: "Why is smoking bad for you? Pick a more reasonable explanation below.",
		type: 0,
		answers: {
			"This is because too much smoke can cause cellular and high damage to the organ's functionality, specifically, and generally.": true,
			"This is because if we smoke, we die instantly in a few years.": false,
			"This is because if we smoke too much, we would eventually die.": false,
			"This is because smoke has so many chemicals, barely any of them can be listed here. Each chemical can damage the organ's functionality, rendering it injured, and barely having a use.": true
		}
	},
	{
		question: "What does 'overrated' mean? Do not choose an example.",
		type: 0,
		answers: {
			"This word means for a group of people/clan to have too high interest in something/someone.": true,
			"This word means to love so much.": false,
			"This word means that someone likes a game so much, they want to play it for an eternity.": false
		}
	},
	{
		question: "Can an eardrum resist over than 210 DB?",
		type: 0,
		answers: {
			"No": true,
			"Yes": false
		}
	},
	{
		question: "Can a human's blood ever be blue?",
		type: 0,
		answers: {
			"No": true,
			"Yes": false
		}
	},
	{
		question: "Do most people agree on this opinion: corn on butter is good?",
		type: 0,
		answers: {
			"Yes": true,
			"No": false
		}
	},
	{
		question: "True or false: Foil can be bent in all kinds of shapes.",
		type: 0,
		answers: {
			"True": true,
			"False": false
		}
	},
	{
		question: "True or false: Epilepsy means to suffer an experience of highly-noticeable flashing.",
		type: 0,
		answers: {
			"True": true,
			"False": false
		}
	},
	{
		question: "Battery packs are not allowed on airplanes, *generally and originally* because:",
		type: 0,
		answers: {
			"A metal object collision may cause a fire": true,
			"Water can damage battery packs and damage devices": false
		}
	},
	{
		question: "At 6/23/2024 8:02 PM, the sky suddenly began to become a bit yellow. If you didn't experience this, just select 'I did not experience this event'",
		type: 0,
		answers: {
			"True": true,
			"False": false,
			"I did not experience this event": null
		}
	},
	{
		question: "What does it mean to be bisexual?",
		type: 0,
		answers: {
			"This means to like two genders at the same time": true,
			"This means to not respect anyone": false,
			"This means to like one gender, and dislike another gender": false
		},
		warning: "This is not meant to be offensive/inappropriate!"
	},
	{
		question: "Which year had the most events that happened below?",
		type: 0,
		answers: {
			"2012": true,
			"2000": false,
			"2010": false,
			"2016": false
		}
	},
	{
		question: "True or false: Milk contains lactose in it.",
		type: 0,
		answers: {
			"True": true,
			"False": false
		}
	},
	{
		question: "True or false: Dairy usually would involve including milk as a recipe.",
		type: 0,
		answers: {
			"True": true,
			"False": false
		}
	},
	{
		question: "True or false: Binary originally can also contain numbers outside just zeros and ones.",
		type: 0,
		answers: {
			"True": false,
			"False": true
		}
	},
	{
		question: "The nerves in a human's body travel up on which body part to reach to the brain?",
		type: 0,
		answers: {
			"Spinal cord": true,
			"Ribs": false,
			"Around the stomach": false
		}
	},
	{
		question: "What is the color of a human's nerves?",
		type: 0,
		answers: {
			"Blue": true,
			"Red": false,
			"Pink": false,
			"Violet": false
		}
	},
	{
		question: "What is the color of an ox's nerves?",
		type: 0,
		answers: {
			"Red": false,
			"Violet": true,
			"Pink": false,
			"Blue": false
		}
	},
	{
		question: "True or false: PI is basically the diameter of the circle.",
		type: 0,
		answers: {
			"True": true,
			"False": false
		}
	},
	{
		question: "True or false: Most romantic movies that involve dating are not appropriate for kids.",
		type: 0,
		answers: {
			"True": true,
			"False": false
		}
	},
	{
		question: "Who made this quiz?",
		type: 0,
		answers: {
			"Unnamedbruh": true,
			"Nexus": false,
			"RobTop": false,
			"Nintendo": false,
			"Toby Fox": false,
			"RubRub": false,
			"Sega": false
		}
	},
	{
		question: "Who was the richest man on Earth, ever?",
		type: 0,
		answers: {
			"Jeff Bezos": true,
			"Barack Obama": false,
			"Elon Musk": false,
			"Amelia Earhart": false,
			"Donald Trump": false
		}
	},
	{
		question: "Having a name 'Albert' commonly means that",
		type: 0,
		answers: {
			"the person is smart": true,
			"the person fails college in the future": false,
			"the person has ADHD": false,
			"the person has (a) double-jointed body part(s)": false,
			"the person has a stronger skull": false
		},
		warning: "The letters enclosed in parenthesis means that they are optional, and they vary based on how many of that thing there is."
	}
]
alert("This quiz has " + questions.length + " questions!")
let questionscore = 0
function randomize(questions) {
	let arr = []
	while (questions.length !== 0) {
		const a = Math.floor(Math.random() * questions.length)
		arr.push(questions[a])
		questions.splice(a, 1)
	}
	return arr
}
questions = randomize(questions)
const questionsD = document.createElement("div")
const p = document.createElement("a")
const buttons = document.createElement("div")
document.body.appendChild(questionsD)
questionsD.appendChild(p)
questionsD.appendChild(buttons);
(async function() {
	async function getAnswer(q) {
		return new Promise(function(res) {
			const ans = q.answers
			buttons.querySelectorAll("button").forEach((e)=>e.remove())
			randomize(Object.keys(ans)).forEach(function(item) {
				const button = document.createElement("button")
				buttons.appendChild(button)
				button.textContent = item
				button.onclick = function() {
					if (ans[item] === true) {
						button.style.backgroundColor = "green"
					} else if (ans[item] === null) {
						button.style.backgroundColor = "gray"
					} else {
						button.style.backgroundColor = "red"
					}
					res([item, button])
				}
			})
		})
	}
	async function wait(milliseconds) {
		return new Promise(function(res) {
			setTimeout(()=>res(), milliseconds)
		})
	}
	for (const question of questions) {
		p.textContent = question.question
		if (question.warning) {
			setTimeout(() => alert(question.warning), 100)
		}
		const answer = await getAnswer(question)
		if (question.answers[answer[0]]) {
			questionscore += 1
		}
		buttons.querySelectorAll("button").forEach(function(item){
			const e = question.answers[item.textContent]
			item.style.backgroundColor = (e === null ? "gray" : e ? "green" : "red")
		})
		await wait(500)
	}
	buttons.innerHTML = ""
	p.textContent = "Your IQ is: " + (50 + (questionscore / 0.9784)) + ". This is just an approximate calculation, so try not to take this calculation too literally. You also answered " + questionscore + " questions correctly. " + (questionscore < 5 ? "... I don't know if you did very well..." : questionscore < 10 ? "At least you got less than/equal to 10 questions right." : questionscore < 15 ? "Most people probably got 40-52 questions right." : questionscore < 20 ? "Not bad, not bad." : questionscore < 25 ? "That's a good accomplishment if you're a fourth grader." : questionscore < 35 ? "You're actually as smart as a fourth grader." : questionscore < 50 ? "You are great at beating quizzes like this!" : questionscore <= questions.length ? "You're as smart as the creator of this quiz (Unnamedbruh)! Congratulations!")
})()
