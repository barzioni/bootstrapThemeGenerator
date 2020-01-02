const fs = require('fs')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
// sass.compiler = require('node-sass');
const cors = require('cors')
const mysql = require('mysql');
const port = process.env.PORT || 4000;

let connection;

if (port === 4000) {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'sogo_bootstrap'
    });
} else {

}

connection.connect((err) => {
    if (err) throw err;
    let sql = 'CREATE TABLE IF NOT EXISTS themes (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), data TEXT)';
    connection.query(sql, function (err, result) {
        if (err) throw err;
    });
});

app.use([
    bodyParser.text(),
    bodyParser.json(),
    cors()
]);


const path = './src/style/partials/';
const filename = '_variables.scss';

app.post('/update-output', function (req, res) {
    compile(req.body)
        .then(response => {
            let alert = {
                type: 'success',
                text: 'SCSS compiled successfully!'
            }

            res.send(alert)
        })
        .catch(error => {
            let alert = {
                type: 'danger',
                text: 'Somthing went wrong'
            }
            res.send(alert)
        });
});
app.get('/get-themes', function (req, res) {
    connection.query('SELECT name FROM themes', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
});
app.post('/create', function (req, res) {
    compile(req.body.variables)
        .then((response) => {
            connection.query('INSERT INTO themes (name) VALUES (?)', req.body.name, function (error, results, fields) {
                if (error) throw error;
            });

            let alert = {
                type: 'success',
                text: 'Created fresh project'
            }

            res.send(alert)
        })
        .catch(error => {
            let alert = {
                type: 'danger',
                text: 'Somthing went wrong'
            }
            res.send(alert)
        });
});
app.post('/get-theme', function (req, res) {
    connection.query('SELECT * FROM themes WHERE name = ?', req.body.name, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
});
app.post('/save', function (req, res) {
    connection.query('UPDATE themes SET data = ? WHERE name = ?', [req.body.variables, req.body.name], function (error, results, fields) {
        if (error) throw error;

        if (results.affectedRows) {
            let alert = {
                type: 'success',
                text: 'Theme Saved!'
            }
            res.send(alert)

        } else {
            let alert = {
                type: 'danger',
                text: 'Somthing went wrong'
            }
            res.send(alert)

        }
    });
});
app.post('/delete', function (req, res, next) {
    connection.query('DELETE FROM themes WHERE name = ?', req.body.name, function (error, results, fields) {
        if (error) {
            alert = {
                type: 'danger',
                text: 'Somthing went wrong'
            }
        } else {
            alert = {
                type: 'success',
                text: 'Theme deleted!'
            }

        };
        res.send(alert)
    });
});

function notHaveEmptyValues(obj, group) {
    var x = obj[group];
    for (variable in x) {
        if (x[variable].value) {
            return true;
        }
    }

    return false;
}

function compile(obj) {

    return new Promise((resolve, reject) => {

        let content = '';

        for (let group in obj) {
            if (group === '$theme-colors') {
                if (notHaveEmptyValues(obj, group)) {
                    content += '$theme-colors: (\n';
                    for (variable in obj[group])
                        if (obj[group][variable].value) {
                            content += `${variable}: ${obj[group][variable].value}, \n`
                        }
                    content += ');\n'
                }
            } else {
                for (variable in obj[group]) {
                    if (obj[group][variable].value) {
                        content += `${variable}: ${obj[group][variable].before ? obj[group][variable].before : ''} ${obj[group][variable].value}${obj[group][variable].units ? obj[group][variable].units : ''} ${obj[group][variable].default ? '!default;' : ';'} \n`
                    }
                }
            }
        }

        if (!content) {
            reject('error')
        } else {
            fs.writeFile(path + filename, content, (data, err) => {
                resolve('success')
            });
        }
    }).then(function () {
        return new Promise((resolve, reject) => {
            gulp.src('./src/style/style.scss')
                .pipe(sass())
                .on('error', reject)
                .pipe(sourcemaps.write())
                .pipe(gulp.dest('./dist/'))
                .on('end', resolve)
        })
    })

}


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});