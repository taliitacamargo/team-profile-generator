    function Manager (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    

const addManager = ` 
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

  
    fs.writeFile("employee.html", content, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });

    const addIntern = `
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

    fs.writeFile("employee.html", content, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });


    const addEngineer = `
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

    fs.writeFile("employee.html", content, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });

      