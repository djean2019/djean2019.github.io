/**
 * librarybooksapp.js
 * 
 * @Author : Darphe HYPPOLITE JEAN
 */
"use strict";

// alert("Hello library");

(function(){
    getBooks();
})();

function getBooks(){
    fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
    .then((response) => {
        if(response.ok){
            return response.json();
        } else{
            return Promise.reject({status: response.status, statusText: response.statusText});
        }
    })
    .then(books => {
        let content = "";
        books.forEach(function(book, i) {
            content +=`
                <tr>
                    <th scope="row">${i+1}.</th>
                    <td>${book.isbn}</td>
                    <td>${book.title}</td>
                    <td>${new Intl.NumberFormat("en-US",{style:"currency", currency:"USD",minimumFractionDigits:2}).format(book.overdueFee)}</td>
                    <td>${book.publisher}</td>
                    <td>${book.datePublished}</td>
                   
                </tr>
            `            
        });
        document.querySelector("#tbody").innerHTML = content;
    })
    .catch(err => {
        console.log("Error message: ",err.statusText);
        document.getElementById("#bookList").innerHTML="<p style='color:red'>"+err.statusText+"</p>";
    })
}

document.getElementById("addBookForm").addEventListener("submit",
    function(evt){
        evt.preventDefault();
        const isbn = document.querySelector("#isbn").value;
        const title = document.querySelector("#title").value;
        const overdueFee = document.querySelector("#overdueFee").value;
        const publisher = document.querySelector("#publisher").value;
        const datePublished = document.querySelector("#datePublished").value;

        const newBook = {
            "isbn": isbn,
            "title": title,
            "overdueFee": overdueFee,
            "publisher": publisher,
            "datePublished": datePublished
        };

        fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add",
            {
                method: "post",
                body: JSON.stringify(newBook),
                headers:{
                    "Content-Type": "application/json"
                }
        }).then(function(response){
            return response.json();
        }).then(function(jsonReponse){
            console.log(jsonReponse);
            document.querySelector("#isbn").value="";
            document.querySelector("#title").value="";
            document.querySelector("#overdueFee").value="0.00";
            document.querySelector("#publisher").value="";
            document.querySelector("#datePublished").value="";
            document.querySelector("#isbn").focus();
            alertMessageBox.style.display = "inline-block";
        }).catch(function(e){
            console.error(e);
            alertMessageBox.classList.remove("alert-success");
            alertMessageBox.classList.add("alert-danger");
            alertMessageBox.style.display = "inline-block";
        })
    }
);