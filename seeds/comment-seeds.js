const { Comment } = require('../models');

const commentdata = [
  {
    contents: 'I 100% agree! Bootstrap, with the occasional Bootswatch thrown in, is the bomb!',
    user_id: 6,
    post_id: 1
  },
  {
    contents: 'Meh. A phone is a phone is a phone.',
    user_id: 6,
    post_id: 2
  },
  {
    contents: "People who bought Ubisoft games on Stadia games recently began seeing PC copies appear in their Ubisoft Connect accounts, and now Ubisoft has shared some official details about the process. In short: if you own an Ubisoft game on Stadia, you’ll get a PC copy for free (with five exceptions)",
    user_id: 3,
    post_id: 1
  },
  {
    contents: 'If you want to keep playing your games in the cloud, Ubisoft is throwing in a month of GeForce NOW Priority Membership access for “all Ubisoft customers on Stadia.” But if you want to play them on Stadia, you’ll have less than a month to do so: the service shuts down for good on January 18th.',
    user_id: 3,
    post_id: 8
  },
  {
    contents: 'This is another comment',
    user_id: 1,
    post_id: 2
  },
  {
    contents: 'This is another comment',
    user_id: 6,
    post_id: 7
  },
  {
    contents: 'This is another comment',
    user_id: 6,
    post_id: 2
  },
  {
    contents: 'This is another comment',
    user_id: 3,
    post_id: 4
  },
  {
    contents:
    'This is another comment',
    user_id: 4,
    post_id: 8
  },
  {
    contents:
    'This is another comment',
    user_id: 5,
    post_id: 4
  },
  {
    contents: 'This is another comment',
    user_id: 6,
    post_id: 2
  },
  {
    contents: 'This is another comment',
    user_id: 8,
    post_id: 2
  },
  {
    contents:
    'This is another comment',
    user_id: 2,
    post_id: 2
  },
  {
    contents: 'Let write a long comment to see how it looks like. Adding multiple lines to see how it looks like. Let add emojis to see how it looks like. 😁, Another emoji 😁. Let add different emojies 👾👾👾👾👾👾👾' ,
    user_id: 4,
    post_id: 1
  },
  {
    contents:
      'This is just emojies 👾👾👾🚀🚀🚀😊😊😊😂😂😂🤣🤣🤣❤️❤️😒😒😒😍😍👌👌👌😘😘💕💕😁😁🥶🥶🥶😳😳👹👹👹🤓😈😈😈👿👽👻☠️🙈🙉🙊🙊🙊',
    user_id: 5,
    post_id: 3
  },
  {
    contents:
    'This is just emojies 👾👾👾🚀🚀🚀😊😊😊😂😂😂🤣🤣🤣❤️❤️😒😒😒😍😍👌👌👌😘😘💕💕😁😁🥶🥶🥶😳😳👹👹👹🤓😈😈😈👿👽👻☠️🙈🙉🙊🙊🙊',
    user_id: 9,
    post_id: 6
  },
  {
    contents: 'This is just emojies 👾👾👾🚀🚀🚀😊😊😊😂😂😂🤣🤣🤣❤️❤️😒😒😒😍😍👌👌👌😘😘💕💕😁😁🥶🥶🥶😳😳👹👹👹🤓😈😈😈👿👽👻☠️🙈🙉🙊🙊🙊',
    user_id: 6,
    post_id: 4
  },
  {
    contents: 'This is just emojies 👾👾👾🚀🚀🚀😊😊😊😂😂😂🤣🤣🤣❤️❤️😒😒😒😍😍👌👌👌😘😘💕💕😁😁🥶🥶🥶😳😳👹👹👹🤓😈😈😈👿👽👻☠️🙈🙉🙊🙊🙊',
    user_id: 4,
    post_id: 1
  },
  {
    contents: 'This is just emojies 👾👾👾🚀🚀🚀😊😊😊😂😂😂🤣🤣🤣❤️❤️😒😒😒😍😍👌👌👌😘😘💕💕😁😁🥶🥶🥶😳😳👹👹👹🤓😈😈😈👿👽👻☠️🙈🙉🙊🙊🙊',
    user_id: 3,
    post_id: 8
  },
  {
    contents:
      'More comments with emojies???',
    user_id: 8,
    post_id: 1
  },
  {
    contents:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    user_id: 1,
    post_id: 5
  },
  {
    contents: 'Meta delays Within acquisition amid VR antitrust claims',
    user_id: 1,
    post_id: 5
  },
  {
    contents: 'They’re all present and accounted for, though, in a new Across the Spider-Verse poster that once again makes it seem like every spider-themed hero in the multiverse is going to have it out for Miles when the movie drops next June.',
    user_id: 4,
    post_id: 6
  },
  {
    contents: '(Once again, I am recommending that you grab Dwarf Fortress — especially if you need to burrow deep into the earth and away from your family during the holidays.)',
    user_id: 4,
    post_id: 6
  },
  {
    contents: 'If you’re thinking of buying a new Apple Watch, there’s something you should know about the GPS tracking. Apple has confirmed that the Apple Watch Series 8, second-gen SE, and Ultra won’t piggyback off your iPhone’s GPS signal if your phone is nearby. Instead, all three will rely on their built-in GPS sensors. Older models, however, will still use your iPhone’s GPS when possible.',
    user_id: 4,
    post_id: 7
  },

];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
