<?php
/*
 * Modifications to permalinks
 */
namespace Engage\Managers;

class Permalinks {

    public function __construct() {

    }

    public function run() {
        add_action('init', [$this, 'addResearchRewrites']);
        add_action('init', [$this, 'addTeamRewrites']);
        add_action('init', [$this, 'addVerticalRewrites']);
        add_action('query_vars', [$this, 'addQueryVars']);
    }

    public function addQueryVars($vars) {
        $vars[] = 'taxonomy_structure';
        $vars[] = 'vertical_base';
        return $vars;
    }   

    public function addResearchRewrites() {

        // vertical only
        add_rewrite_rule('research/vertical/([^/]+)/?$', 'index.php?post_type=research&verticals=$matches[1]&taxonomy_structure=vertical', 'top');
        
        // research-cats as /research/category/{term}
        add_rewrite_rule('research/category/([^/]+)/?$', 'index.php?post_type=research&research-categories=$matches[1]&taxonomy_structure=vertical', 'top');

        // research-tags as /research/tag/{term}
        add_rewrite_rule('research/tag/([^/]+)/?$', 'index.php?post_type=research&research-tags=$matches[1]&taxonomy_structure=vertical', 'top');
        
        // double query. append query name at the end
        // research/vertical/{term}/category/{term}
        add_rewrite_rule('research/vertical/([^/]+)/category/([^/]+)/?$', 'index.php?post_type=research&verticals=$matches[1]&research-categories=$matches[2]&taxonomy_structure=vertical', 'top');

        // research/vertical/{term}/tag/{term}
        add_rewrite_rule('research/vertical/([^/]+)/tag/([^/]+)/?$', 'index.php?post_type=research&verticals=$matches[1]&research-tags=$matches[2]&taxonomy_structure=vertical', 'top');

        // research/vertical/{term}/category/{term}/tag/{term}
        add_rewrite_rule('research/vertical/([^/]+)/category/([^/]+)/tag/([^/]+)/?$', 'index.php?post_type=research&verticals=$matches[1]&research-categories=$matches[2]&research-tags=$matches[3]&taxonomy_structure=vertical', 'top');
    }


    public function addTeamRewrites() {

        // vertical only
        add_rewrite_rule('team/vertical/([^/]+)/?$', 'index.php?post_type=team&verticals=$matches[1]&taxonomy_structure=vertical', 'top');
        
        // team-cats as /team/category/{term}
        add_rewrite_rule('team/category/([^/]+)/?$', 'index.php?post_type=team&team_category=$matches[1]&taxonomy_structure=vertical', 'top');

        // double query. append query name at the end
        // team/vertical/{term}/category/{term}
        add_rewrite_rule('team/vertical/([^/]+)/category/([^/]+)/?$', 'index.php?post_type=team&verticals=$matches[1]&team_category=$matches[2]&taxonomy_structure=vertical', 'top');

    }

    public function addVerticalRewrites() {

         // everything in vertical
        // /vertical/{ verticalTerm }/
        add_rewrite_rule('vertical/([^/]+)/?$', 'index.php?verticals=$matches[1]&taxonomy_structure=sections&vertical_base=1', 'top');

        // vertical with a specific post type
        // /vertical/{ verticalTerm }/type/{ postType }
        add_rewrite_rule('vertical/([^/]+)/([^/]+)/?$', 'index.php?post_type=$matches[2]&verticals=$matches[1]&taxonomy_structure=sections&vertical_base=1', 'top');
        
        // research-cats as 
        // /vertical/{ verticalTerm }/research/category/{ term }
        add_rewrite_rule('vertical/([^/]+)/research/category/([^/]+)/?$', 'index.php?post_type=research&verticals=$matches[1]&research-categories=$matches[2]&taxonomy_structure=sections&vertical_base=1', 'top');

        add_rewrite_rule('vertical/([^/]+)/research/tag/([^/]+)/?$', 'index.php?post_type=research&verticals=$matches[1]&research-tags=$matches[2]&taxonomy_structure=sections&vertical_base=1', 'top');

        // team category
        // /vertical/{ verticalTerm }/team/category/{ term }
        add_rewrite_rule('vertical/([^/]+)/team/category/([^/]+)/?$', 'index.php?post_type=team&verticals=$matches[1]&team_category=$matches[2]&taxonomy_structure=sections&vertical_base=1', 'top');

        // post category as/vertical/{ verticalTerm }/post/tag/{ term }
       add_rewrite_rule('vertical/([^/]+)/post/category/([^/]+)/?$', 'index.php?post_type=post&verticals=$matches[1]&category_name=$matches[2]&taxonomy_structure=sections&vertical_base=1', 'top');


       add_rewrite_rule('vertical/([^/]+)/post/tag/([^/]+)/?$', 'index.php?post_type=post&verticals=$matches[1]&tag=$matches[2]&taxonomy_structure=sections&vertical_base=1', 'top');

    }
}