function setUp() {
    var master = document.forms.Form;
    var button = document.getElementById("add");
    var newcomer = document.getElementById("flex-box");


    master.title.onfocus = function() {
        master.title.style.backgroundColor = "#ffffff";
        master.title.style.color = "#342b9e";
    }

    master.title.onblur = function() {
        master.title.style.backgroundColor = "transparent";
        master.title.style.color = "#ffffff";
    }


    master.author.onfocus = function() {
        master.author.style.backgroundColor = "#ffffff";
        master.author.style.color = "#342b9e";
    }

    master.author.onblur = function() {
        master.author.style.backgroundColor = "transparent";
        master.author.style.color = "#ffffff";
    }


    master.onsubmit = function(event) {
        event.returnValue = false;
        
        var breaker = document.createElement("div");
        breaker.setAttribute("class", "books-rect");
        var box = newcomer.appendChild(breaker);
        var progress = document.createElement("p");
        progress.setAttribute("id", "progress-percent");
        progress.textContent = "0%";
        box.appendChild(progress);
        var exile = document.createElement("button");
        exile.setAttribute("type", "submit");
        exile.textContent = "Delete";
        box.appendChild(exile);
        var owner = document.createElement("span");
        owner.setAttribute("style", "float: left; clear: left;");
        var first = document.createElement("h2");
        first.textContent = master.title.value;
        var second = document.createElement("p");
        second.textContent = master.author.value;
        var third = document.createElement("div");
        third.setAttribute("class", "progress-tracker");
        var thirdChild = document.createElement("div");
        thirdChild.setAttribute("class", "progress");
        third.appendChild(thirdChild);
        box.appendChild(first);
        box.appendChild(second);
        box.appendChild(third);


        event.returnValue = true;
    }

    button.onsubmit(submit);

    console.log(breaker);

}

window.onload = function() {
    setUp();
}
