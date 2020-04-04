/**
 * product.js
 */
"use strict"

// $("#productForm").submit(
//     function(event){
//         event.preventDefault();
//             let nu=$('#productNumber').prop('value');
//             let n=$('#productName').prop('value') ;
//             let p=$('#unitPrice').prop('value');
//             let q=$('#quantityInStock').prop('value');
//             let s=$('#supplier').prop('value');
//             let d=$('#dateSupplied').prop('value');
//             let res="Product Number: "+nu+"<br/>Product Name: "+n+"<br/>Unit price: "+p+
//                     "<br/>Quantity in stock: "+q+"<br/> Supplier: "+s+"<br/>Date supplied: "+d;
            
//             $("#result").html('<p>'+res+'</p>');

//     }
// );

// other way
$(document).ready(
  function(){
    $("#productForm").submit(
        function(event){
            event.preventDefault();
                let nu=$('#productNumber').val();
                let n=$('#productName').val() ;
                let p=$('#unitPrice').val();
                let q=$('#quantityInStock').val();
                let s=$('#supplier').val();
                let d=$('#dateSupplied').val();

                const divProductData = $("#divProductData");
                $("#pProductNumber").text("Product Number: "+nu);
                $("#pProductName").text("Product Name: "+n);
                $("#pUnit").text("Unit price: "+p);
                $("#pQty").text("Quantity in stock: "+q);
                $("#pSupplier").text("Supplier: "+s);
                $("#pdate").text("Date supplied: "+d);
                
                divProductData.css("display","block");
    
        }
    );
  }
);