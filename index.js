// 1) Use npm to install ejs in the terminal


// 2) create a views and a public folder



// 3) In your public folder create an index.html and add your code from the planning document 
// You can also add your CSS files here too if applicable 




// 4) Now in your views folder create your EJS file and add your HTML code from your planning document


const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})


// 5) Paste in your data array of objects from the planning documents here. 
const posts = [
  {
    id: 1,
    title: "Self-Healing Nanomaterials for Spacecraft",
    author: "Dr. Aisha Karim",
    category: "Nanotechnology",
    description: "Exploring nanomaterials capable of repairing microfractures in spacecraft hulls.",
    content: "Researchers are developing self-healing nanomaterials that can automatically repair microscopic cracks caused by space debris. These materials contain embedded nano-capsules that release bonding agents when structural damage is detected, significantly increasing spacecraft longevity and safety.",
    imageURL: "https://example.com/images/nanomaterial.jpg",
    tags: ["Nanotech", "Space Engineering", "Materials Science"],
    likes: 342,
    comments: [
      { commentAuthor: "TechExplorer99", commentText: "This could revolutionize deep space missions!" },
      { commentAuthor: "FutureEngineer", commentText: "Imagine applying this to civil infrastructure too." }
    ],
    datePosted: "2026-02-15"
  },
  {
    id: 2,
    title: "AI-Integrated Smart Prosthetics",
    author: "Ayugo Provoke",
    category: "Biomedical Engineering",
    description: "Next-gen prosthetics powered by machine learning for adaptive movement.",
    content: "Modern prosthetics are now integrating AI algorithms that learn from user movement patterns. These systems adjust grip strength, walking posture, and balance in real time, creating a more natural experience for users.",
    imageURL: "https://example.com/images/prosthetics.jpg",
    tags: ["AI", "Robotics", "Healthcare Tech"],
    likes: 287,
    comments: [
      { commentAuthor: "BioInnovator", commentText: "The intersection of AI and healthcare is powerful." }
    ],
    datePosted: "2026-02-18"
  },
  {
    id: 3,
    title: "Magnetic Levitation Transport Systems",
    author: "Yulian Arckai",
    category: "Mechanical Engineering",
    description: "How maglev systems are shaping the future of urban transportation.",
    content: "Magnetic levitation trains eliminate friction by suspending above tracks using electromagnetic forces. This technology enables ultra-high-speed travel with lower maintenance costs and improved energy efficiency compared to traditional rail systems.",
    imageURL: "https://example.com/images/maglev.jpg",
    tags: ["Maglev", "Transportation", "Mechanical Systems"],
    Likes: 415,
    comments: [
      { commentAuthor: "UrbanPlannerX", commentText: "Cities of the future will rely on this." },
      { commentAuthor: "GreenTechFan", commentText: "Cleaner and faster transportation is a win-win." }
    ],
    datePosted: "2026-02-20"
  },
  {
    id: 4,
    title: "Fusion Energy Breakthroughs in 2026",
    author: "Dr. Malik Thompson",
    category: "Energy Innovation",
    description: "Recent advances bringing us closer to sustainable fusion power.",
    content: "Scientists have made progress in achieving sustained fusion reactions using improved magnetic confinement systems. Fusion promises near-limitless clean energy by replicating the same process that powers the sun.",
    imageURL: "https://example.com/images/fusion.jpg",
    tags: ["Fusion", "Renewable Energy", "Clean Power"],
    likes: 529,
    comments: [
      { commentAuthor: "EnergyGeek", commentText: "If this becomes commercial, the world changes forever." }
    ],
    datePosted: "2026-02-22"
  },
  {
    id: 5,
    title: "Autonomous Construction Robots",
    author: "Carlos Mendez",
    category: "Robotics",
    description: "Robots capable of building structures with minimal human oversight.",
    content: "Autonomous construction robots use computer vision and AI planning systems to lay bricks, pour concrete, and assemble structural components. This reduces construction time, enhances precision, and improves worker safety.",
    imageURL: "https://example.com/images/construction-robot.jpg",
    tags: ["Automation", "Robotics", "Smart Cities"],
    likes: 361,
    comments: [
      { commentAuthor: "BuildTechPro", commentText: "This will completely transform the construction industry." },
      { commentAuthor: "FutureCities", commentText: "Perfect for rapid urban expansion projects." }
    ],
    datePosted: "2026-02-25"
  }
];

module.exports = posts;


// 6) Add static file middleware here
app.use(express.static(path.join(__dirname, 'public')));

// 7) Set the view engine to ejs here
app.set('view engine', 'ejs');

// 8) Create a route handler to path / and send your index.html 
// run your server with node index.js to test it
app.get('/',(req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});



// 9) Create a route handler to your overview route from your planning document
// Pass in your data array
app.get('/posts', (req, res) => {
    res.render('overview', { posts: posts });
});

// 10) INDIVIDUAL POST ROUTES
app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const foundPost = posts.find(post => post.id === postId);

    if (!foundPost) {return res.send("Post not found"); 
    } 
    res.render('post', { post: foundPost });
});

app.listen(3000,() =>{
    console.log("Server started on port 3000")
})


// 10) Go to your EJS file and turn the HTML into EJS
// Test and run your server then submit if working (git add . git commit -m 'message' git push)


app.listen(3000, ()=> {
    console.log("Server Started")
})