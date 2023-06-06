let project = [
    {
        name: 'Will',
        size: '2rem',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo ante, fermentum sit amet metus et, malesuada semper elit. Integer ipsum mauris, volutpat ac tellus nec, commodo scelerisque libero. Aliquam in magna mauris. Cras consectetur urna sed vestibulum egestas. Duis dictum quam eget pharetra maximus.',
        links: [
            {
                title: 'View Site',
                link: '#'
            },
            {
                title: 'Github',
                link: 'https://github.com/evan-baron/portfolio-website'
            }
        ]
    },
    {
        name: 'Update',
        size: '2rem',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo ante, fermentum sit amet metus et, malesuada semper elit. Integer ipsum mauris, volutpat ac tellus nec, commodo scelerisque libero. Aliquam in magna mauris. Cras consectetur urna sed vestibulum egestas.',
        links: [
            {
                title: 'View Site',
                link: '#'
            }
        ]
    },
    {
        name: 'As I',
        size: '2rem',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo ante, fermentum sit amet metus et, malesuada semper elit. Integer ipsum mauris, volutpat ac tellus nec, commodo scelerisque libero. Aliquam in magna mauris.',
        links: [
            {
                title: 'View Site',
                link: '#'
            },
            {
                title: 'Github',
                link: 'https://github.com/evan-baron/portfolio-website'
            },
            {
                title: 'See in Google Play Store',
                link: 'https://play.google.com/store/games'
            }
        ]
    },
    {
        name: 'Build More',
        size: '2rem',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo ante, fermentum sit amet metus et, malesuada semper elit. Integer ipsum mauris, volutpat ac tellus nec, commodo scelerisque libero. Aliquam in magna mauris. Cras consectetur urna sed vestibulum egestas. Duis dictum quam eget pharetra maximus.',
        links: [
            {
                title: 'View Site',
                link: '#'
            },
            {
                title: 'Github',
                link: 'https://github.com/evan-baron/portfolio-website'
            }
        ]
    },
    {
        name: 'Websites',
        size: '2rem',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo ante, fermentum sit amet metus et, malesuada semper elit. Integer ipsum mauris, volutpat ac tellus nec, commodo scelerisque libero. Aliquam in magna mauris. Cras consectetur urna sed vestibulum egestas. Duis dictum quam eget pharetra maximus.',
        links: [
            {
                title: 'View Site',
                link: '#'
            },
            {
                title: 'Github',
                link: 'https://github.com/evan-baron/portfolio-website'
            }
        ]
    }
];

let messageArray = ["Welcome"];
let textPosition = 0;
let speed = 80;

function typewriter() {
    document.getElementById("project-title").innerHTML = messageArray[0].substring(0, textPosition) + "<span>_</span>";
    if (textPosition++ != messageArray[0].length) {
        setTimeout(typewriter, speed);
    }
}

window.addEventListener("load", typewriter);

for (let i = 0; i < project.length; i++) {
    document.getElementById('lc-'+[i + 1]).innerHTML = project[i].name;
}

function projectShow(projNum) {
    let projectTitle = document.getElementById('project-title')
    let projectContent = document.getElementById('project-content')

    let linkArr = document.getElementsByClassName('link');
    for (let i = 0; i < linkArr.length; i++) {
        linkArr[i].style.display = 'none';
    }

    for (let i = 0; i < project.length; i++) {
        if (projNum - 1 == i) {
            projectTitle.innerHTML = project[i].name;
            projectContent.innerHTML = project[i].content;
            projectTitle.style.fontSize = project[i].size;

            for (let j = 0; j < project[i].links.length; j++) {
                let linkTitle = document.getElementById('link-'+(j+1));
                linkTitle.innerHTML = project[i].links[j].title;
                let pLink = document.getElementById('plink-'+(j+1));
                document.getElementById('plink-row').style.display = "flex";
                pLink.style.display = 'inline-block';
            }
        }
    }
}

function home() {
    let linkArr = document.getElementsByClassName('link');
    for (let i = 0; i < linkArr.length; i++) {
        linkArr[i].style.display = 'none';
    }

    document.getElementById('project-title').innerHTML = 'Welcome_';
    document.getElementById('project-content').innerHTML = `Hello! My name is Evan Baron and I am a software developer! I started my career in sales and have a rich understanding of how to work with clients, organize projects, and meet deadlines. I am transitioning out of sales into software development. This is my portfolio page!<br><br>Thanks for stopping by!<br>
    <br>
    <div class="sig"></div>
    Evan Baron`;
    if (screen.width > '800px') {
        document.getElementById('project-title').style.fontSize = '3rem';
    } else {
        document.getElementById('project-title').style.fontSize = '2rem';
    }
}