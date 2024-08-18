const { Post } = require('../models');

const postData = [
{ 
  id: '',
  title: 'Researchers develop fabric that generates electricity from body heat',
  author: 'janes456',
  date: '01/15/2024',
  content: 'The newest breakthrough in engineering will allow us to convert our body heat into electricity using a new developed fabric. This is not the first time something like this has been developed but the latest research shows great promise for the future of renewable energy',
},
{ 
    id: '',
    title: 'New brain tech turns paralyzed patients thoughts into speech with 97% accuracy',
    author: 'ajohnson789',
    date: '02/03/2024',
    content: 'This innovation deciphers brain signals when a person attempts to speak, converting them into text which the computer then vocalizes',
  },
{
    id: '',
    title: 'AI predicts diseases with 98% accuracy in real-time using tongue color',
    author: 'bbrown101',
    date: '03/23/2024',
    content: 'AI-powered computer model to analyze patients tongue colors for real-time disease diagnoses such as anemia, COVID-19, vascular and goastrointestinal issues, or asthma',
},
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;