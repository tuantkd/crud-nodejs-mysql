const express = require('express');
const conn = require('../config/db.js');
const router = express.Router();

//===================================================
router.get("/players", (req, res, next) => {

    let sql = "SELECT * FROM players";

    conn.query(sql, (err, data) => {
        if (err) throw err;
        //res.status(200).json({ data });

        console.log(data);
        res.render('index', { players: data });
    });
});
//===================================================




//===================================================
//Show add players
router.get("/players/add-view", (req, res, next) => {
    res.render('addplayer.ejs');
});

//Add players to database
router.post("/players/add", (req, res, next) => {

    const value = [
        req.body.inputName,
        req.body.inputClub
    ];

    let sql = "INSERT INTO players(name, club) VALUES (?)";

    conn.query(sql, [value], (err, data) => {
        if (err) throw err;
        console.log("Inserted successfully");
    });

    res.redirect('/api/players');
});
//===================================================



//===================================================
//Edit Player
router.get("/players/edit/:id", (req, res, next) => {

    let sql = `SELECT id, name, club FROM players WHERE id=?`;

    conn.query(sql, [req.params.id], function (err, data) {
        if (err) throw err;
        console.log(data);
        res.render('editplayer.ejs', { edit_player: data[0] });
    });

    //res.redirect('/api/players');
});
//===================================================



//===================================================
//Update players
router.put("/players/update/:id", (req, res, next) => {

    // const value = [
    //     req.body.inputName,
    //     req.body.inputClub
    // ];

    const { inputName, inputClub } = req.body;

    let sql = `UPDATE players SET name='${inputName}', club='${inputClub}' WHERE id=?`;

    conn.query(sql, [req.params.id], (err, data) => {
        if (err) throw err;
        console.log("Inserted successfully");
    });

    res.redirect('/api/players');
});
//===================================================



//===================================================
//Delete players
router.get("/players/delete/:id", (req, res, next) => {

    let sql = `DELETE FROM players WHERE id=?`;

    conn.query(sql, [req.params.id], (err, data) => {
        if (err) throw err;
        console.log("Delete successfully");
    });

    res.redirect('/api/players');
});
//===================================================



module.exports = router;