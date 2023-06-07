let project = [
    {
        name: 'Welcome_',
        size: '3rem',
        content: `Hello!<br><br>My name is Evan Baron and I am a software developer! I started my career in sales and have a rich understanding of how to work with clients, organize projects, and meet deadlines. I am transitioning out of sales into software development. This is my portfolio page!<br><br>Thanks for stopping by!<br>
        <br>
        <div class="sig"></div>
        Evan Baron`,
        links: [
            {
                title: 'About Me',
                link: "aboutMe()",
                linkType: 'onclick'
            },
            {
                title: 'Github',
                link: 'https://github.com/evan-baron/portfolio-website',
                linkType: 'href'
            }
        ]
    },
    {
        name: 'Will',
        size: '2rem',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo ante, fermentum sit amet metus et, malesuada semper elit. Integer ipsum mauris, volutpat ac tellus nec, commodo scelerisque libero. Aliquam in magna mauris. Cras consectetur urna sed vestibulum egestas. Duis dictum quam eget pharetra maximus.',
        links: [
            {
                title: 'View Site',
                link: 'https://www.google.com',
                linkType: 'href'
            },
            {
                title: 'Github',
                link: 'https://github.com/evan-baron/portfolio-website',
                linkType: 'href'
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
                link: '#',
                linkType: 'href'
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
                link: '#',
                linkType: 'href'
            },
            {
                title: 'Github',
                link: 'https://github.com/evan-baron/portfolio-website',
                linkType: 'href'
            },
            {
                title: 'See in Google Play Store',
                link: 'https://play.google.com/store/games',
                linkType: 'href'
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
                link: '#',
                linkType: 'href'
            },
            {
                title: 'Github',
                link: 'https://github.com/evan-baron/portfolio-website',
                linkType: 'href'
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
                link: '#',
                linkType: 'href'
            },
            {
                title: 'Github',
                link: 'https://github.com/evan-baron/portfolio-website',
                linkType: 'href'
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
    document.getElementById('lc-'+[i]).innerHTML = project[i].name;
}

let projectTitle = document.getElementById('project-title')
let projectContent = document.getElementById('project-content')
projectShow(0);

projectTitle.innerHTML = project[0].name;
projectContent.innerHTML = project[0].content;

function projectShow(projNum) {
    let linkArr = document.getElementsByClassName('link');
    for (let i = 0; i < linkArr.length; i++) {
        linkArr[i].style.display = 'none';
    }

    for (let i = 0; i < project.length; i++) {
        if (projNum == i) {
            projectTitle.innerHTML = project[i].name;
            projectContent.innerHTML = project[i].content;
            projectTitle.style.fontSize = project[i].size;

            for (let j = 0; j < project[i].links.length; j++) {
                let linkTitle = document.getElementById('link-' + (j+1));
                linkTitle.innerHTML = project[i].links[j].title;
                let redirect = document.getElementById('redirect-' + (j+1));

                if (redirect.hasAttribute('href') || redirect.hasAttribute('onclick')) {
                    redirect.removeAttribute('href')
                    redirect.removeAttribute('onclick')
                }

                redirect.setAttribute(project[i].links[j].linkType, project[i].links[j].link)
                redirect.setAttribute('target', 'blank_');
                let pLink = document.getElementById('plink-'+(j+1));
                document.getElementById('plink-row').style.display = "flex";
                pLink.style.display = 'inline-block';
            }
        }
    }
}

let aboutMeDisplay = document.getElementById('about-me-container');

function aboutMe() {
    aboutMeDisplay.style.display = 'block';
}

function disappear() {
    aboutMeDisplay.style.display = 'none';
}