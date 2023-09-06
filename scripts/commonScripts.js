//Gnerate the sub pages header, it will only generate the header if the page has the "sub_page_header" in any of its elements
if (document.getElementById("sub_page_header") != null) {
    var subPageHeaderSrc = `
    <a href="../index.html">
        <div class="logo">
            <img src="../assets/logo.jpg" alt="League of News Logo and Title" />
        </div>
    </a>
    <nav>
        <input type="checkbox" id="hamburger" />
        <label for="hamburger">☰</label>
        <ul class="list">
            <li id="home_page_header_link" class="list_item"><a href="../index.html">Home</a></li>
            <li id="all_news_header_link" class="list_item"><a href="allNews.html">All News</a></li>
            <li id="new_to_league_header_link" class="list_item"><a href="NewToLeague.html">New To League</a></li>
            <li id="worlds_2023_header_link" class="list_item"><a href="Worlds2023.html">Worlds 2023</a></li>
            <li id="lol_ranks_header_link" class="list_item"><a href="Tiers.html">Lol Ranks</a></li>
        </ul>
    </nav>
    <ul id="font_size_selector">
        <li id="default_font_size"><h3 class="font_size_selector_text">A</h3></li>
        <li id="medium_font_size"><h2 class="font_size_selector_text">A</h2></li>
        <li id="large_font_size"><h1 class="font_size_selector_text">A</h1></li>
    </ul>`;

    var pageHeaderName = document.getElementById("sub_page_header").innerHTML;
    var subPageHeaderTemplate = Handlebars.compile(subPageHeaderSrc);
    var subPageHeaderRendered = subPageHeaderTemplate();
    document.getElementById("sub_page_header").innerHTML = subPageHeaderRendered;
    document.getElementById(pageHeaderName).classList.add("active");
}

//Generate the footer using Handlebars, the footerSrc variable declares the template
var footerSrc = `
<div class="double_column_wide">
    <div class="center_content" id="copyright">
        <span>
            By: João Vitor Caneppele
        </span>
    </div>
    <div class="center_content" id="contact_info">_
        <ul>
            <li>
                E-mail: service@leagueofnews.com
            </li>
            <li>
                Phone: +44 1523 858962
            </li>
        </ul>
    </div>
</div>
`;

var footerTemplate = Handlebars.compile(footerSrc);
var footerRendered = footerTemplate();
document.getElementById("footer").innerHTML = footerRendered;

//Add event listeners so the user can control the font size of the website
document.getElementById("default_font_size").addEventListener("click", function () {
    document.getElementsByTagName("body")[0].className = "default_font_size";
});

document.getElementById("medium_font_size").addEventListener("click", function () {
    document.getElementsByTagName("body")[0].className = "medium_font_size";
});

document.getElementById("large_font_size").addEventListener("click", function () {
    document.getElementsByTagName("body")[0].className = "large_font_size";
});