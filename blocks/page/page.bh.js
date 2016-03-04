bh.match('page', function(tmpl, json) {
    return [
        '<!DOCTYPE html>',
        {tag: 'html', content: [
            {tag: 'head', content:[
                {tag: 'title', content: json.title},
                {elem: 'css', url: 'index.css'}
            ]},
            {tag: 'body', content: [
                {block: 'container', content: [
                    {
                        elem: 'header',
                        content: [
                            {elem: 'title', content: json.title},
                            {block: 'menu', selected: json.name, items: [
                                {name: 'index', title: 'Main page'},
                                {name: 'gallery', title: 'Gallery'},
                                {name: 'details', title: 'Details'}
                            ]}
                        ]
                    },
                    {
                        elem: 'content',
                        content: json.content
                    }
                ]},
                {elem: 'js', url: '//code.jquery.com/jquery-2.2.1.min.js'},
                {elem: 'js', url: 'index.js'}
            ]}
        ]}
    ];
});

bh.match('page__css', function(tmpl, json) {
    tmpl.bem(false)
        .tag('link')
        .attrs({
            rel: 'stylesheet',
            type: 'text/css',
            href: json.url
        });
});

bh.match('page__js', function(tmpl, json) {
    tmpl.bem(false)
        .tag('script')
        .attrs({
            type: 'text/javascript',
            src: json.url
        });
});
