var bemaker = require('bemaker');
var bmConf = require('./.bemaker.json');
var make = new bemaker.Make(bmConf);
var pagesDir = 'pages';
var buildDir = 'build';
var fs = require('fs');
var bh = new (require('bh').BH);

bh.setOptions({
    delimMod: '--'
});

make.build().then(function() {
    eval(fs.readFileSync('./' + bmConf.outdir + '/' + bmConf.outname + '.bh.js', 'utf-8'));
    fs.readdirSync(pagesDir).forEach(function(name) {
        if (!name.match(/^\w+\.bemjson\.js$/)) return;
        var pageName = name.split('.')[0];
        var bemjson = eval(fs.readFileSync('./' + pagesDir + '/' + name, 'utf-8'));
        fs.writeFileSync('./' + buildDir + '/' + pageName + '.html', bh.apply(bemjson));
    });
});
