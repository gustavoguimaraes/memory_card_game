$(document).ready(function(){
  var $cards = $(".card").not(".cat-card");

  $cards.on("click", function(){
    var $this= $(this);
     if(!$this.hasClass("played") && !$this.hasClass("disabled")) {
        if(!$this.hasClass("chosen")) {
          // step 3 change to state chosen
          $this.addClass("chosen");
          $this.find(".question").fadeIn(); //show question
          $this.find(".value").fadeOut(); //hide value
          // also change other cells's to disable
          $cards.not(".chosen").addClass("disabled")
        } else if($this.find(".question").is(":visible")) {
          //step 4 chosen sub-state
          $this.find(".question").fadeOut(); //hide  question
          $this.find(".answer").fadeIn(); // show answer
        } else {
        // step 5 change to state played
        $this.addClass("played").removeClass("chosen")
        $this.find(".answer").fadeOut();
        //change disabled cards to normal
        $cards.not(".played").removeClass("disabled")
         }

    }

  });
});