import SQLite from 'react-native-sqlite-storage';

let db = SQLite.openDatabase({ name: "movie", createFromLocation: "~movies.db" });

export const addFavorites = (obj,dispatch,addFavoriteList) => {
        let data = [];
        let array = [
                obj.id,
                obj.title,
                obj.overview,
                obj.release_date,
                obj.poster_path,
                obj.vote_average,
                1
        ];
        db.transaction((tx) => {
                var query1 = 'insert into favorites values (?,?,?,?,?,?,?)';
                var query2 = 'select * from favorites';
                tx.executeSql(query1, array, (tx, results) => {
                        if (results.insertId != null) {
                                tx.executeSql(query2, [], (tx, results) => {
                                        for(var i = 0;i<results.rows.length;i++){
                                                data.push(results.rows.item(i));
                                        }             
                                        dispatch(addFavoriteList(obj,data));           
                                }, (error) => {
                                        alert(JSON.stringify(error))
                                });
                        }
                }, (error) => {
                        alert(JSON.stringify(error))
                });

        });
}

export const removeFavorites = (obj,dispatch,removeFavorite) => {
        let data = [];
        db.transaction((tx) => {
                var query1 = 'delete from favorites where id=?';
                var query2 = 'select * from favorites';
                tx.executeSql(query1, [obj.id], (tx, results) => {
                        tx.executeSql(query2, [], (tx, results) => {
                                for(var i = 0;i<results.rows.length;i++){
                                        data.push(results.rows.item(i));
                                }
                                dispatch(removeFavorite(obj,data));           
                        }, (error) => {
                                alert(JSON.stringify(error))
                        });
                }, (error) => {
                        alert(JSON.stringify(error))
                });

        });
}

export const getAllFavorites = (dispatch,getFavoriteList) => {
        let data = [];
        db.transaction((tx) => {
                var sql = 'select * from favorites';
                tx.executeSql(sql, [], (tx, results) => {
                        for(var i = 0;i<results.rows.length;i++){
                                data.push(results.rows.item(i));
                        }
                        dispatch(getFavoriteList(data));                        
                }, (error) => {
                        alert(JSON.stringify(error))
                });
        });
}

export const addReminderList = (obj,dispatch,addReminder) => {
        let data = [];
        let array = [
                obj.id,
                obj.title,
                obj.vote_average,
                obj.date,
                obj.time,
                obj.poster_path,
        ];
        db.transaction((tx) => {
                var query1 = 'insert into reminder values (?,?,?,?,?,?)';
                var query2 = 'select * from reminder';
                tx.executeSql(query1, array, (tx, results) => {
                        if (results.insertId != null) {
                                tx.executeSql(query2, [], (tx, results) => {
                                        for(var i = 0;i<results.rows.length;i++){
                                                data.push(results.rows.item(i));
                                        }             
                                        dispatch(addReminder(obj,data));           
                                }, (error) => {
                                        alert(JSON.stringify(error))
                                });
                        }
                }, (error) => {
                        alert(JSON.stringify(error))
                });
        });
}

export const getAllReminder = (dispatch,loadReminder) => {
        let data = [];
        db.transaction((tx) => {
                var sql = 'select * from reminder';
                tx.executeSql(sql, [], (tx, results) => {
                        for(var i = 0;i<results.rows.length;i++){
                                data.push(results.rows.item(i));
                        }
                        dispatch(loadReminder(data));                        
                }, (error) => {
                        alert(JSON.stringify(error))
                });
        });
}

export const removeReminderList = (obj,dispatch,removeReminder) => {
        let data = [];
        db.transaction((tx) => {
                var query1 = 'delete from reminder where id=?';
                var query2 = 'select * from reminder';
                tx.executeSql(query1, [obj.id], (tx, results) => {
                        tx.executeSql(query2, [], (tx, results) => {
                                for(var i = 0;i<results.rows.length;i++){
                                        data.push(results.rows.item(i));
                                }
                                dispatch(removeReminder(obj,data));           
                        }, (error) => {
                                alert(JSON.stringify(error))
                        });
                }, (error) => {
                        alert(JSON.stringify(error))
                });

        });
}