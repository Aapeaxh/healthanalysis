
document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById('loadProjects').addEventListener('click', function() {
        const projectsContainer = document.getElementById('projectsContainer');
        // Toggle display of projectsContainer
        if (projectsContainer.style.display === 'none' || projectsContainer.style.display === '') {
            projectsContainer.style.display = 'block';
            projectsContainer.innerHTML = `
                <div class="project">
                    <h3>SQL Project</h3>
                    <p>System Design for Start-up Enterprises (SQL)</p>
                </div>
                <div class="project">
                    <h3>Python Project</h3>
                    <p>Software Development using Python.</p>
                </div>
                <div class="project">
                    <h3>Database Project</h3>
                    <p>Organization Database Design with Data-processing Needs</p>
                </div>`;
        } else {
            projectsContainer.style.display = 'none';
            projectsContainer.innerHTML = '';
        }
    });
});

