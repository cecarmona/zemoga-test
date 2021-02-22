//The next code was made by Carlos Carmona
const cards = document.querySelector(".rulings-container"),
    template = document.getElementById("app").content,
    fragment = document.createDocumentFragment(),
    cardContent = [
        {
            id: "0",
            title: "Kanye West",
            excerpt:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore nam labore neque facilis.",
            date: "01-17-21",
            category: "Entertainment",
            image: "../img/kanye-west.png",
            negativeVote: 0,
            positiveVote: 0,
            totalVotes: 0
        },
        {
            id: "1",
            title: "Mark Zuckerberg",
            excerpt:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore nam labore neque facilis.",
            date: "01-17-21",
            category: "Business",
            image: "../img/Mark.png",
            negativeVote: 35,
            positiveVote: 90,
            totalVotes: 0
        },
        {
            id: "2",
            title: "Cristina Fernández de Kirchner",
            excerpt:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore nam labore neque facilis.",
            date: "01-17-21",
            category: "Politics",
            image: "../img/Cristina.png",
            negativeVote: 50,
            positiveVote: 20,
            totalVotes: 0
        },
        {
            id: "3",
            title: "Malala Yousafzai",
            excerpt:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore nam labore neque facilis.",
            date: "01-17-21",
            category: "Entertainment",
            image: "../img/Malala.png",
            negativeVote: 30,
            positiveVote: 55,
            totalVotes: 0
        }
    ];
//Creating global variables to use data outside "Foreach"
newPositiveVotes = [];
newNegativeVotes = [];

//ARRAY OF ELEMENTS
cardContent.forEach((el, i) => {
    id = el.id;
    let goodVotes = el.positiveVote;
    let badVotes = el.negativeVote;
    let totalVotes = goodVotes + badVotes;
    let positiveVote = Math.round((goodVotes / totalVotes) * 100);
    let negativeVote = Math.round((badVotes / totalVotes) * 100);
    newPositiveVotes.push(el["positiveVote"]);
    newNegativeVotes.push(el["negativeVote"]);

    //Box image
    template.querySelector(".ruling-box").setAttribute(
        "style",
        `background-image:linear-gradient(to bottom,
    rgba(0, 0, 0, 0) 30%,rgba(0, 0, 0, 0.7) 100%),
    url(${el.image});`
    );
    //Box Title
    template.querySelector(".ruling-box_title").textContent = el.title;
    //Box Excerpt
    template.querySelector(".ruling-box_excerpt").textContent = el.excerpt;
    //ID for Excerpt
    template
        .querySelector(".ruling-box_excerpt")
        .setAttribute("id", `desc${i}`);
    //Box Category
    template.querySelector(
        ".ruling-box_category"
    ).textContent = `in ${el.category}`;

    //Box Positive Votes
    if (goodVotes === 0) {
        template
            .querySelector(".ruling-box_results--good")
            .setAttribute("style", `width: 50%; justify-content:center;`);
        template.querySelector(".positive_qty").textContent = " ";
    } else {
        template
            .querySelector(".ruling-box_results--good")
            .setAttribute("style", `width: ${positiveVote}%`);
        template.querySelector(
            ".positive_qty"
        ).textContent = `${positiveVote}%`;
    }
    //ID for each positive vote button
    template.querySelector(".positive-vote").setAttribute("id", `p${id}`);
    template
        .querySelector(".ruling-box_results--good")
        .setAttribute("id", `pb${id}`);
    template.querySelector(".positive_qty").setAttribute("id", `pq${id}`);

    //Box Negative Votes
    if (badVotes === 0) {
        template
            .querySelector(".ruling-box_results--bad")
            .setAttribute("style", `width: 50%; justify-content:center;`);
        template.querySelector(".negative_qty").textContent = " ";
    } else {
        template
            .querySelector(".ruling-box_results--bad")
            .setAttribute("style", `width: ${negativeVote}%`);
        template.querySelector(
            ".negative_qty"
        ).textContent = `${negativeVote}%`;
    }
    //ID for each negative vote button
    template.querySelector(".negative-vote").setAttribute("id", `n${id}`);
    template
        .querySelector(".ruling-box_results--bad")
        .setAttribute("id", `nb${id}`);
    template.querySelector(".negative_qty").setAttribute("id", `nq${id}`);

    //ID for button Vote Now
    template
        .querySelector(".ruling-box_vote--btn")
        .setAttribute("id", `v${id}`);
    //ID for button Vote Again
    template.querySelector(".btn-vote_again").setAttribute("id", `va${id}`);
    //ID for voting box
    template.querySelector(".ruling-box_vote").setAttribute("id", `vc${id}`);
    //ID for thanks message
    template.querySelector(".ruling-box_thanks").setAttribute("id", `thx${id}`);
    //ID for Thumb icon
    template.querySelector(".ruling-box_thumb").setAttribute("id", `rbt${id}`);

    // Using the conent from template for each element inside
    let clone = document.importNode(template, true);
    fragment.appendChild(clone);
});

// Using our template
cards.appendChild(fragment);

