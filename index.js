document.addEventListener('DOMContentLoaded', function () {

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
            'name': 'YouDownloaderLib',
            'image': 'imgs/projects/you_download_lib.png',
            'github_url': 'https://github.com/RaIsseMa/YouDownloaderDemo',
            'tech_stack_icons': [
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg'
            ]
        }
    ];

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

document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

window.addEventListener('resize', function() {
    var sidebar = document.querySelector('.sidebar');
    if (window.innerWidth > 720 && sidebar.classList.contains('active')) {
        hideSidebar();
    }
});

function showSidebar(){
    document.getElementsByClassName('sidebar')[0].classList.add('active');
}

function hideSidebar(){
    document.getElementsByClassName('sidebar')[0].classList.remove('active');
}