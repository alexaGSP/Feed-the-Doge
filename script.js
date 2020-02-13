$("#start").click(function() {
    $("#dogesays").text("I'm hungry. Feed me!");
    $("#feed").toggle();
    $("#dontfeed").show();
    $("#start").hide();
});
$("#dontfeed").click(function() {
    $("#dogesays").text("Wait..");
    $("#feed").text("Are you sure? Double click it");
    $("#start").hide();
    $("#doge").attr("src", "https://dogtrainingbreeds.com//wp-content/uploads/2013/09/shiba-inu-whining-3.jpg");
    $("#wordbone").hide();
    $("#wordchoco").hide();
});
$("#dontfeed").dblclick(function() {
    $("#dogesays").text("Please!");
    $("#feed").text("Doge will starve! You lost!");
    $("#doge").attr("src", "https://i.imgflip.com/2xy2vw.jpg");
});
$("#chocolate").click(function() {
    $("#doge").attr("src", "https://dogtrainingbreeds.com//wp-content/uploads/2013/09/shiba-inu-whining-3.jpg");
    $("#dogesays").text("Umm..");
    $("#wordchoco").show();
    $("#wordbone").hide();
    $("#feed").text("Are you sure? Double click it");
});
$("#chocolate").dblclick(function() {
    $("#doge").attr("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/69996eb3-16b0-42f8-8ef8-52898ec0605b/d9c3fsj-ac103d38-ebcb-4471-b5a0-4a8b01cd346f.png/v1/fill/w_420,h_367,strp/angry_doge_render_by_princesskillerbee_d9c3fsj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzY3IiwicGF0aCI6IlwvZlwvNjk5OTZlYjMtMTZiMC00MmY4LThlZjgtNTI4OThlYzA2MDViXC9kOWMzZnNqLWFjMTAzZDM4LWViY2ItNDQ3MS1iNWEwLTRhOGIwMWNkMzQ2Zi5wbmciLCJ3aWR0aCI6Ijw9NDIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.KSysjLqpXKW4hMPDewLJv9dQytxHS6emASFUzvKAV-E");
    $("#dogesays").text("NO!");
    $("#feed").text("Doge can't eat chocolate! You lost!");
});
$("#bone").click(function() {
    $("#doge").attr("src", "https://www.seekpng.com/png/detail/47-472471_shiba-dogs-head-messages-sticker-4-dog.png");
    $("#dogesays").text("Oooh..");
    $("#wordbone").show();
    $("#wordchoco").hide();
    $("#feed").text("Are you sure? Double click it");
});
$("#bone").dblclick(function() {
    $("#doge").attr("src", "https://cdn.shopify.com/s/files/1/1484/9590/t/88/assets/dog2.png?439907567131973973734");
    $("#dogesays").text("YES!");
    $("#feed").text("Doge loves bones! You won!");
});