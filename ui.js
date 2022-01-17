class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        console.log(user);
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <h4><span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge bg-success">Followers: ${user.followers}</span>
                        <span class="badge bg-info">Following: ${user.following}</span></h4>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1 class="page-heading mb-3">Latest Repos:</h1>
            <div id="repos"></div>
        `;
    }

    // Show user repos
    showRepos(repos) {
        let output = '';
        repos.forEach(function(repos) {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repos.html_url}" target="_blank" id="repos">${repos.name}</a>
                    </div>
                    <div class="col-md-6">
                    <span class="badge bg-primary"> Stars: ${repos.stargazers_count}</span>
                    <span class="badge bg-secondary"> Watchers: ${repos.watchers_count}</span>
                    <span class="badge bg-success"> Forks: ${repos.form_count}</span>
                    </div>
                </div>
            </div>
            `;
        });
        // show repos
        document.getElementById('repos').innerHTML = output;

    }
    
    // show alert message for user not found
    showAlert(message, className) {
        // cleart alert
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search);

        // Timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }

    // Clear alert
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    // clear profile display
    clearProfile() {
        this.profile.innerHTML = '';
    }
}