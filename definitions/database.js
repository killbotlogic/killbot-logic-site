var db = [];
db.push({
    title: 'How to create a website?',
    link: 'how-to-create-a-website',
    date: new Date().add('m', -5),
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
});
db.push({
    title: 'Search engine optimization',
    link: 'search-engine-optimalization',
    date: new Date().add('m', -4),
    body: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
});
db.push({
    title: 'JavaScript Best Practices',
    link: 'javascript-best-practices',
    date: new Date().add('m', -3),
    body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
});
db.push({
    title: 'Sass vs. LESS',
    link: 'sass-vs-less',
    date: new Date().add('m', -2),
    body: 'This book is a treatise on the theory of ethics, very popular during the Renaissance.'
});
db.push({
    title: 'Mobile and tablet development',
    link: 'mobile-and-tablet-development',
    date: new Date().add('m', -1),
    body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
});
db.push({
    title: 'Web application framework for node.js',
    link: 'web-application-framework-for-node-js',
    date: new Date(),
    body: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
});
framework.global.db = db;