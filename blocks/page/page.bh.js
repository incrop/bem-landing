bh.match('page', function(tmpl, json) {
    return [
        '<!DOCTYPE html>',
        {tag: 'html', content: [
            {tag: 'head', content:[
                {tag: 'title', content: json.title},
                {elem: 'css', url: 'index.css'}
            ]},
            {tag: 'body', content: [
                json.content,
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
