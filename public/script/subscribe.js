function ClickSubscribe() {
    var response =$("#subs_r");
    var input = $("#subs").val();
    if (input == "" )
    {
      response.css("color", "red");
      response.text("Silahkan masukkan alamat email");
    }
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input) )
    {
      response.css("color", "red");
      response.text("Silahkan masukkan alamat email dengan benar");
    }
    else
    {
      response.css("color" , "green");
      response.text("Terima kasih telah melakukan subskripsi");
    }
    response.fadeToggle(5000);
  };
