const { Post } = require('../models');

const postdata = [
  {
    title: 'How video illusionist Zach King enchants millions on TikTok and Instagram',
    contents: "King's seemingly magical editing tricks have captivated audiences for nearly a decade. CNET gets a behind-the-scenes look at how he creates his mind-bending contents.",
    category: 'Media & Entertainment',
    user_id: 7
  },
  {
    title: 'You can do better than the Apple Watch Series 3 in 2021, even if you want to save money',
    contents: "Cheaper doesn't necessarily mean best value.",
    category: 'Hardware',
    user_id: 1
  },
  {
    title: 'Car buyers are giving up as chip shortage dwindles new car inventories further',
    contents: 'Kelley Blue Book and Cox Automotive found nearly half of car buyers in the market are ready to call it quits and postpone their purchase.',
    category: 'Hardware',
    user_id: 1
  },
  {
    title: 'Luminous aurora seen from ISS drapes Earth in a glowing green veil',
    contents: 'A full moon, an aurora and Earth come together in a mystical moment seen from space.',
    category: 'Media & Entertainment',
    user_id: 9
  },
  {
    title: "Foundation review: Apple's slow-burn sci-fi epic thinks big, looks great",
    contents: "Isaac Asimov's novels come to Apple TV Plus in a 10-episode series that may be ponderous but genuinely has big ideas to ponder.",
    category: 'Media & Entertainment',
    user_id: 5
  },
  {
    title: "Amazon-owned Whole Foods to add $10 delivery fee to orders next month",
    contents: 'The expensive supermarket will get more expensive.',
    category: 'Other',
    user_id: 3
  },
  {
    title: "Amazon's Echo and Ring launch event: How to get all the details live",
    contents: 'The e-commerce giant is holding an invite-only press event starting Sept. 28 at 9 a.m. PT, noon ET.',
    category: 'Hardware',
    user_id: 10
  },
  {
    title: 'Pokemon Sword and Shield: How to get a free Dada Zarude and Shiny Celebi [last chance]',
    contents: 'Players who sign up for the Pokemon Trainer Club newsletter by Sept. 25 will receive a free Dada Zarude and Shiny Celebi.',
    category: 'Gaming',
    user_id: 8
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
