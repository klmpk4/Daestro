function ClickSubscribe() {
    var response =$("#subs_r");
    var input = $("#subs").val();
    if (input == "")
    {
      response.css("color", "red");
      response.text("Silahkan masukkan alamat email");
    }
    else
    {
      response.css("color" , "green");
      response.text("Terima kasih telah melakukan subskripsi");
    }
    response.fadeToggle(5000);
  }
