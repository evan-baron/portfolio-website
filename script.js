let project = [
    {
        name: 'Welcome_',
        size: '5rem',
        content: `Hello!<br><br>My name is Evan Baron and I am a junior software developer! I am transitioning my career out of sales and into software development. I have a rich understanding of how to work with clients, organize projects, and meet deadlines. For more information about my background and abilities, click the 'About' link to the right!<br><br>Thanks for stopping by!<br>
        <br>
        <div class="sig"></div>
        Evan Baron`,
        links: []
    },
    {
        name: 'Website 1',
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
        name: 'Website 2',
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
        name: 'Website 3',
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
        name: 'Website 4',
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

let skills = [
    {
        name: 'HTML',
        proficiency: .95,
    },
    {
        name: 'CSS',
        proficiency: .7,
    },
    {
        name: 'JavaScript',
        proficiency: .35,
    },
    {
        name: 'Sql',
        proficiency: .75,
    }
]

for (let i = 0; i<skills.length; i++) {
    let barDiv = document.createElement('div')
    barDiv.setAttribute('class', `bar acg-bar-${i}`)
    barDiv.setAttribute('id', `acg-bar-${i}`)
    barDiv.setAttribute('onmouseover', 'hover()')
    barDiv.setAttribute('onmouseout', 'reset()')
    document.getElementById('acg-background').appendChild(barDiv)
    barDiv.style.width = `${500 * skills[i].proficiency}px`;

    let labelDiv = document.createElement('div')
    labelDiv.setAttribute('id', `label-${i}`)
    labelDiv.setAttribute('onmouseover', 'hover()')
    labelDiv.setAttribute('onmouseout', 'reset()')
    document.getElementById('acg-label-container').appendChild(labelDiv)
    labelDiv.innerHTML = skills[i].name;
} 

// function hover() {
//     document.getElementById('acg-bar-'+i).style.opacity = '100%';
//     document.getElementById('label-'+i).style.opacity = '100%';
//     document.getElementById('label-'+i).style.fontWeight = 'bold';
// }   

// function reset() {
//     document.getElementById('acg-bar-'+i).style.opacity = '75%';
//     document.getElementById('label-'+i).style.opacity = '85%';
//     document.getElementById('label-'+i).style.fontWeight = 'normal';
// }   

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