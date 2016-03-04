bh.match('info', function(tmpl, json) {
    tmpl.content([
        {elem: 'image', url: json.image},
        {elem: 'content', content: [
            {elem: 'name', content: json.name},
            tmpl.mod('short')
                ? {elem: 'more'}
                : {elem: 'details', content: json.details.map(function(detail) {
                    return {
                        elem: 'item',
                        content: [
                            {elem: 'key', content: detail.key},
                            {elem: 'value', content: detail.value}
                        ]
                    }
                })}
        ]}
    ]);
});

bh.match('info__image', function(tmpl, json) {
    tmpl.tag('img')
        .attr('src', json.url);
});

bh.match('info__more', function(tmpl) {
    tmpl.tag('a')
        .attr('href', 'details.html')
        .content('Read more >>>');
});
