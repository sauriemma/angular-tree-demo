
## How to set up AngularJS applications in terms of project structure, tools, dependency management, test automation and code distribution. 

    AngularJS project structure and toolchain.
    http://manuel.kiessling.net/2014/06/09/creating-a-useful-angularjs-project-structure-and-toolchain/
       
    AngularJS seed project.
    https://github.com/manuelkiessling/angular-seed-enhanced    
    

## Angular Material Design    
    
    https://material.angularjs.org
    
    https://www.toptal.com/angular-js/ultra-modern-web-apps-angular-material
    
    https://github.com/mattspaulding/angular-material-kitchen-sink
    
## How to submit changes to remote.

    Change files.
    git status 
    git diff
    git add <file>
    git status 
    git diff --staged
    git commit -m "<message>"
    + see files about to be pushed
    git diff --stat --cached origin/master
    + see file and changes about to be pushed
    git diff --stat --patch origin master
    git push

## How to diff remote and local and pull changes.
    git fetch
    + see files about to be pulled
    git diff --stat --cached origin/master
    + see file and changes about to be pulled
    git diff master...remotes/origin/master
    + see info about origin including if its up to date
    git remote show origin
    git pull

## How to create a repo.
    echo "+ angular-tree-demo" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin https://github.com/sauriemma/angular-tree-demo.git
    git push -u origin master

## Miscellaneous git commands.

### Get list of branches.
    git branch -a
    * master
      remotes/origin/master
  
### Merge
    git merge

### Only push the branch that would be effected with pull
    git config --global push.default simple

#### Operate on the entire tree
    git add -a
    git commit -a
    git add -u
    git add -A

## Miscellaneous links.    
        
    Git Tutorial
    https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-init
    
    GitHub Pages
    https://pages.github.com/
    
    WordPress
    https://wordpress.com/
    https://wordpress.org/showcase/
    
    Domain Name
    http://www.domainname.com/
    https://www.namecheap.com
    
    Code Academy
    https://www.codecademy.com/learn/setup
    
    Markdown Cheatsheet
    https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
    
    Always Trigger The $destroy Event Before Removing Elements In AngularJS Directives
    https://www.youtube.com/watch?v=PY-c3PIc0bA
    http://makandracards.com/makandra/31289-how-to-create-giant-memory-leaks-in-angularjs


```javascript

// Remove the jQuery event when angular scope is destroyed.
function(scope, jqelement, attrs) { 
  jqelement.on('click', function() {
    scope.selected = true;
  });
  scope.$on('$destroy', function() {
      jqelement.off(); // deregister all event handlers
  })''
}

// Register and get a handle to the listener
var listener = $scope.$on('someMessage', function () {
    $log.log("Message received");
});

// Unregister - Call de-registration function returned from on listener.
$scope.$on('$destroy', function () {
    $log.log("Unregistering listener");
    listener();  // Call de-registration function.
});
```