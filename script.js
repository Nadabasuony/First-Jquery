$(function(){
    
    let addButton = $("button");
    let tasks = $("input");
    let tasksBox = $(".tasksBox");

    addButton.click(function(){
        let doneButton = $("<button> Done </button>");
        let deleteButton = $("<button> Delete </button>");
        let element = $("<div></div>");
        let container = $("<div></div>");

        doneButton.addClass("done");
        deleteButton.addClass("delete");
        element.css({
            width: "350px",
            height: "25px",
            border: "solid 2px rgba(0, 0, 0, 0.363)",
            borderRadius: "16px",
            paddingLeft: "15px",
            paddingTop: "2px",
            display: "inline-block",
            background: "antiquewhite",
            marginTop: "8px",
            marginLeft: "50px",
            marginBottom: "8px"
        });
    
        element.append(tasks.val());
        container.append(element);
        container.append(doneButton);
        container.append(deleteButton);
        tasksBox.append(container);

        doneButton.click(function(){
            container.css({
                background: "rgb(168, 24, 24)",
            });
        });

        deleteButton.click(function(){
            container.remove();
        });
    });
});