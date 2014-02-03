$(document).ready(function(){
  var $cards = $(".card");

  $cards.on("click", function(){
    var $firstCard = $(".card").filter(".chosen");
    var $this = $(this);

    if ($this.find(".faceDown").is(":visible")) {
      // if one other card is already up
      if ($firstCard.length == 1) {
        var $otherCard = $cards.filter(".chosen").not($this);
        $this.addClass("chosen");
        $this.find(".faceUp").fadeIn();
        $this.find(".faceDown").fadeOut();
        // if their faces are the same
        if ($otherCard.find(".num").text() == $this.find(".num").text()) {
          setTimeout(function(){
            $this.removeClass("chosen");
            $this.addClass("end");
            $otherCard.removeClass("chosen");
            $otherCard.addClass("end");
          }, 1000);
          
        // if their faces are not the same
        } else {
          setTimeout(function(){
            $this.find(".faceDown").fadeIn()
            $this.find(".faceUp").fadeOut();
            $this.removeClass("chosen");
            $otherCard.find(".faceDown").fadeIn();
            $otherCard.find(".faceUp").fadeOut();
            $otherCard.removeClass("chosen");
          }, 2000);
        };
      // if no other cards are chosen
      } else if ($firstCard.length < 1) {
        $this.addClass("chosen");
        $this.find(".faceUp").fadeIn();
        $this.find(".faceDown").fadeOut();
      };
    }
  });
});