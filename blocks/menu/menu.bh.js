bh.match('menu', function(tmpl, json) {
    tmpl.tag('ul')
        .content(json.items.map(function(item, idx) {
            return {
                elem: 'item',
                mods: {
                    selected: json.selected === item.name,
                    last: idx === json.items.length - 1
                },
                url: item.name + '.html',
                title: item.title
            };
        }));
});

bh.match('menu__item', function(tmpl, json) {
    tmpl.tag('li')
        .content({
            elem: 'link',
            tag: 'a',
            attrs: {href: json.url},
            content: json.title
        });
});
