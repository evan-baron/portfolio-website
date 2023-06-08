let project = [
    {
        name: 'Welcome_',
        size: '5rem',
        content: `Hello!<br><br>My name is Evan Baron and I am a junior software developer! I am transitioning my career out of sales and into software development. I have a rich understanding of how to work with clients, organize projects, and meet deadlines. For more information about my background and abilities, click the 'About' link to the right or find it in the drop down if on mobile!<br><br>Thanks for stopping by!<br>
        <br>
        <div class='sig'></div>
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
        mastery: 'master'
    },
    {
        name: 'CSS',
        proficiency: .7,
        mastery: 'proficient'
    },
    {
        name: 'JavaScript',
        proficiency: .35,
        mastery: 'novice'
    },
    {
        name: 'Sql',
        proficiency: .75,
        mastery: 'proficient'
    }
]

let messageArray = ['Welcome'];
let textPosition = 0;
let speed = 80;

//typewriter effect
function typewriter() {
    document.getElementById('project-title').innerHTML = messageArray[0].substring(0, textPosition) + '<span>_</span>';
    if (textPosition++ != messageArray[0].length) {
        setTimeout(typewriter, speed);
    }
}

window.addEventListener('load', typewriter);

for (let i = 0; i < project.length; i++) {
    document.getElementById('lc-'+[i]).innerHTML = project[i].name;
}

let projectTitle = document.getElementById('project-title')
let projectContent = document.getElementById('project-content')
projectShow(0);

projectTitle.innerHTML = project[0].name;
projectContent.innerHTML = project[0].content;

//shows and switches between projects
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
                document.getElementById('plink-row').style.display = 'flex';
                pLink.style.display = 'inline-block';
            }
        }
    }
}

let aboutMeDisplay = document.getElementById('about-me-container');

//makes aboutme appear
function aboutMe() {
    aboutMeDisplay.style.display = 'block';

    for (let i = 0; i<skills.length; i++) {

        let barDiv = document.createElement('div')
        barDiv.setAttribute('class', `bar acg-bar-${i} row-${i} ${skills[i].mastery}`)
        barDiv.setAttribute('id', `acg-bar-${i}`)
        barDiv.setAttribute('onmouseover', `toggleHighlight('row-${i}','over')`)
        barDiv.setAttribute('onmouseout', `toggleHighlight('row-${i}', 'out')`)
        document.getElementById('acg-background').appendChild(barDiv)
        barDiv.style.width = `${400 * skills[i].proficiency}px`;
    
        let labelDiv = document.createElement('div')
        labelDiv.setAttribute('class', `row-${i} ${skills[i].mastery}`)
        labelDiv.setAttribute('id', `label-${i}`)
        labelDiv.setAttribute('onmouseover', `toggleHighlight('row-${i}','over')`)
        labelDiv.setAttribute('onmouseout', `toggleHighlight('row-${i}', 'out')`)
        document.getElementById('acg-label-container').appendChild(labelDiv)
        labelDiv.innerHTML = skills[i].name;
    } 
}

//makes bars and labels on graph glow
function toggleHighlight(className, mode) {
    let otherArr = document.getElementsByClassName(className);
    for (let i = 0; i<otherArr.length; i++) {
        let curObj = otherArr[i]
        curObj.style.opacity = (mode == 'over' ? '100%' : '85%')
        curObj.style.fontWeight = (mode == 'over' ? 'bold' : 'normal')
    }
}

//makes aboutme disappear
function disappear() {
    aboutMeDisplay.style.display = 'none';

    for (let i = 0; i<skills.length; i++) {
        document.getElementById('acg-bar-'+i).remove();
        document.getElementById('label-'+i).remove();
    }
}

//hamburger menu function
function hamburger() {
    let dropdown = document.getElementById('dropdown-menu');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        document.getElementById('hamburger-background').style.display = 'none';
        document.getElementById('nav-bar').style.boxShadow = 'none';
    } else {
        dropdown.style.display = 'block';
        document.getElementById('hamburger-background').style.display = 'block';
        document.getElementById('hamburger-background').style.boxShadow = 'inset 0 25px 50px black';
    }
}

//measuring width of text
function getTextWidth(text, font) {
    const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement('canvas'));
    const context = canvas.getContext('2d');
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
}
    
function getCssStyle(element, prop) {
        return window.getComputedStyle(element, null).getPropertyValue(prop);
}
    
function getCanvasFont(el = document.body) {
    const fontWeight = getCssStyle(el, 'font-weight') || 'normal';
    const fontSize = getCssStyle(el, 'font-size') || '16px';
    const fontFamily = getCssStyle(el, 'font-family') || 'Times New Roman';
    
    return `${fontWeight} ${fontSize} ${fontFamily}`;
}