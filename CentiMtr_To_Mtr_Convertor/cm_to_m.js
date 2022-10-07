
        function centimeterToMeter() {
          let centimeter = document.getElementById("centimeter").value;
          let meter=document.getElementById("meter").value;
          console.log(centimeter);
          let meters = centimeter / 100;
          document.getElementById("meter").value= meters;
        }
     