function myFunction(n) {
    if(n==1){
        document.getElementById("about").classList.add('active_nav_link');
        document.getElementById("projects").classList.remove('active_nav_link');
        document.getElementById("socials").classList.remove('active_nav_link');

        document.getElementById("content").innerHTML="Welcome to about";
    }
    if(n==2){
        document.getElementById("projects").classList.add('active_nav_link');
        document.getElementById("about").classList.remove('active_nav_link');
        document.getElementById("socials").classList.remove('active_nav_link');

        document.getElementById("content").innerHTML="Welcome to projects";
    }
    if(n==3){
        document.getElementById("socials").classList.add('active_nav_link');
        document.getElementById("about").classList.remove('active_nav_link');
        document.getElementById("projects").classList.remove('active_nav_link');

        document.getElementById("content").innerHTML="Welcome to socials";
    }
}

about.onclick = () => myFunction(1);
projects.onclick = () => myFunction(2);
socials.onclick = () => myFunction(3);