const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it."
];

const funFacts = [
  "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
  "A group of flamingos is called a 'flamboyance'.",
  "Octopuses have three hearts.",
  "Bananas are berries, but strawberries aren’t.",
  "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
  "There are more stars in the universe than grains of sand on all the Earth's beaches.",
  "Humans share 60% of their DNA with bananas."
];

const backgrounds = {
  nature: 'https://source.unsplash.com/1920x1080/?nature',
  city: 'https://source.unsplash.com/1920x1080/?city',
  abstract: 'https://source.unsplash.com/1920x1080/?abstract'
};

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}`;
}

function updateGreeting() {
  const hours = new Date().getHours();
  let greeting;
  if (hours < 12) {
      greeting = "Good Morning!";
  } else if (hours < 18) {
      greeting = "Good Afternoon!";
  } else {
      greeting = "Good Evening!";
  }
  document.getElementById('greeting').textContent = greeting;
}

function updateQuote() {
  const index = new Date().getDate() % quotes.length;
  document.getElementById('quote').textContent = quotes[index];
}

function updateFunFact() {
  const index = new Date().getDate() % funFacts.length;
  document.getElementById('fun-fact').textContent = funFacts[index];
}

function changeBackground(category) {
  document.body.style.backgroundImage = `url(${backgrounds[category]})`;
}

function searchWeb() {
  const query = document.getElementById('search').value;
  if (query) {
      window.open(`https://www.bing.com/search?q=${encodeURIComponent(query)}`, '_blank');
  }
}

function addLink() {
  const name = document.getElementById('linkName').value;
  const url = document.getElementById('linkURL').value;
  if (name && url) {
      const links = JSON.parse(localStorage.getItem('customLinks')) || [];
      links.push({ name, url });
      localStorage.setItem('customLinks', JSON.stringify(links));
      renderLinks();
      closeModal();
  }
}

function renderLinks() {
  const linksContainer = document.getElementById('links');
  linksContainer.innerHTML = '';
  const links = JSON.parse(localStorage.getItem('customLinks')) || [];
  links.forEach(link => {
      const linkElement = document.createElement('a');
      linkElement.href = link.url;
      linkElement.textContent = link.name;
      linkElement.target = '_blank';
      linksContainer.appendChild(linkElement);
  });
}

function openModal() {
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

updateTime();
updateGreeting();
updateQuote();
updateFunFact();
renderLinks();
