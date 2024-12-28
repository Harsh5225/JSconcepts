// Create stars
const starsContainer = document.querySelector(".stars");
for (let i = 0; i < 1000; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animationDuration = `${Math.random() * 3 + 1}s`;
  star.style.animationDelay = `${Math.random() * 3}s`;
  starsContainer.appendChild(star);
}

const sunSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

// based on dates
const compliments = [
  "You have an amazing sense of humor!",
  "Your positivity is infectious.",
  "You are incredibly thoughtful.",
  "Your creativity is inspiring.",
  "You light up the room when you walk in.",
  "You have a great taste in style.",
  "You are a fantastic listener.",
  "Your kindness is a gift to everyone around you.",
  "You have a wonderful laugh.",
  "You are so hardworking and dedicated.",
  "Your confidence is admirable.",
  "You are an amazing friend.",
  "You have a unique perspective that is so valuable.",
  "Your smile is contagious.",
  "You are a natural leader.",
  "Your ability to stay calm under pressure is impressive.",
  "You make people feel special.",
  "Your ideas are always so innovative.",
  "You are full of wisdom.",
  "Your generosity knows no bounds.",
  "You have a magnetic personality.",
  "You are such a great team player.",
  "Your determination is truly inspiring.",
  "You bring out the best in others.",
  "You are a true problem-solver.",
  "Your energy is so uplifting.",
  "You are incredibly compassionate.",
  "You have an eye for detail.",
  "You are a beacon of positivity.",
  "Your patience is commendable.",
  "You have such a warm and welcoming presence.",
];

const victimCardCompliments = [
  "You always put others first, but people rarely notice.",
  "You are so selfless, yet life seems unfair to you.",
  "You give your all to everyone, but they don't always appreciate it.",
  "You always stand by others, even when they don't stand by you.",
  "You deserve so much more for all the kindness you show.",
  "You are the kind of person who always sacrifices for others, but it's not always reciprocated.",
  "You are always there for everyone, even when no one is there for you.",
  "You work so hard for others, yet people take it for granted.",
  "You have a heart of gold, but life doesn't always treat you the same.",
  "You always spread positivity, even when you're feeling down.",
  "You always make time for others, but they don't always do the same for you.",
  "You go above and beyond for everyone, yet they often overlook it.",
  "You carry everyone's burdens, but no one notices yours.",
  "You always see the best in others, even when they fail to see the best in you.",
  "You constantly support others, even when you're struggling yourself.",
  "You always forgive, even when you don't get the apology you deserve.",
  "You put so much effort into relationships, but not everyone matches your energy.",
  "You always cheer for others' successes, even when they forget to cheer for yours.",
  "You always show understanding, even when people don't understand you.",
  "You do so much for others, but life hasn't been as kind to you as you deserve.",
];

const astrologyRecommendations = [
  "Feed the hungry on Saturdays to appease Saturn and invite stability.",
  "Plant a Peepal tree to bring blessings from Jupiter.",
  "Offer food to birds daily to enhance positive energy around you.",
  "Donate food to the poor on Thursdays to strengthen your Jupiter's influence.",
  "Plant a Neem tree for healing energy and to attract Venus's blessings.",
  "Feed stray dogs on Tuesdays to pacify Mars and reduce obstacles.",
  "Distribute sweets to children on Fridays to strengthen your Venus and foster harmony.",
  "Water a Tulsi plant daily to invite prosperity and balance Mercury's energy.",
  "Donate grains on Amavasya to mitigate malefic planetary effects.",
  "Plant a fruit tree on a full moon day to attract abundance and blessings.",
  "Feed black lentils to the needy on Saturdays to balance Saturn's energy.",
  "Offer milk to the poor on Mondays to strengthen the Moon's influence on emotions.",
  "Plant a Banyan tree to connect with divine feminine energy and ancestral blessings.",
  "Distribute food on solar eclipses to neutralize negative planetary influences.",
  "Donate white rice on Fridays to enhance the positive impact of Venus.",
  "Plant flowering trees to invite joy and strengthen Jupiter's energy.",
  "Provide jaggery and water to cows on Sundays to please the Sun and enhance vitality.",
  "Offer food to monks or spiritual seekers on Thursdays for spiritual growth.",
  "Plant a coconut tree to enhance Mars's protective energy in your life.",
  "Donate green lentils on Wednesdays to balance Mercury and improve communication.",
  "Feed the hungry near temples or places of worship for spiritual merit.",
  "Plant bamboo trees for good fortune and strong Saturn energy.",
  "Distribute bananas on Thursdays to enhance prosperity and Jupiter's blessings.",
  "Feed sugar to ants on Fridays to mitigate Venus's challenges and attract love.",
  "Plant a sacred fig tree (Peepal) on Saturdays to invite divine protection.",
  "Offer food to lepers or the disabled on Tuesdays to reduce Mars's aggression.",
  "Plant herbs like basil or mint to invite Mercury's healing energy.",
  "Donate yellow food items on Thursdays to strengthen your Jupiter energy.",
  "Feed crows on Saturdays to align with Saturn and remove obstacles.",
  "Plant trees during the waxing moon phase to symbolize growth and abundance.",
];

const futurePredictions = [
  "You will become a crorepati in the next few years.",
  "Success and wealth are destined to follow you soon.",
  "You will travel to your dream destination in the near future.",
  "A major opportunity will change your life for the better.",
  "Your hard work will bring you immense recognition and rewards.",
  "A surprise financial gain is on its way to you.",
  "You will achieve your career goals and earn great respect.",
  "Your investments will multiply significantly in the coming years.",
  "You will soon meet someone who will have a positive impact on your life.",
  "You are destined to own a beautiful home soon.",
  "Your talents will be acknowledged on a global level.",
  "You will find immense happiness and harmony in your personal life.",
  "You will make a breakthrough in your field and become a pioneer.",
  "An unexpected windfall will bring you financial stability.",
  "You are destined to live a life full of abundance and joy.",
  "You will be surrounded by supportive and loving people in your life.",
  "Your health and energy levels will improve dramatically.",
  "A new business idea will turn into a massive success for you.",
  "You will become a mentor and inspire countless others.",
  "Your life is about to take a turn toward endless prosperity and happiness.",
];

const form = document.getElementById("astrologyForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submitted");

  // const formData = new FormData(form);
  // for (const [key, value] of formData.entries()) {
  //     console.log(`${key}: ${value}`);
  // }

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const day = Number(document.getElementById("day").value);
  const month = Number(document.getElementById("month").value);
  const year = Number(document.getElementById("year").value);

  // checks
  console.log(name, surname, day, month, year);

  // user result
  const result = document.getElementById("result");
  result.style.opacity = 1;
  result.innerText = "Hello Everyone";

  const first_message = `Hello ${name} ${surname},`;
  const second_message = `Your Sun Sign is ${sunSigns[month - 1]}.`;
  const thirdMessage=compliments[day-1];
  const index=Math.floor(Math.random()*20);
  const fourthSize=victimCardCompliments[index];


  // "Harsh" "Singh" Day
  // 5*4*3=60%30
  const fifthSize=astrologyRecommendations[(name.length*surname.length*day)%30];
  const sixthSize=futurePredictions[(day*month*year)%20];


  result.innerHTML = `
    ${first_message}
    ${second_message}
    ${thirdMessage}
    ${fourthSize}
    ${fifthSize}
    ${sixthSize}
  `;

});
