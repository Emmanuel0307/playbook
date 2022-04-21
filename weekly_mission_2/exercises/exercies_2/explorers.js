const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

    explorers.forEach(nombre => console.log(nombre.name))
    explorers.forEach(estack => console.log(estack.stack))
    explorers.map((lista,index) => console.log(index,lista))
    const valorJS = explorers.filter((stak) => 
        stak.stack.includes('js')
    )
    console.log(valorJS);
    const ciudad = explorers.find((ciuda) => 
        ciuda.city == 'CDMX'
    )
    console.log(ciudad.name)
    var sumarte = 0
    const sumaras = explorers.forEach((sumas) => 
    {
        sumarte = parseInt(sumas.exercises_completed)+(sumarte)
    })
    console.log(sumarte)

    const elementos = explorers.forEach(tiene =>
        {
            explorers.some((b) =>
                b.exercisesFinished === true
            )
        }

    )
    console.log(elementos)