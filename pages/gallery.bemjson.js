({
    block: 'page',
    title: 'Beautiful gallery',
    name: 'gallery',
    content: [
        'Look, it\'s a gallery!',
        {
            block: 'gallery',
            content: (function() {
                var items = [];
                for (var i = 0; i < 20; i++) {
                    items.push({
                        block: 'info',
                        mods: {short: true},
                        mix: {block: 'gallery', elem: 'item'},
                        name: 'Ron Swanson',
                        image: '../images/ron.jpg'
                    });
                }
                return items;
            })()
        }
    ]
});