//Recognize Option Selected
const limit = cardContent.length;

for (let i = 0; i <= limit; i++) {
    const positiveButton = document.querySelector(`#p${i}`);
    const negativeButton = document.querySelector(`#n${i}`);
    const positiveBox = document.querySelector(`#pb${i}`);
    const negativeBox = document.querySelector(`#nb${i}`);
    let positiveTotal = document.querySelector(`#pt${i}`);
    let negativeTotal = document.querySelector(`#nt${i}`);
    const votingContainer = document.querySelector(`#vc${i}`);
    const excerpt = document.querySelector(`#desc${i}`);
    const thxMessage = document.querySelector(`#thx${i}`);
    const thumbIcon = document.querySelector(`#rbt${i}`);
    let goodVotes = newPositiveVotes[i];
    let badVotes = newNegativeVotes[i];

    //Positive Vote Process
    if (positiveButton) {
        positiveButton.addEventListener("click", () => {
            negativeButton.classList.remove("selected");
            positiveButton.classList.add("selected");
        });
    }

    //Negative Vote Process
    if (negativeButton) {
        negativeButton.addEventListener("click", () => {
            positiveButton.classList.remove("selected");
            negativeButton.classList.add("selected");
        });
    }

    //Adding votes depending of option selected
    const voteButton = document.querySelector(`#v${i}`);
    const voteAgainButton = document.querySelector(`#va${i}`);
    if (voteButton) {
        voteButton.addEventListener("click", () => {
            //Checking if vote is positive
            if (positiveButton.classList.contains("selected")) {
                newPositiveVotes[i] = newPositiveVotes[i] + 1;
            } else if (negativeButton.classList.contains("selected")) {
                newNegativeVotes[i] = newNegativeVotes[i] + 1;
            } else {
                alert("Por favor seleccione una de las opciones!");
            }
            //Applying Results to template
            let goodVotes = newPositiveVotes[i];
            let badVotes = newNegativeVotes[i];
            let totalVotes = goodVotes + badVotes;
            let positiveVote = Math.round((goodVotes / totalVotes) * 100);
            let negativeVote = Math.round((badVotes / totalVotes) * 100);

            //Box Positive Votes
            if (goodVotes === 0) {
                document
                    .querySelector(`#pb${i}`)
                    .setAttribute(
                        "style",
                        `width: 50%; justify-content:center;`
                    );
                document.querySelector(`#pq${i}`).textContent = " ";
            } else {
                document
                    .querySelector(`#pb${i}`)
                    .setAttribute(
                        "style",
                        `width: ${positiveVote}%;transition: width 0.7s ease;`
                    );
                document.querySelector(
                    `#pq${i}`
                ).textContent = `${positiveVote}%`;
            }

            //Box Positive Votes
            if (negativeVote === 0) {
                document
                    .querySelector(`#nb${i}`)
                    .setAttribute(
                        "style",
                        `width: 50%; justify-content:center;`
                    );
                document.querySelector(`#pq${i}`).textContent = " ";
            } else {
                document
                    .querySelector(`#nb${i}`)
                    .setAttribute(
                        "style",
                        `width: ${negativeVote}%; transition: width 0.7s ease;`
                    );
                document.querySelector(
                    `#nq${i}`
                ).textContent = `${negativeVote}%`;
            }
            //Show o hide elements
            if (
                positiveButton.classList.contains("selected") ||
                negativeButton.classList.contains("selected")
            ) {
                votingContainer.classList.add("hide-elements");
                excerpt.classList.add("hide-elements");
                voteAgainButton.classList.remove("hide-elements");
                thxMessage.classList.remove("hide-elements");
            }

            //Change Icon according to Votes on click!!
            if (goodVotes > badVotes) {
                thumbIcon.classList.remove("fa-thumbs-down");
                thumbIcon.classList.add("fa-thumbs-up");
                thumbIcon.setAttribute("style", "background-color: #1cbbb4;");
            } else if (goodVotes < badVotes) {
                thumbIcon.classList.remove("fa-thumbs-up");
                thumbIcon.classList.add("fa-thumbs-down");
                thumbIcon.setAttribute("style", "background-color: #ffad1d;");
            }
        });
    }

    if (voteAgainButton) {
        voteAgainButton.addEventListener("click", () => {
            positiveButton.classList.remove("selected");
            negativeButton.classList.remove("selected");
            thxMessage.classList.add("hide-elements");
            voteAgainButton.classList.add("hide-elements");
            votingContainer.classList.remove("hide-elements");
            excerpt.classList.remove("hide-elements");
        });
    }
    //Change Icon according to Votes
    if (goodVotes > badVotes) {
        thumbIcon.classList.remove("fa-thumbs-down");
        thumbIcon.classList.add("fa-thumbs-up");
        thumbIcon.setAttribute("style", "background-color: #1cbbb4;");
    } else if (goodVotes < badVotes) {
        thumbIcon.classList.remove("fa-thumbs-up");
        thumbIcon.classList.add("fa-thumbs-down");
        thumbIcon.setAttribute("style", "background-color: #ffad1d;");
    }
}
