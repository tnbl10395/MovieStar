import SQLite from 'react-native-sqlite-storage';

let db = SQLite.openDatabase({name : "movie", createFromLocation : "~movies.db"});

export const addFavorites = (obj) => {
    let array = [
        obj.id,
        obj.title,
        obj.overview,
        obj.vote_average,
        obj.poster_path,
        obj.release_date
    ];
    db.transaction((tx) => {
        var sql = 'select * from favorite';
        var query = 'insert into favorite values (?,?,?,?,?,?)';
        tx.executeSql(query, array, (tx, results) => {
            if(results.insertId !=null){
                console.log('Successfully!');
            }
        },(error) => {
            console.log(error)
        });
        // tx.executeSql(sql, [], (tx, results) => {
        //     console.log(results.rows.item(0));
        // },(error) => {
        //     console.log(error)
        // });
    });
}