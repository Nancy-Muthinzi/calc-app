


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
      var noString = $("input#input1").val();
      var addition = parseInt(noString.split("+")};
      var sum = 0;
      var add = function(addition){
        for (var number=0; number <=addition.length-1; number++){
          sum += parseInt(addition[number]);
          {
        console.log(sum);
        }
      }
  //     var sum = 0;
  //     var add = noArray.map(num =>{
  //       return sum +- num
  //     });
  //     alert(sum);
  // });
});
