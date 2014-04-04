exports.install = function(framework) {
    
    var self = this;
    
    framework.route('/', view_home);
    /*framework.route('/{link}/', view_detail);
    framework.route('/cv/', view_cv);
    framework.route('/portfolio/', view_portfolio);
    framework.route('/projects/', view_projects);
    
    self.sitemap('Home', '/');
    self.sitemap('CV', '/cv/');
	self.sitemap('Portfolio', '/portfolio/');
	self.sitemap('Projects', '/projects/');*/
    
    
};
 
// Blog list
function view_home() {
    var self = this;
 
    //self.sitemap('Home', '/');
    self.view('home');
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

function view_portfolio() {
    var self = this;
    self.view('portfolio');
}

function view_projects() {
    var self = this;
    self.view('projects');
}

function view_cv() {
    var self = this;
    
    
    // self.layout('_layout_new');
    self.view('cv');
}