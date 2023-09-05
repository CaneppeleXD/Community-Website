var allPagesTiles = [
    {
        title:"New to League of Legends",
        description:"Welcome to League of News. In this you will find a good explanation about what is League of Legends and how its ecosystem works",
        path:"News1.html",
        imagePath:"subPagesAssets/NewToLeagueLogo.jpg",
        imageAlt:"League of Legends Logo with characters in the background"
    },
    {
        title:"Worlds 2023",
        description:"League of Legends World Championship will have 22 participants, among them the CBLOL champion",
        path:"News2.html",
        imagePath:"subPagesAssets/worlds2023logo.jpg",
        imageAlt:"Worlds 2023 logo"
    },
    {
        title:"League of Legends Ranks/Tiers",
        description:"Have you ever wondered what it is when people talk about LoL ranks or like other people say, tiers?",
        path:"News3.html",
        imagePath:"subPagesAssets/tiers.jpg",
        imageAlt:"All League of Legends ranks"
    }
];

var allPagesSrc = document.getElementById("all_pages_display_template").innerHTML;
var allPagesTemplate = Handlebars.compile(allPagesSrc);
var allPagesRendered = allPagesTemplate({tile: allPagesTiles});
document.getElementById("all_pages_display").innerHTML = allPagesRendered;