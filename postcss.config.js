const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer(),
        purgecss({
            content: ['./hugo_stats.json'],
            defaultExtractor: (content) => {
                let els = JSON.parse(content).htmlElements
                return els.tags.concat(els.classes, els.ids)
            },
            whitelist: ['img-thumbnail', 'img-fluid']
        })
    ]
}
