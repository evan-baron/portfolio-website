let project = [
    {
        name: 'Will',
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

typewriter = () => {
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

    projectTitle.style.fontSize = '2rem';

    let linkArr = document.getElementsByClassName('link');
    for (let i = 0; i < linkArr.length; i++) {
        linkArr[i].style.display = 'none';
    }

    for (let i = 0; i < project.length; i++) {
        if (projNum - 1 == i) {
            projectTitle.innerHTML = project[i].name;
            projectContent.innerHTML = project[i].content;

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
    document.getElementById('project-title').style.fontSize = '3rem';
}