'use strict';
var express = require('express');
var edge = require('edge-js');
var bodyParser = require('body-parser');

var router = express.Router();

router.use(bodyParser.json({type: 'application/json'}));
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var hello = edge.func(function () {/*
    async (input) => { 
        return ".NET welcomes " + input.ToString(); 
    }
*/});

hello('Node.js', function (error, result) {
    if (error) throw error;
    console.log(result);
    return result;
});



var clrMethod = edge.func({
    assemblyFile: 'MyDll.dll',
    typeName: 'MyDll.Startup',
    methodName: 'Test' // This must be Func<object,Task<object>>
});





/* GET users listing. */
router.get('/', function (req, res) {

    var testCCharp = clrMethod(null, true);

    //res.send([1, 2, 3]);
    res.json({ message: testCCharp });
});
router.post('/', function (req, res) {
    let pararm = req.params;
    let bodyName = req.body.name;
    let body = req.body;
    // let body2 = req.body;
    console.log(pararm);
    console.log(body);
    console.log(bodyName);
    let str = 'Connected !' + req.body['Name'];
    res.json({ message: str });
});

module.exports = router;
