document.addEventListener('DOMContentLoaded', function () {

    const experiences = [
        {
            'title': 'Freelance Software developer',
            'period': '07/2023 – Present',
            'responsibilities': [
                'Developed Android libraries to enhance functionality and streamline app.',
                'Crafted custom Android applications for private clients and contributed to a variety of open-source projects.',
                'Engineered the backend server, ensuring seamless integration and robust performance.',
                'Write about various topics in software development.'
            ]
        },
        {
            "title":'Full-Stack Developer at Fahd Ibn Abde Alaaziz',
            'period':'11/2022 - 06/2023',
            'responsibilities': [
                'Led the design and implementation of an innovative and efficient system for the high school, featuring a sleek and user-friendly interface.',
                'Independently developed both the backend and frontend, showcasing proficiency in full-stack development to ensure a seamless and cohesive user experience.',
            ]
        },
        {
            'title': 'Full-Stack Developer at Targa',
            'period': '05/2021 - 09/2022',
            'responsibilities': [
                'Constructed web applications for government entities to enhance digital services.',
                'Elevated backend response times by implementing an efficient caching system.',
                'Spearheaded the design and implementation of a novel system for improved efficiency.',
                'Monitored interns and junior software developers.',
                'Provided a new work methodology and led the team in implementing the changes.'
            ]
        },
        {
            'title': 'Freelance Android Software developer',
            'period': '10/2018 – 04/2021',
            'responsibilities': [
                'Built Android applications.',
            ]
        }
    ]

    const jsonData = [
        {
            'name': 'ViDown',
            'image': 'imgs/projects/vidown_img.png',
            'github_url': 'https://github.com/BBlueCoder/ViDown',
            'tech_stack_icons': [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg'
            ]
        },
        {
            'name': 'Cloud Castle API',
            'image': 'imgs/projects/cloud_castle_api.png',
            'github_url': 'https://github.com/BBlueCoder/Cloud-Castle-API',
            'tech_stack_icons': [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
            ]
        },
        {
            'name': 'Cloud Castle',
            'image': 'imgs/projects/cloud_castle_android.png',
            'github_url': 'https://github.com/BBlueCoder/Cloud-Castle-Android',
            'tech_stack_icons': [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg'
            ]
        },
        {
            'name': 'YouDownloaderLib',
            'image': 'imgs/projects/you_download_lib.png',
            'github_url': 'https://github.com/RaIsseMa/YouDownloaderDemo',
            'tech_stack_icons': [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg'
            ]
        }
    ];

    const techStackData = [
        {
            "title":"Android Development",
            "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg",
            "stack": [
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                    "name":"Java"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
                    "name":"Kotlin"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
                    "name":"Flutter"
                },
                {
                    "icon":"https://koenig-media.raywenderlich.com/uploads/2018/01/Mockito-feature.png",
                    "name":"Mockito"
                },
                {
                    "icon":"https://avatars.githubusercontent.com/u/874086?s=280&v=4",
                    "name":"JUnit"
                }
            ]
        },
        {
            "title":"Backend",
            "icon":"imgs/tech/backend.png",
            "stack": [
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                    "name":"Node JS"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                    "name":"Express Js"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
                    "name":"Spring"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
                    "name":"Jest"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
                    "name":"AWS"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
                    "name":"Apache Kafka"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                    "name":"Firebase"
                }
            ]
        },
        {
            "title":"Databases",
            "icon":"imgs/tech/database.png",
            "stack": [
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
                    "name":"MicrosoftSQL Server"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                    "name":"Mongodb"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                    "name":"Postgresql"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
                    "name":"redis"
                }
            ]
        },
        {
            "title":"Frontend",
            "icon":"imgs/tech/ux.png",
            "stack": [
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg",
                    "name":"Angular"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                    "name":"Bootstrap"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                    "name":"CSS"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                    "name":"HTML"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                    "name":"Javascript"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                    "name":"React"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
                    "name":"SASS"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                    "name":"Typerscript"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg",
                    "name":"Webpack"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gulp/gulp-plain.svg",
                    "name":"Gulp"
                }
            ]
        },
        {
            "title":"DevOps",
            "icon":"imgs/tech/devops.png",
            "stack": [
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg",
                    "name":"Circleci"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                    "name":"Docker"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                    "name":"Git"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                    "name":"Github Actions"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg",
                    "name":"Gradle"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
                    "name":"Jenkins"
                }
            ]
        },
        {
            "title":"Others",
            "icon":"imgs/tech/dev.png",
            "stack": [
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                    "name":"Figma"
                },
                {
                    "icon":"https://cdn.worldvectorlogo.com/logos/postman.svg",
                    "name":"Postman"
                },
                {
                    "icon":"https://www.stagil.com/hs-fs/hubfs/agile.png?width=600&height=417&name=agile.png",
                    "name":"Agile"
                },
                {
                    "icon":"imgs/tech/design-software.png",
                    "name":"MVVM/MVC"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
                    "name":"Bash"
                },
                {
                    "icon":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
                    "name":"Canva"
                }
            ]
        },
    ]

    populateTechStack(techStackData);

    const experienceContainer = document.getElementById('experience');

    experiences.forEach((ex) => {
        const expDiv = document.createElement('div');
        expDiv.className = 'time-line-item';

        const expH2 = document.createElement('h2');
        expH2.textContent = ex.title;

        const expH4 = document.createElement('h4');
        expH4.textContent = ex.period;

        const expUl = document.createElement('ul');

        ex.responsibilities.forEach(r => {
            const expLi = document.createElement('li');
            expLi.innerHTML = r;
            expUl.appendChild(expLi);
        })

        expDiv.appendChild(expH2);
        expDiv.appendChild(expH4);
        expDiv.appendChild(expUl);

        experienceContainer.appendChild(expDiv);
    })

    const projectsContainer = document.getElementById('projects-container');

    jsonData.forEach((project) => {

        const projectCard = document.createElement('div');
        projectCard.className = 'project-card col-12-xs col-3-md';

        const githubLink = document.createElement('a');
        githubLink.href = project.github_url;
        githubLink.target = '_blank';


        const projectImage = document.createElement('img');
        projectImage.src = project.image;


        const overlay = document.createElement('div');
        overlay.className = 'overlay';


        const projectName = document.createElement('div');
        projectName.className = 'project-name';
        const projectNameText = document.createElement('h3');
        projectNameText.textContent = project.name;
        projectName.appendChild(projectNameText);

        const techStackIcons = document.createElement('div');
        techStackIcons.className = 'tech-stack-icons';


        project.tech_stack_icons.forEach((iconUrl) => {

            const iconImage = document.createElement('img');
            iconImage.src = iconUrl;
            techStackIcons.appendChild(iconImage);
        });

        githubLink.appendChild(projectImage);
        githubLink.appendChild(overlay);
        githubLink.appendChild(projectName);
        githubLink.appendChild(techStackIcons);
        projectCard.appendChild(githubLink);

        projectsContainer.appendChild(projectCard);
    });
});

