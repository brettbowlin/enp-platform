<?php use Roots\Sage\Assets; ?>
<header class="masthead">
  <div class="banner">
    <div class="container">
      <div class="nav-secondary">
      <nav class="collapse navbar-collapse">
        <?php
        if (has_nav_menu('secondary_navigation')) :
          wp_nav_menu([
            'theme_location'  => 'secondary_navigation',
            'depth'             => 2,
            'menu_class'      => 'nav',
            'items_wrap'      => '<ul id="%1$s" class="%2$s dropdown">%3$s</ul>'
            ]);
        endif;
        ?>
      </nav>
      </div>
    </div>
  </div>
  <div class="navbar">
    <div class="container">
      <div class="navbar-header navbar-default">
        <button type="button" class="navbar-toggle collapse-button is-open" data-toggle="collapse" data-target=".navbar-collapse">
             <span class="sr-only">Toggle navigation</span>
             <span class="hamburger-bars"></span>
        </button>
        <div class="navbar-brand">
          <a href="<?= esc_url(home_url('/')); ?>" class="navbar-brand-logo"><img src="<?php echo Assets\asset_path('images/cme-logo.png'); ?>" alt="<?php bloginfo('name'); ?>" width="320"></a>
        </div>
        </div>
        <div class="nav-primary navbar-default">
          <nav class="collapse navbar-collapse" role="navigation">
            <?php
            if (has_nav_menu('primary_navigation')) :
              wp_nav_menu([
                'theme_location'  => 'primary_navigation',
                'depth'             => 2,
                'menu_class'      => 'nav navbar-nav',
                'items_wrap'      => '<ul id="%1$s" class="%2$s dropdown">%3$s</ul>',
                'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
                'walker'          => new wp_bootstrap_navwalker()
                ]);
            endif;
            ?>
          </nav>
        </div>
      </div>
    </div>
</header>
