import "./App.css";

function Student({ name, institute, department }) {
  return (
    <div className="student">
      <h1>{`Name: ${name}`}</h1>
      <h2>{`Institute: ${institute}`}</h2>
      <h3>{`Department: ${department}`}</h3>
    </div>
  );
}
function Project({ pTitlle, pDescription, technologies }) {
  return (
    <div className="student">
      <h1>{`Name: ${pTitlle}`}</h1>
      <h2>{`Description: ${pDescription}`}</h2>
      <h3>{`Technologies: ${technologies}`}</h3>
    </div>
  );
}

function Education({ examType, institute, reslultAndYear }) {
  return (
    <div className="student">
      <h1>{`Exam Name: ${examType}`}</h1>
      <h2>{`Institute: ${institute}`}</h2>
      <h3>{`Result and Year: ${reslultAndYear}`}</h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Student
        name={"Ajoy Sarker"}
        institute={"JahangirNagar University"}
        department={"CSE"}
      ></Student>

      <Education
        examType={"HSC EXAM"}
        institute={`Sristy College of Tangail`}
        reslultAndYear={`4.92 out of 5.00 (2018)`}
      />
      <Education
        examType={"SSC EXAM"}
        institute={`Kalian High School`}
        reslultAndYear={`4.83 out of 5.00 (2016)`}
      />
      <Project
        pTitlle={"Todo-list-React"}
        pDescription={`it's a react app which has functionality like (1) Deleting todo (2).Adding todo 
        (3).if todo is done there is a line through the text!`}
        technologies={`React,HTML,CSS and Javascript`}
      />

      <Project
        pTitlle={"Music-Website"}
        pDescription={`it's a music website uisng html and css . this desing is reponsive for all devices
        live link : https://ajoysr.github.io/Music-Website/`}
        technologies={`HTML,CSS and Javascript`}
      />
    </div>
  );
}

export default App;