document.querySelectorAll('.sidebar a, .navbar-responsive a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }

        hideSidebar();
    });
});



window.addEventListener('resize', function () {
    var sidebar = document.querySelector('.sidebar');
    if (window.innerWidth > 720 && sidebar.classList.contains('active')) {
        hideSidebar();
    }
});

function populateTechStack(data) {
    const container = document.getElementById('tech-stack-container');
    data.forEach(tech => {
        const techItemDiv = document.createElement('div');
        techItemDiv.className = 'tech-stack-item col-12-xs col-5-md text-center';

        const techItemImg = document.createElement('img');
        techItemImg.className = "tech-stack-icon";
        techItemImg.src = tech.icon;

        const techItemBtn = document.createElement('button');
        techItemBtn.className = 'collapsible'
        techItemBtn.innerHTML = tech.title;

        const techContentDiv = document.createElement('div');
        techContentDiv.className = "collapsed-content";

        tech.stack.sort((a,b)=>a.name.localeCompare(b.name)).forEach(s=> {
            const techStackDiv = document.createElement('div');
            const techStackImg = document.createElement('img');
            techStackImg.src = s.icon;

            techStackDiv.appendChild(techStackImg);
            techStackDiv.append(s.name);

            techContentDiv.appendChild(techStackDiv);
        })

        techItemDiv.appendChild(techItemImg);
        techItemDiv.appendChild(techItemBtn);
        techItemDiv.appendChild(techContentDiv);

        container.append(techItemDiv);
    });

    addClickEventToCollapsibleButtons();
}

function addClickEventToCollapsibleButtons(){
    document.querySelectorAll('.collapsible').forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.toggle('collapsible-open');
            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight+10 + "px";
            }
        })
    });
}

const openSidebarButton = document.getElementById("show-sidebar-icon")
const closeSidebarButton = document.getElementById("close-sidebar-icon")

function showSidebar() {
    document.getElementsByClassName('sidebar')[0].classList.add('active');
}

function hideSidebar() {
    document.getElementsByClassName('sidebar')[0].classList.remove('active');
}

openSidebarButton.onclick = showSidebar
closeSidebarButton.onclick = hideSidebar