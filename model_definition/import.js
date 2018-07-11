(async() => { 
    const db = await require('../connection')();
    const Lala = db.import("./lala");
    await Lala.sync();
})();