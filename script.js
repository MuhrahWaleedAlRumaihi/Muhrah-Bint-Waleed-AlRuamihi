window.onload = function () {

    alert("Welcome to Muhrah's Personal Portfolio!");

    const heading = document.querySelector("h1");

    let userName = "";

    while (true) {

        userName = prompt("Enter your name (English letters only):");

        if (userName === null) {
            userName = "Guest";
            break;
        }

        userName = userName.trim();

        if (/^[A-Za-z\s]+$/.test(userName)) {

            alert("Hello " + userName + "!");

            // ===== Secret Easter Egg =====
            if (userName.toLowerCase() === "saiyaf") {

                alert("👑 Secret Mode Activated!");

               document.body.style.background =
               "linear-gradient(135deg, #FFD700, #968109, #9e7c16)";

                document.body.style.color = "black";

                document.title = "👑 CEO of Saiyaf";

                if (heading) {
                    heading.innerHTML = "👑 Welcome Boss!";
                    heading.style.color = "#8B7500";
                }

                let card = document.querySelector(".card");
                if (card) {
                    card.style.background = "#f5f4f2";
                    card.style.color = "black";
                    card.style.border = "3px solid black";
                }

                let footer = document.querySelector("footer");
                if (footer) {
                    footer.style.background = "#ecece8";
                    footer.style.color = "white";
                }

            }

            break;

        } else {

            alert("❌ Error!\nPlease enter your name using English letters only.");

        }

    }

    if (heading) {
        heading.style.color = "darkblue";
    }

    window.changeTitle = function () {

        let name = prompt("Enter your name (English letters only):");

        while (!/^[A-Za-z\s]+$/.test(name) || name.trim() === "") {

            alert("❌ Error: Name must contain English letters only.");

            name = prompt("Please enter your name again:");

        }

        document.title = "Welcome " + name + "!";

        if (name.toLowerCase() === "saiyaf") {

            alert("👑 Secret Mode Activated!");

            document.body.style.background =
                "linear-gradient(135deg, #FFD700, #7b6407, #F4C430)";

            document.body.style.color = "black";

            document.title = "👑 CEO of Saiyaf";

            if (heading) {
                heading.innerHTML = "👑 Welcome Boss!";
                heading.style.color = "#8B7500";
            }

            let card = document.querySelector(".card");
            if (card) {
                card.style.background = "#FFD700";
                card.style.color = "black";
                card.style.border = "3px solid black";
            }

            let footer = document.querySelector("footer");
            if (footer) {
                footer.style.background = "#8B7500";
                footer.style.color = "white";
            }

        } else {

            document.body.style.background =
            "linear-gradient(135deg,#eef6ff,#dbeafe,#f8fbff)";
            document.body.style.color = "#1f2937";

            if (heading) {
                heading.innerHTML = "Welcome to Muhrah's website!!";
                heading.style.color = "darkblue";
            }

            let card = document.querySelector(".card");
            if (card) {
                card.style.background = "white";
                card.style.color = "#1f2937";
                card.style.border = "none";
            }

            let footer = document.querySelector("footer");
            if (footer) {
               footer.style.background = "#003366";
               footer.style.color = "white"; 
            }

        }

    };
        window.checkGrade = function () {

        let grade;

        while (true) {

            grade = prompt("Enter your total grade (30 - 100):");

            if (grade === null) {
                return;
            }

            if (isNaN(grade) || grade.trim() === "") {
                alert("❌ Error!\nPlease enter numbers only.");
                continue;
            }

            grade = Number(grade);

            if (grade < 30 || grade > 100) {
                alert("❌ Error!\nThe grade must be between 30 and 100.");
                continue;
            }

            break;
        }

        if (grade >= 90) {
            alert("🌟 Excellent");
        }
        else if (grade >= 75) {
            alert("✅ Very Good");
        }
        else if (grade >= 60) {
            alert("👍 Good");
        }
        else {
            alert("❌ Failed");
        }

    };

    window.changeTheme = function () {

        document.body.classList.toggle("dark");

    };

    window.changeColor = function () {

        let colors = [
            "red",
            "blue",
            "green",
            "purple",
            "orange",
            "#00b894"
        ];

        let random = Math.floor(Math.random() * colors.length);

        if (heading) {
            heading.style.color = colors[random];
        }

    };

    let visitorCount = localStorage.getItem("visitorCount") || 0;
    if (visitorCount === null) {
        visitorCount = 1;
    }else {
        visitorCount = parseInt(visitorCount) + 1;
    }
    localStorage.setItem("visitorCount", visitorCount);
    let visitorInfo = document.getElementById("visitorInfo");
    visitorInfo.textContent = " You have visited this page " + visitorCount + " times.";
};
