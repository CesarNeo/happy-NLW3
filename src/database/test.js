const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')
Database.then(async(db) =>{
    //inserir dados na tabela
    /*await saveOrphanage(db,{
        lat: "-27.2198799",
        lng: "-49.657038",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "954165468",
        images: [
            "https://images.unsplash.com/photo-1595009545055-d5ec0bb8d732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1602636403821-e43d50123cb7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })*/
      //consultar dados na tabela 
   const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages)
   //consultar somente 1 orfanato , pelo id
   /*const orphanage = await db.all('SELECT * FROM orphanages')
   console.log(orphanage)*/

   //deletar dado da tabela
   //console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})