function inPopUp()
{
    let prodNumber = document.getElementById('productNumber').value;
    let productName = document.getElementById('productName').value;
    let unitPrice = document.getElementById('unitPrice').value;
    let quantityInStock = document.getElementById('quantityInStock').value;
    let supplier = document.getElementById('supplier').value;
    let dateSupplied = document.getElementById('dateSupplied').value;
    
    alert("Product Number: " + prodNumber+"\n"+"Product Name: " + productName
            +"\n"+"Unit Price: " + unitPrice+"\n"+"Quantity in stock: " + quantityInStock
            +"\n"+"Supplier: " + supplier+"\n"+"Date supplied: " + dateSupplied);
    
}