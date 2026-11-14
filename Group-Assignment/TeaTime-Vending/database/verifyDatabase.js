
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/teatime.db", (err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
        return;
    }

    console.log("Connected to TeaTime database!");

    db.serialize(() => {
        // Verify database tables
        db.all(
            "SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name",
            (err, tables) => {
                if (err) {
                    console.error("Table verification failed:", err.message);
                } else {
                    console.log("\nDATABASE TABLES:");
                    console.table(tables);
                }
            }
        );

        // Verify foreign-key relationships
        db.all("PRAGMA foreign_key_list(assignments)", (err, keys) => {
            if (err) {
                console.error("Foreign-key verification failed:", err.message);
            } else {
                console.log("\nASSIGNMENT FOREIGN KEYS:");
                console.table(keys);
            }
        });

        // Verify operator and machine assignments
        db.all(`
            SELECT
                assignments.id AS assignment_id,
                operators.name AS operator_name,
                machines.name AS machine_name,
                machines.product
            FROM assignments
            JOIN operators ON assignments.operator_id = operators.id
            JOIN machines ON assignments.machine_id = machines.id
        `, (err, rows) => {
            if (err) {
                console.error("Assignment verification failed:", err.message);
            } else {
                console.log("\nASSIGNMENT DETAILS:");
                console.table(rows);
            }

            db.close();
        });
    });
});
