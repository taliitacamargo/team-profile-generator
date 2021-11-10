    // function Manager (name, id, email) {
    //     this.name = name;
    //     this.id = id;
    //     this.email = email;
    // }

  

const addManager = function(manager) { ` 
  <section class= "container">
      <h1>${response.name}</h1>
      <article>
      <nav>
      <ol>
      <li>
      <p> ${response.id}</p>
      </li>
      <li>
      <p> ${response.email}</p>
      </li>
      <li>
      <p> ${response.phone}</p>
      </li>
      </ol>
      </nav>
      </section>
  `;
}

  
    // fs.writeFile("employee.html", content, (err) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    // });

    
    const addIntern =  function (engineer) {`
    <section class= "container">
    <h1>${response.name}</h1>
    <article>
    <nav>
    <ol>
    <li>
    <p> ${response.id}</p>
    </li>
    <li>
    <p> ${response.email}</p>
    </li>
    <li>
    <p> ${response.phone}</p>
    </li>
    </ol>
    </nav>
    </section>
    `;
}

    // fs.writeFile("employee.html", content, (err) => {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
    //   });


    const addEngineer = function (intern) {`
    <section class= "container">
    <h1>${response.name}</h1>
    <article>
    <nav>
    <ol>
    <li>
    <p> ${response.id}</p>
    </li>
    <li>
    <p> ${response.email}</p>
    </li>
    <li>
    <p> ${response.phone}</p>
    </li>
    </ol>
    </nav>
    </section>
    `;
}

    
fs.writeToFile("employee.html", content, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });

      