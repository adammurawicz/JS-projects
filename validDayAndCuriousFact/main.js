const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')

const facts = [
	'Fleas can jump 350 times its body length.',
	'Hummingbirds are the only birds that can fly backwards',
	'Crocodiles cannot stick their tongue out',
	'Starfish do not have a brain.',
	'Slugs have 4 noses.',
	'Only female mosquitoes bite.',
	'Polar bear skin is black!',
	'The only mammal capable of flight is the bat.',
	'Cats have 32 muscles in each ear.',
	'A newborn kangaroo is the size of a lima bean.'
]

const day = new Date()
currentDay.textContent = day.toLocaleDateString("en", { weekday: "long"})

const showFact = () => {
	const number = Math.floor(Math.random() * (facts.length - 1))
	funFact.textContent = facts[number]
}

showFact()