let users = ["Aysu" , "Gulzar" , "Gulnar" , "Samir" , "Amil" ,"Yegana" , "Əvəz", "Ilkin", "Elvin", "Orkhan",]
let age = [21,34,21,22,30,20,23,28,23,33]
let email = ['aysu@gmail.com' , 'gulzar@gmail.com' , 'gulnar@gmail.com' ,'samir@gmail.com' ,'amil@gmail.com' ,'yegana@gmail.com' ,'avaz@gmail.com' ,'ilkin@gmail.com' ,'elvin@gmail.com' , 'orkhan@gmail.com' ,]

let average = [80,84,79,87,90,67,87,89,98,89]
let gender = ["qadın" ,"qadın" ,"qadın" ,"kişi" ,"kişi" , "qadın" ,"kişi" ,"kişi" ,"kişi" ,"kişi" ,]


let text = document.getElementById("text")

let table = "<table><thead><tr><th>ID</th><th>Ad</th><th>Yaş</th><th>Cinsiyyət</th><th>Ortalama</th><th>Email</th></tr></thead><tbody>";
for (let i = 0 ; i <users.length; i++){
    table+="<tr><td>" +(i +1) + "</td><td>" + users[i] + "</td><td>" + age[i] + "</td><td>" + gender[i] +"</td><td>" + average[i] +
    "</td><td>" + email[i] +"</td></tr>"
}

table += "</tbody></table>"

text.innerHTML = table


