var counter_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var str_counter_0 = counter_list[0];
var str_counter_1 = counter_list[1];
var str_counter_2 = counter_list[2];
var display_str = "";
var display_div = document.getElementById("panier");


var panier_number = 0;

function increment() {
    console.log("Hello !")
    panier_number = panier_number + 1;
    console.log(panier_number)
    document.getElementById("Panier_number").innerHTML = panier_number
}

// function incrementCount(current_count) {
//     setInterval(function() {
//         // clear count
//         while (display_div.hasChildNodes()) {
//             display_div.removeChild(display_div.lastChild);
//         }
//         str_counter_0++;
//         if (str_counter_0 > 1) {
//             str_counter_0 = 10; // reset count
//             str_counter_1++; // increase next count
//         }
//         if (str_counter_1 > 9) {
//             str_counter_2++;
//         }
//         display_str = str_counter_2.toString() + str_counter_1.toString() + str_counter_0.toString();
//         for (var i = 0; i < display_str.length; i++) {
//             var new_span = document.createElement('span');
//             new_span.className = 'num_tiles';
//             new_span.innerText = display_str[i];
//             display_div.appendChild(new_span);
//         }
//     }, 1000);
// }