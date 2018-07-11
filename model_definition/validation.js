const Sequelize = require('sequelize');
(async() => { 
    const db = await require('../connection')();
    const Pub = db.define('pub', {
        name: { type: Sequelize.STRING },
        address: { type: Sequelize.STRING },
        latitude: {
            type: Sequelize.DOUBLE,
            allowNull: true,
            defaultValue: null,
            validate: { min: -90, max: 90 }
        },
        longitude: {
            type: Sequelize.DOUBLE,
            allowNull: true,
            defaultValue: null,
            validate: { min: -180, max: 180 }
        },
    },
    {
        validate: {
            bothCoordsOrNone() {
                if ((this.latitude === null) !== (this.longitude === null)) {
                    throw new Error('Require either both latitude and longitude or neither')
                }
            }
        }
    });

    await Pub.sync();
    await Pub.create({
        name: 'Kinks',
        address: 'No.25, Ln. 232, Qingnian Rd., East Dist., Tainan City 701, Taiwan (R.O.C.)',
        latitude: 22.9905213,
        longitude: 120.2099389
    })
    .catch(err =>{
        console.log(err);
    });
    await Pub.create({
        name: "Molly's",
        address: '287 3rd Ave, New York, NY 10010',
        latitude: 40.7525716,
    })
    .catch(err =>{
        console.log(err);
    });
    await Pub.create({
        name: 'Doo-wop',
        address: 'dhoq,hfpqw.vj,fahjfvodknbj.,hesgbifcbw',
        latitude: 98.9162783,
        longitude: 210.9247378
    })
    .catch(err =>{
        console.log(err);
    });
})();
