"use strict";

$(() => {
    // create coins on page load , only when you on index page //
    // --- only if you run the site online --- //
    if (window.location.pathname === "/index.html") {
        createCoins();
    }
    // ----- Navbar onClick -------- //
    $("#coinsPage").click(() => {
        $(".pageContent").html(() => {
            createCoins();
        });
    });

    $("#reportsPage").click(() => {
        getAllCoins();
        $(".pageContent").html(`
        <div id="chartContainer" style="height: 300px; width: 100%;">
        </div>
        `);
        canvasAjax();
    });

    $("#aboutPage").click(() => {
        $(".pageContent").html(`
        <div class="about text-center">
        <img src="https://newsnotpolitics.com/wp-content/uploads/2019/11/shutterstock_348257285-1024x665.jpg" />
        <h1 class="text-danger bg-dark">My name is Victor Nikiforov , this site created for my study project .</h>
        </div>
        `);
    });

    $("#searchBotton").click(() => {
        const inputValue = $("#searchInput").val();
        if (inputValue === "") {
            alert("please enter name of coin");
        }
        $(".row").hide();
        $(".searchResult").html($(`.${inputValue}`));
    });
    /// ------------------------------------------------- //
});
