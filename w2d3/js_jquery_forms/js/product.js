
$("#productForm").submit(
    function(event){
        event.preventDefault();
            let nu=$('#productNumber').prop('value');
            let n=$('#productName').prop('value') ;
            let p=$('#unitPrice').prop('value');
            let q=$('#quantityInStock').prop('value');
            let s=$('#supplier').prop('value');
            let d=$('#dateSupplied').prop('value');
            let res="Product Number: "+nu+"<br/>Product Name: "+n+"<br/>Unit price: "+p+
                    "<br/>Quantity in stock: "+q+"<br/> Supplier: "+s+"<br/>Date supplied: "+d;
            
            $("#result").html('<p>'+res+'</p>');

    }
);