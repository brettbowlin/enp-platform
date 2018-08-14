<?php
/**
* Generic post functionality that extends TimberPost
*/
namespace Engage\Models;

use Timber\PostQuery;
use Timber\Pagination;

class Archive extends PostQuery
{
	public $posts,
		   $pagination,
		   $slug,
		   $intro = [],
		   $vertical = false,
		   $category = false;

    public function __construct($query = false)
    {
    	$this->setVertical();
    	$this->setCategory();
    	$this->setPostType();

        parent::__construct($query);
        $this->setQueriedObject();
        $this->posts = $this->queryIterator->get_posts();
        $this->pagination = $this->pagination();
        $this->taxonomy = $this->queriedObject->taxonomy;
        $this->slug = $this->queriedObject->slug;
        
        $this->setIntro();
    }


    public function setQueriedObject() {

    	$Permalinks = new Permalinks();
    	// because of our taxonomy rewrites, we're messing with the queried object quite a bit. As a result, we need to use this model to find the right one.
    	if($Permalinks->getQueriedCategory()) {
    		$this->queriedObject = $Permalinks->getQueriedCategory();
    	} elseif($this->vertical) {
    		$this->queriedObject = $this->vertical;
    	} else {
    		$this->queriedObject = get_queried_object();
    	}

    	return;
    }

    public function setVertical() {
    	$Permalinks = new Permalinks();
    	$this->vertical = $Permalinks->getQueriedVertical();
    }

    public function setCategory() {
    	$Permalinks = new Permalinks();
    	$this->category = $Permalinks->getQueriedCategory();
    }

    public function setPostType() {
    	$Permalinks = new Permalinks();
    	$this->postType = $Permalinks->getQueriedPostType();
    }

 	/**
 	 * Are we limiting this query by Vertical?
 	 
    public function verticalQuery($query) {
    	// do we have a ?vertical query parameter
        if($this->vertical) {
        	$verticalTaxQuery = [
				'taxonomy' => 'verticals',
				'field'    => 'slug',
				'terms'    => $this->vertical->slug,
			];

        	if(!isset($query['tax_query'])) {
        		$query['tax_query'] = [$verticalTaxQuery];
        	} else {
        		// check to make sure we don't already have this one set
        		$hasVerticalTaxQuery = false;
        		foreach($query['tax_query'] as $taxQuery) {
        			if($taxQuery['taxonomy'] === 'verticals') {
        				$hasVerticalTaxQuery = true;
        			}
        		}
        		if(!$hasVerticalTaxQuery) {
        			$query['tax_query'][] = $verticalTaxQuery;
        		}
        	}
        }

        return $query;
    }*/

    /**
    * Sets the archive page title
    *
    * @return String
    */
    public function getTitle() {
        $title = 'Archive';
        if ( is_day() ) {
			$title = 'Archive: '.get_the_date( 'D M Y' );
		} else if ( is_month() ) {
			$title = 'Archive: '.get_the_date( 'M Y' );
		} else if ( is_year() ) {
			$title = 'Archive: '.get_the_date( 'Y' );
		} else if( get_class($this->queriedObject) === 'WP_Term' ) {
			$title = $this->queriedObject->name;
		} else if ( get_class($this->queriedObject) === 'WP_Post_Type' ) {
			$title = $this->queriedObject->label;
			if($this->vertical) {
				// since it's generic, let's add the vertical in front of the name
				$title = $this->vertical->name . ' '.$title;
			}
		} else if(get_search_query()) {
			$title = 'Search: '. get_search_query();
		}

		return $title;
	}

	public function setIntro() {
		// initially set off queried object
		$this->intro = [
			'vertical'	=> $this->vertical,
			'title'   => $this->getTitle(),
			'excerpt' => wpautop($this->queriedObject->description)
		];

		// check if we have one from the settings
		$intros = get_field('archive_landing_pages', 'option');
		if(!$intros) {
			return;
		}
		foreach($intros as $intro) {
			if($intro['landing_slug']['value'] === $this->postType->name && $this->vertical == $intro['landing_vertical']) {
				
				$this->intro['title'] = $intro['landing_page_title'];
				$this->intro['excerpt'] = wpautop($intro['landing_page_content']);
				break;
			}
		}
	}

}

