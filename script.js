$(function () {
    //listen for the form
    $("#js-shopping-list-form").on("submit", function (event) {
        // stop default form submission
        event.preventDefault();

        //get the input value for the next item.
        const input = $("#shopping-list-entry").val();
        //clear the input after enter
        $("#shopping-list-entry").val("");

        //add new item to the list
        $(".shopping-list").append(
            `<li>
              <span class="shopping-item">${input}</span>
              <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                  <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                  <span class="button-label">delete</span>
                </button>
              </div>
            </li>`
        );
    });

    // when a click the button, it will toggle
    $(".shopping-list").on("click", ".shopping-item-toggle", function (event) {
        // go up to parent li, then find the child shopping-item  and toggle '.shopping-item__checked' class that has a line-throuh decoration

        /*closest():
            - Begins with the current element and returns the first (single) ancestor that matches the passed expression*/

        $(this)
            .closest("li")
            .find(".shopping-item")
            .toggleClass("shopping-item__checked");
    });

    // listen for click events on delete buttons for shopping list and add the event listener on parent element

    $(".shopping-list").on("click", ".shopping-item-delete", function (event) {
        // this will look for the closest parent `li` element and remove it.
        // in other words, it will remove shopping list item.
        $(this)
            .closest("li")
            .remove();
    });
});
