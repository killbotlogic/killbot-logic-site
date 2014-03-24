exports.install = function(framework) {
    framework.route('/', view_homepage);
    framework.route('/{link}/', view_detail);
};
 
// Blog list
function view_homepage() {
    var self = this;
    self.view('homepage');
}
 
// Blog detail
function view_detail(link) {
    var self = this;
 
    var blog = self.global.db.find(function(blog) {
        return blog.link === link;
    });
 
    if (blog === null) {
        self.view404();
        return;
    }
 
    self.view('detail', blog);
}