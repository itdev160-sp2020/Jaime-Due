$(function() {
    var data = [
        {
            id: 1,
            title: "Financial Literacy",
            body: "I mean it's one banana [...] How much could it cost?  10 dollars?",
            author: "Lucille Bluth"
        },
        { 
            id: 2,
            title: "Socializing",
            body: "In social situations I always hold onto my glass. It makes me feel comfortable and safe and I don't have to shake hands.",
            author: "Larry David"
        },
        {
            id: 3,
            title: "Anger Management",
            body: "I am untehered and my rage knows no bounds.",
            author: "Dennis Reynolds"
        },
        {
            id: 4,
            title: "Balance",
            body: "I'm sober enough to know what I'm doing and drunk enough to really enjoy doing it.",
            author: "Jim Lahey"
        },
        {
            id: 5,
            title: "Self Confidence",
            body: "I spend a lot of time with the real me and, believe me, nobody's gonna love that guy.",
            author: "Bojack Horseman"
        }

    ];

    var $nav = $("#nav-container");
    var $intro = $("#intro");
    var $posts = $("#post-container");

    function initPosts() {
        for (let i = 0; i < data.length; i++) {
            var postId = "post-" + data[i].id,
            $post = $("<section class='post'></section>"),
            $title = $("<h2  class='title'></h2>"),
            $body = $("<blockquote></blockquote>"),
            $author = $("<span class='author'></span>"),
            $navItem = $("<li></li>");

        $title.text(data[i].tlte);
        $body.text(data[i].body);
        $author.text(data[i].author);

        $navItem.attr("id", data[i].id);
        $navItem.text(data[i].title);

        $post.attr("id", postId);
        $post.append($title);
        $post.append($body);
        $post.append($author);

        $posts.append($post);
        $nav.append($navItem);

        $navItem.on("click", function() {
            var id = $(this).attr("id");
            $posts.children().hide();
            $posts.find("#post-" + id).fadeIn();
        });

        $posts.children(".post").hide();
        $intro.fadeIn(1000);
        }
    }

    initPosts();
});