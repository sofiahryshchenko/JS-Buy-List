$(function(){


    var leftTemplate = $(".template").html();
    var rightTemplate = $(".rightTemplate").html();

    function  refreshRight() {

        $(".leftOfRight").html("");
        $(".boughtOfRight").html("");


        function addToRight($from,$to){
            $from.each(function (index) {
                var $item = $(this);
                var temp = $(rightTemplate);


                var name = $item.find(".name").text();
                var amount = $item.find(".counter").text();
                temp.find(".pechivo").text(name);
                temp.find(".count").text(amount);
                $to.append(temp);

            });
        }


        addToRight($(".names.notAlreadyBought"),$(".leftOfRight"));
        addToRight($(".names.alreadyBought"),$(".boughtOfRight"));









    }


























    function addProduct(name){
        var $product=  $("<div></div>");
        $product.addClass("names");
        $product.addClass("notAlreadyBought");
        $product.append(leftTemplate);
        $(".left").append($product);
        $product.find(".name").text(name);

        $product.find(".bought").click(function () {
            $product.find(".bought").addClass("makedn");
            $product.find(".delete").addClass("makedn");
            $product.find(".plus").addClass("makedn");
            $product.find(".minus").addClass("makedn");
            $product.find(".notBought").removeClass("makedn");
            $product.addClass("alreadyBought");
            $product.removeClass("notAlreadyBought");
            refreshRight();


        });


        $product.find(".notBought").click(function () {
            $product.find(".bought").removeClass("makedn");
            $product.find(".delete").removeClass("makedn");
            $product.find(".plus").removeClass("makedn");
            $product.find(".minus").removeClass("makedn");
            $product.find(".notBought").addClass("makedn");
            $product.removeClass("alreadyBought");
            $product.addClass("notAlreadyBought");
            refreshRight();

        });

        $product.find(".plus").click(function() {

            var amount = +$product.find(".counter").text();
            amount++;
            if(amount!==1)  $product.find(".minus").attr('disabled', false);

            $product.find(".counter").text(amount);
            refreshRight();

        });

        $product.find(".minus").click(function() {

            var amount = +$product.find(".counter").text();
            if(amount===1)  $(this).attr('disabled', true);
            else {
                amount--;
                $product.find(".counter").text(amount);
                refreshRight();
            }
        });



        $product.find(".delete").click(function(){
            $product.remove();
            refreshRight();
        });

    }


    $(".dodaty").click(function () {

        var addSmthNew = $(".products").val();
        if(addSmthNew!=="") {
            addProduct(addSmthNew);
            $(".products").val("");
            refreshRight();
        }

    });






    $(".products").keydown(function(e){ //отлавливаем нажатие клавиш
        if (e.keyCode == 13) { //если нажали Enter, то true
            var addSmthNew = $(".products").val();
            if(addSmthNew!=="") {
                addProduct(addSmthNew);
                $(".products").val("");
                refreshRight();
            }
        }
    });



    addProduct("Отбивнушка");
    addProduct("яблочко");
    addProduct("помідорка");
    refreshRight();









});

