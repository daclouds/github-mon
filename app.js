var github = require('octonode');
//var client = github.client({
//    username: '<username>',
//    password: '<password>'   
//});
var client = github.client();

function publicRepositories(org, callback) {
    var ghorg = client.org(org);
    ghorg.repos(callback);
}

function members(org, callback) {
    var ghorg = client.org(org);
    ghorg.members(callback);
}

publicRepositories('codeport', function(err, repos) {
    if (repos == undefined) throw err;
    repos.forEach(function(repo, idx) {
        //console.log(repo);
        if (repo.private == false) {
            console.log(repo.full_name);
        }
    });
});
