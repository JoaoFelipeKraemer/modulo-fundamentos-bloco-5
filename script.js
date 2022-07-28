const header = document.getElementById('header-container');
header.style.backgroundColor = "red";

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = "blue";

const emergencyTasksHeader = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0 ; i < emergencyTasksHeader.length; i +=1 ) {
 emergencyTasksHeader[i].style.backgroundColor = "purple";
}

const noemergency = document.getElementsByClassName('no-emergency-tasks')[0]
noemergency.style.backgroundColor = "orange";


const noemergencytaskHeader = document.querySelectorAll('.no-emergency-tasks h3');
 for (let i = 0 ; i < noemergencytaskHeader.length; i += 1){
    noemergencytaskHeader[i].style.backgroundColor = "black";
 }

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = "green";

//exercicio 3 
//como eu respondi exercicio 1
// document.getElementById("page-title").innerText = "Godfather"
// document.getElementById("second-paragraph").style = "background-color: red"
// document.getElementById("subtitle").style = "font-size: 50px"
// como a trybe quer que eu responda 1 2 e 3 do fixando
// const title = document.getElementById('page-title');
// title.innerText = 'The hitchhiker\'s guide to the galaxy';
// const secondParagraph = document.getElementById('second-paragraph');
// secondParagraph.innerText = 'The answer to life the universe and everything is 42.';      
// const subtitle = document.getElementById('subtitle');
// subtitle.innerText = 'So long and thanks for all the fish';
// como eu respondi: exercicio 2
// document.getElementsByClassName('para');
// document.getElementsByClassName('para')[0].style ="background-color: red"
// document.getElementsByTagName('h4')[0].style ="background-color: red";


// como a trybe quer q eu responda 2
// const  paragraphs = document.getElementsByClassName('para')
// paragraphs[0].style.fontSize = "1.5rem";
// paragraphs[0].style.color = 'green';

// const subtitle = document.getElementsByTagName('h4')[0];
// subtitle.style.color = 'red';      