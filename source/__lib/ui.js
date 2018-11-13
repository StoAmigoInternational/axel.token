/* -------------------------------------------------- */
/* INIT
/* -------------------------------------------------- */

var uiInit = function() {
	"use strict";
	//console.log("Initializing core UI...);
	
	/* -------------------------------------------------- */
	/* CACHE SELECTORS
	/* -------------------------------------------------- */		

	var zIndexStackOrder = $(".stack-order-auto");


	/* -------------------------------------------------- */
	/* NAVBAR / TOOLBAR / MAIN PROPERTIES
	/* -------------------------------------------------- */
    
    navPanelMenubar.css({"height" : $navbarHeight});


	/* -------------------------------------------------- */
	/* Z-INDEX / STACK ORDER
	/* -------------------------------------------------- */

	var $zIndexNum = 1;

	zIndexStackOrder.children().not(".stack-order-ignore").each(function(index) {

		var self = $(this);

		self.css({"z-index" : $zIndexNum + index,
				  "position" : "relative"});

	});

}; // END uiInit


/* -------------------------------------------------- */
/* NAV
/* -------------------------------------------------- */

//removeIf(production)
var uiNavbar = function() {
	"use strict";
	//console.log("Initializing uiNav...");

	/* -------------------------------------------------- */
	/* CACHE SELECTORS
	/* -------------------------------------------------- */
	
	var	navbarMenu = $("#navbar-items > ul.nav"),
		navbarDropdown = $(".dropdown"),
		subnav = $("ul.subnav"),

		navFeatures = $("ul.features.nav"),
		navCompany = $("ul.company.nav"),
		navResources = $("ul.resources.nav"),
		navQuickLinks = $("ul.quick-links.nav");


	/* -------------------------------------------------- */
	/* POSITION
	/* -------------------------------------------------- */
	
	if ( $navbarItemsPosition === "left" ) {
		
		navbarItems.parent().parent().css({"float" : "left"});
		
	} else if ( $navbarItemsPosition === "center" ) {
		
		navbarItems.parent().parent().css({"float" : "none"}).addClass("text-center");
		
	} else if ( $navbarItemsPosition === "right" ) {
		
		navbarItems.parent().parent().css({"float" : "right"});
		
	}

	
	/* -------------------------------------------------- */
	/* MENUAIM
	/* -------------------------------------------------- */
	
	TweenMax.set(subnav, {autoAlpha: 0, y: 50});
	
	
	navbarDropdown.on("click", function(e) {
		//"use strict";
		e.preventDefault();

	});
	
	
    //TweenMax.set($subnav.find("li > a"), {autoAlpha: 0});
	//TweenMax.set(".subnav li", {autoAlpha: 0, rotationX: -10, transformOrigin: "center top", transformPerspective: 10});

    
	var navbarMenuAim = navbarMenu.menuAim({
		activateCallback: activate, // Fired on row activation.
		deactivateCallback: deactivate, // Fired on row deactivation.
		enterCallback: activate, // Function to call when mouse enters a menu row. Entering a row does not mean the row has been activated, as the user may be mousing over to a subnav.
		exitCallback: $.noop, // Function to call when mouse exits a menu row.
		exitMenuCallback: $.noop,  // Function to call when mouse exits whole menu. This is needed for auto-closing subnav.
		triggerEvent: "both", // 'hover', 'click', 'both'.
		rowSelector: "> li", // Selector for identifying which elements in the menu are rows.
		handle: "> a", // Handle for triggering mouse clicks on menu item.
		submenuSelector: ".no-dropdown", // You may have some menu rows that aren't subnavs and therefore shouldn't ever need to 'activate'. If so, filter submenu rows with this selector. Defaults to '*' (all elements).
		submenuDirection: "below", // Direction the submenu opens relative to the main menu: 'left', 'right', 'above', 'below'.
		openClassName: null,  // Class that will be applied to menu item when activated.
		tolerance: 5, // Bigger = more tolerant for mouse movement precision when entering subnav.
		activationDelay: 0, // Delay (ms) for first subnav opening.
		mouseLocsTracked: 3, // Number of past mouse locations to track direction.
		defaultDelay: 500, // Delay (ms) when user appears to be entering subnav and mouse movement is being tracked.
	});

    
	function activate(row) {
		//console.log("Open");

		var $navCalc = $(row).width() / 2,
			$subnavCalc = $(row).find("ul.subnav").width() / 2,
			$subnav = $(row).find("ul.subnav");

        
		$subnav.css({"width" : $(row).width() + 150 + "px"});

        
		$(row).find("a.dropdown").addClass("active");
		$("ul.subnav").removeClass("no-pointer");
        
		
		TweenMax.set($subnav, {x: - ($subnavCalc - $navCalc) + "px"});
		
		
		if ( $navbarOrder === "left" && $navbarItemsPosition === "left" ) {
			
			navbarItems.first().find("ul.subnav").find(".subnav-tip").addClass("left");
			TweenMax.set( navbarItems.first().find("ul.subnav"), {x: 10});
			
		} else if ( $navbarOrder === "right" && $navbarItemsPosition === "right" ) {
			
			navbarItems.last().find("ul.subnav").find(".subnav-tip").addClass("right");
			TweenMax.set( navbarItems.last().find("ul.subnav"), {x: - 175 });
			
		}
		
		
		//console.log( navbarItems.first().find("ul.subnav") );
		//console.log( $("#navbar-items > ul.nav > li:first-child") );
		
		
		TweenMax.to($subnav, 0.25, {autoAlpha: 1, y: 0, ease: Power2.easeInOut, overwrite: "all", onStart: function() { $subnav.removeClass("hide"); } });
		//TweenMax.staggerTo($subnav.find("li > a"), 0.25, {autoAlpha: 1, delay: 0.25, ease: Power4.easeOut}, 0.05);
		//TweenMax.staggerTo(subnav.find("li"), 0.25, {autoAlpha: 1, rotationX: 0, ease: Power4.easeInOut}, 0.12);

	}

    
	function deactivate(row) {
		//console.log("Closed");
		
		var $subnav = $(row).find("ul.subnav");

        
		$(row).find("a.dropdown").removeClass("active");

        
		TweenMax.to($subnav, 0.25, {autoAlpha: 0, y: 50, ease: Power2.easeIn, onComplete: function() { $subnav.addClass("hide"); } });
		//TweenMax.to($subnav.find("li > a"), 0, {autoAlpha: 0, ease: Linear.easeNone});
		//TweenMax.to(subnav.find("li"), 0.15, {autoAlpha: 0, rotationX: -10, ease: Expo.easeIn});

	}

}; // END uiNav
//endRemoveIf(production)


/* -------------------------------------------------- */
/* NAV PANEL
/* -------------------------------------------------- */

//removeIf(production)
var uiNavPanel = function() {

	/* -------------------------------------------------- */
	/* SET-UP
	/* -------------------------------------------------- */

	var navPanelOffCanvas = new Foundation.OffCanvas(navPanel, {
		closeOnClick: true,
		contentOverlay: true,
		contentId: "content",
		nested: false,
		contentScroll: false, // Set to true or else this will scroll back to the top of page when off-canvas content is open.
		transitionTime: null,
		transition: "overlap", //push, detached, slide
		forceTo: false,
		isRevealed: false,
		revealOn: null,
		autoFocus: false,
		revealClass: "reveal-for-",
		trapFocus: false
	});
	
	
	/* -------------------------------------------------- */
	/* HELPERS
	/* -------------------------------------------------- */
	
	// Set 'navPanel' to full width on mobile devices.
	if ( $hasTouch ) {

		navPanel.addClass("off-canvas-width-full");

	} else {

		navPanel.removeClass("off-canvas-width-full");

	}
	
	
	/* -------------------------------------------------- */
	/* POSITION
	/* -------------------------------------------------- */

	if ( $navPanelPosition === "top" ) {

		navPanel.addClass("position-top");

	} else if ( $navPanelPosition === "bottom" ) {

		navPanel.addClass("position-bottom");

	} else if ( $navPanelPosition === "left" ) {

		navPanel.addClass("position-left");

	} else if ( $navPanelPosition === "right" ) {

		navPanel.addClass("position-right");

	} else {

		navPanel.addClass("position-left");
	}

	
	/* -------------------------------------------------- */
	/* EASING AND TIMING
	/* -------------------------------------------------- */

	navPanel.css({"transition-duration": ''+$navPanelTransitionSpeed+''});

	if ( $.inArray( $navPanelTransitionEase, ["Type 1", "Quad"] ) >= 0 ) {

		navPanel.css({"transition-timing-function" : "cubic-bezier(.25, .46, .45, .94)"});

	} else if ( $.inArray( $navPanelTransitionEase, ["Type 2", "Cubic"] ) >= 0 ) {

		navPanel.css({"transition-timing-function" : "cubic-bezier(.215, .61, .355, 1)"});

	} else if ( $.inArray( $navPanelTransitionEase, ["Type 3", "Quart"] ) >= 0 ) {

		navPanel.css({"transition-timing-function" : "cubic-bezier(.165, .84, .44, 1)"});

	} else if ( $.inArray( $navPanelTransitionEase, ["Type 4", "Quint"] ) >= 0 ) {

		navPanel.css({"transition-timing-function" : "cubic-bezier(.23, 1, .32, 1)"});

	} else if ( $.inArray( $navPanelTransitionEase, ["Type 5", "Expo"] ) >= 0 ) {

		navPanel.css({"transition-timing-function" : "cubic-bezier(.19, 1, .22, 1)"});

	} else if ( $.inArray( $navPanelTransitionEase, ["Type 6", "Circ"] ) >= 0 ) {

		navPanel.css({"transition-timing-function" : "cubic-bezier(.075, .82, .165, 1)"});

	} else if ( $.inArray( $navPanelTransitionEase, ["Type 7", "InOut"] ) >= 0 ) {

		navPanel.css({"transition-timing-function" : "cubic-bezier(1, 0, 0, 1)"});

	} else {

		navPanel.css({"transition-timing-function" : "ease"});

	}


	/* -------------------------------------------------- */
	/* OVERLAY ANIMATION
	/* -------------------------------------------------- */

	if ( $useNavPanelAnimation ) {
	
		/* -------------------------------------------------- */
		/* PANEL OVERLAY ANIMATION
		/* -------------------------------------------------- */

		// ANIMATE NAV ITEMS
		/*
		var navPanelItemsText = new SplitText($(".nav-items div ul li"), {type: "words,chars,lines"}),
		navPanelItemsText = navPanelItemsText.words;
		*/

		// OVERLAY ANIMATION
		TweenMax.set(panelOverlay, {autoAlpha: 0});
		//TweenMax.set(navPanel, {autoAlpha: 1, delay: $delayInterval});

		var tlPanelOverlay = new TimelineMax({paused: true, delay: 0, repeat: 0, repeatDelay: 0, yoyo: false,

											  onStart: function() {

														disableContent();
														navbar.addClass("no-pointer");
														toolbar.addClass("no-pointer");
														navbarToggle.find(navToggle).addClass("active");
														TweenMax.set(navPanel, {autoAlpha: 1});
												  
														$$("sub-menu-container.active").css({"pointer-events" : "none"});

                                                  
														TweenMax.to(panelOverlay, $panelOverlayTransitionSpeed, {autoAlpha: 1, delay: 0, ease: Power4.easeOut});

											 },
											 onComplete: function() {

												 		navPanel.removeClass("no-pointer");
														tlNavPanelItems.play().timeScale(1);

											 },
											 onReverseComplete: function() {

														enableContent();
														navPanel.addClass("no-pointer");
														navbar.removeClass("no-pointer");
														toolbar.removeClass("no-pointer");
														navbarToggle.find(navToggle).removeClass("active");
														//TweenMax.set(navPanel, {autoAlpha: 0, delay: $delayInterval});
												 
														$$("sub-menu-container.active").css({"pointer-events" : "auto"});

                                                 
														tlNavPanelItems.reverse(0).timeScale(1).delay(0);
                                                 
                                                 
														TweenMax.to(panelOverlay, $panelOverlayTransitionSpeed, {autoAlpha: 0, delay: parseFloat($navPanelTransitionSpeed.replace(/ms/,"").replace(/s/,"")) + $panelOverlayDelay, ease: Power4.easeOut});

											 }

								 });

		/* -------------------------------------------------- */
		/* NAV PANEL ITEMS ANIMATION
		/* -------------------------------------------------- */

		var tlNavPanelItems = new TimelineMax({paused: true, delay: tlPanelOverlay.duration() + 0.25, repeat: 0, repeatDelay: 0, yoyo: false});

			tlNavPanelItems.staggerFrom(navPanel.find(navPanelContents).find(navItems).find(navFeatures).children(), 0.5, {autoAlpha: 0, x: -10, ease: Power4.easeInOut}, 0.075)

						   .staggerFrom(navPanel.find(navPanelContents).find(navItems).find(navCompany).children(), 0.5, {autoAlpha: 0, x: -10, ease: Power4.easeInOut}, 0.075, "-=0.75")
						   .staggerFrom(navPanel.find(navPanelContents).find(navItems).find(navResources).children(), 0.5, {autoAlpha: 0, x: -10, ease: Power4.easeInOut}, 0.075, "-=0.75")
						   .staggerFrom(navPanel.find(navPanelContents).find(navItems).find(navQuickLinks).children(), 0.5, {autoAlpha: 0, x: -10, ease: Power4.easeInOut}, 0.075, "-=0.75");

						   //.staggerFrom(contactInfo, 0.5, {autoAlpha: 0, x: -20, ease: Power4.easeInOut}, 0.12, "-=2");
		
	}


	/* -------------------------------------------------- */
	/* EVENTS
	/* -------------------------------------------------- */

	navPanel.on("opened.zf.offcanvas", function() {
		//console.log("Opened.");
		
		animController();
		
		if ( $useNavPanelAnimation ) {
			
			tlPanelOverlay.play();
			
		} else {
			
			disableContent();
			
		}

		//$("#particles").prependTo(navPanel);

	});

    
	navPanel.on("closed.zf.offcanvas", function() {
		//console.log("Closed.");
		
		animController();
		
		TweenMax.delayedCall( tlPanelOverlay.duration() + 1, animController );
		
		if ( $useNavPanelAnimation ) {
			
			tlPanelOverlay.reverse(0);
			
		} else {
			
			enableContent();
			
		}

		//$("#particles").insertBefore("#hero-elements");

	});

}; // END uiNavPanel
//endRemoveIf(production)


/* -------------------------------------------------- */
/* UI NAV
/* -------------------------------------------------- */

var uiLinkDelegation = function() {
	"use strict";
	//console.log("Initializing uiLinkDelegation...");
	
	/* -------------------------------------------------- */
	/* CACHE SELECTORS
	/* -------------------------------------------------- */
	
	var	navPreviousPage = $(".previous-page"),
		preventDefault = $(".prevent-default"),
		stopProp = $(".stop-prop"),
		navLink = $("a").not("[target='_blank']")
						.not("[href='#']")
						.not(".scroll-to[href='#top']")
						.not("[data-content-selector]")
						.not(".dropdown")
						.not(preventDefault)
						.not(navPreviousPage);
	
	
	/* -------------------------------------------------- */
	/* HELPERS
	/* -------------------------------------------------- */

	preventDefault.on("click", function(e) {
		//"use strict";
		e.preventDefault();
	});
	
	
	stopProp.on("click", function(e) {
		//"use strict";
		e.stopPropagation();
	});
	
	
	/* -------------------------------------------------- */
	/* GET LINK
	/* -------------------------------------------------- */

	//navLink.attr("data-toggle", ''+navPanelString.substring(1)+'');

	navLink.on("click", function(e) {
		//"use strict";
		//console.log("Initializing uiLinkDelegation.");
		e.preventDefault();

		var self = $(this),
			$href = self.attr("href");


		var getLink = function() {
			//console.log($href);
			window.location = $href;
		};


		if ( $usePreloader ) {

			tlPreloaderStart.play(0).timeScale(1);
			TweenMax.delayedCall( tlPreloaderStart.duration() + 2, getLink );

		} else {

			getLink();

		}

		return false;

	});


	/* -------------------------------------------------- */
	/* GET PREVIOUS PAGE (BACK)
	/* -------------------------------------------------- */

	navPreviousPage.on("click", function(e) {
		//"use strict";
		e.preventDefault();

		var getPreviousPage = function() {

			parent.history.back();

		};


		if ( $usePreloader ) {
			
			tlPreloaderStart.play(0).timeScale(1);
			
			TweenMax.delayedCall( tlPreloaderStart.duration() + 2, getPreviousPage );

		} else {

			getPreviousPage();

		}

		return false;

	});

}; // END uiLinkDelegation


/* -------------------------------------------------- */
/* SCROLL EVENTS
/* -------------------------------------------------- */

var uiScrollEvents = function() {
    "use strict";
	//console.log("Initializing uiScrollEvents...");
	
	/* -------------------------------------------------- */
	/* CACHE SELECTORS
	/* -------------------------------------------------- */
	
	var	showOnScroll = $(".show-on-scroll"),
		hideOnScroll = $(".hide-on-scroll");
	
	
	// ON SCROLL
	TweenMax.set(showOnScroll, {autoAlpha: 0, onStart: function() {showOnScroll.children().removeClass("active");} });
	TweenMax.set(hideOnScroll, {autoAlpha: 1, onStart: function() {hideOnScroll.children().addClass("active");} });
	
	
	/* -------------------------------------------------- */
	/* HEADROOM
	/* -------------------------------------------------- */
	
    navbar.headroom({
	
		/* -------------------------------------------------- */
		/* SET-UP
		/* -------------------------------------------------- */

		scroller: window, // Element to listen to scroll events on, defaults to 'window'.
		offset: $stickyOffset, // Vertical offset in px before element is first unpinned.
		tolerance: { // Or you can specify tolerance individually for up / down scroll.
			up: $stickyScrollToleranceUp,
			down: $stickyScrollToleranceDown
		},

		
		/* -------------------------------------------------- */
		/* CLASSES
		/* -------------------------------------------------- */

		classes: {
			initial: "ready", // Element is initialised.
			pinned: "is-scrolling-up", // When scrolling up.
			unpinned: "is-scrolling-down", // When scrolling down.
			top: "is-top", // When above offset.
			notTop: "is-not-top", // When below offset.
			bottom: "is-bottom", // When at bottom of scoll area.
			notBottom: "is-not-bottom" // when not at bottom of scroll area.
		},

		
		/* -------------------------------------------------- */
		/* DETECTION
		/* -------------------------------------------------- */

		onPin: function() { // Callback when scrolling up.
			//console.log("Scrolling up.");


			// NAVBAR
			if ( $navbarHideOnScrollUp ) {

				TweenMax.to(navbar, $navbarHideSpeed, {y: - parseFloat($navbarHeight, 10), ease: $navbarHideEase});

			} else {

				TweenMax.to(navbar, $navbarHideSpeed, {y: 0, ease: $navbarHideEase});
				TweenMax.to(navbarMenubar, $navbarShrinkSpeed, {height: $navbarShrinkHeight, ease: $navbarShrinkEase});
				TweenMax.set(navPanelMenubar, {height: $navbarShrinkHeight});

			}

            
			// TOOLBAR
			if ( $toolbarHideOnScrollUp ) {

				TweenMax.to(toolbar, $toolbarHideSpeed, {bottom: - parseFloat($toolbarHeight, 10), ease: $toolbarHideEase});

			} else {

				TweenMax.to(toolbar, $toolbarHideSpeed, {bottom: 0, ease: $toolbarHideEase});
				TweenMax.to(toolbarMenubar, $toolbarShrinkSpeed, {height: $toolbarShrinkHeight, ease: $toolbarShrinkEase});

			}


		},

		onUnpin: function() { // Callback when scrolling down.
			//console.log("Scrolling down.");


			// NAVBAR
			if ( $navbarHideOnScrollDown ) {

				TweenMax.to(navbar, $navbarHideSpeed, {y: - parseFloat($navbarHeight, 10), ease: $navbarHideEase});

				$$("a.dropdown").removeClass("active");
				$$("ul.subnav").addClass("no-pointer");
				TweenMax.to("ul.subnav", 0.5, {autoAlpha: 0, x: 25, ease: Power4.easeOut});

			} else {

				TweenMax.to(navbar, $navbarHideSpeed, {y: 0, ease: $navbarHideEase});

			}

            
			// TOOLBAR
			if ( $toolbarHideOnScrollDown ) {

				TweenMax.to(toolbar, $toolbarHideSpeed, {bottom: - parseFloat($toolbarHeight, 10), ease: $toolbarHideEase});

			} else {

				TweenMax.to(toolbar, $toolbarHideSpeed, {bottom: 0, ease: $toolbarHideEase});

			}


		},

		onTop: function() { // Callback when above offset.
			//console.log("At top of page.");
			

			// ON SCROLL
			TweenMax.to(showOnScroll, 0.25, {autoAlpha: 0, ease: Power4.easeOut, onStart: function() {showOnScroll.children().removeClass("active");} });
			TweenMax.to(hideOnScroll, 0.25, {autoAlpha: 1, ease: Power4.easeOut, onStart: function() {hideOnScroll.children().addClass("active");} });
			
			
			// SET-UP
			navbar.css({"position" : "absolute"});
			navbar.removeClass($navbarStickyClass);
			navPanel.removeClass($navbarStickyClass);

			TweenMax.to(navbarMenubar, $navbarShrinkSpeed, {height: $navbarHeight, ease: $navbarShrinkEase});
			TweenMax.set(navPanelMenubar, {height: $navbarHeight});
			

			// TOOLBAR
			if ( $toolbarShowOnPageStart ) {

				TweenMax.to(toolbar, $toolbarHideSpeed, {bottom: 0, ease: $toolbarHideEase});

			} else {

				TweenMax.to(toolbar, $toolbarHideSpeed, {bottom: - parseFloat($toolbarHeight, 10), ease: $toolbarHideEase});

			}


		},

		onNotTop: function() { // Callback when below offset.
			//console.log("Away from top of page.");
			

			// ON SCROLL
			TweenMax.to(showOnScroll, 0.25, {autoAlpha: 1, ease: Power4.easeOut, onStart: function() {showOnScroll.children().addClass("active");} });
			TweenMax.to(hideOnScroll, 0.25, {autoAlpha: 0, ease: Power4.easeOut, onStart: function() {hideOnScroll.children().removeClass("active");} });
			
			
			// SET-UP
			if ( $navbarAllowSticky ) {

				navbar.css({"position" : "fixed", "top" : "0"});
				navbar.addClass($navbarStickyClass);
				navPanel.addClass($navbarStickyClass);
				
			}

            
			TweenMax.to(navbarMenubar, $navbarShrinkSpeed, {height: $navbarShrinkHeight, ease: $navbarShrinkEase});
			TweenMax.to(toolbarMenubar, $toolbarShrinkSpeed, {height: $toolbarShrinkHeight, ease: $toolbarShrinkEase});
			TweenMax.set(navPanelMenubar, {height: $navbarShrinkHeight});
			
		},

		onBottom: function() { // Callback when at bottom of page.
			//console.log("At bottom of page.");


			// NAVBAR
			if ( $navbarShowOnPageEnd  ) {

				TweenMax.to(navbar, $navbarHideSpeed, {y: 0, ease: $navbarHideEase});
				TweenMax.to(navbarMenubar, $navbarHideSpeed, {height: $navbarShowOnPageEndHeight, ease: $navbarHideEase});
				TweenMax.set(navPanelMenubar, {height: $navbarShowOnPageEndHeight});

			} else {

				TweenMax.to(navbar, $navbarHideSpeed, {y: - parseFloat($navbarHeight, 10), ease: $navbarHideEase});
				TweenMax.to(navbarMenubar, $navbarHideSpeed, {height: $navbarShowOnPageEndHeight, ease: $navbarHideEase});
				TweenMax.set(navPanelMenubar, {height: $navbarShowOnPageEndHeight});

			}

            
			// TOOLBAR
			if ( $toolbarShowOnPageEnd ) {
				TweenMax.to(toolbar, $toolbarHideSpeed, {bottom: 0, ease: $toolbarHideEase});
				TweenMax.to(toolbarMenubar, $toolbarShrinkSpeed, {height: $toolbarShowOnPageEndHeight, ease: $toolbarShrinkEase});

			} else {

				TweenMax.to(toolbar, $toolbarHideSpeed, {bottom: - parseFloat($toolbarHeight, 10), ease: $toolbarHideEase});
				TweenMax.to(toolbarMenubar, $toolbarShrinkSpeed, {height: $toolbarShowOnPageEndHeight, ease: $toolbarShrinkEase});

			}


		},

		onNotBottom: function() { // Callback when moving away from bottom of page.
            //console.log("Away from bottom of page.");

			// NAVBAR
			//TweenMax.to([navbarMenubar, navPanelMenubar], $navbarShrinkSpeed, {height: $navbarShrinkHeight, ease: $navbarShrinkEase});

            
			// TOOLBAR
			TweenMax.to(toolbarMenubar, $toolbarShrinkSpeed, {height: $toolbarShrinkHeight, ease: $toolbarShrinkEase});


		}
	
	}); 
    
    
}; // END uiScrollEvents


/* -------------------------------------------------- */
/* SMOOTH SCROLL
/* -------------------------------------------------- */

var uiScrollTo = function() {
	"use strict";
	//console.log("Initializing uiSmoothScroll...");


	/* -------------------------------------------------- */
	/* CACHE SELECTORS
	/* -------------------------------------------------- */	
	
	var	scrollTo = $(".scroll-to"),
		scrollToTop = $(".scroll-to[href='#top']");	
	
	
	/* -------------------------------------------------- */
	/* SET-UP
	/* -------------------------------------------------- */
	
	if ( !$navPanelCloseOnLinkClick ) {
		
		navPanelItems.find(scrollTo).removeAttr("data-toggle", ''+navPanelString.substring(1)+'');

	}
	
    
	/*
	var scrollToReset = function() {
		
		if ($hash && $hash.length > 0) {
			TweenMax.to(window, 1, {scrollTo: $hash, ease: Power2.easeInOut});
		}
		
	};

	TweenMax.delayedCall(1, scrollToReset);
	*/
	
	
	/* -------------------------------------------------- */
	/* SCROLL TO
	/* -------------------------------------------------- */
	
	/*
	if ( !$hasTouch && $allowScrollTo ) {
		
		scrollTo.not(scrollToTop).on("click", function(e) {
			e.preventDefault();

			var self = $(this),
				$hash = getHash(self.attr("href"));
		
			
			if ( $isEdge ) {
			
				var tweenScrollTo = TweenMax.to([body], $scrollToSpeed, {scrollTo: {y: $hash, offsetY: $scrollToOffsetY, autoKill: true}, ease: $scrollToEase});
				
			} else {
				
				var tweenScrollTo = TweenMax.to(html, $scrollToSpeed, {scrollTo: {y: $hash, offsetY: $scrollToOffsetY, autoKill: true}, ease: $scrollToEase});
				
			}

			if ( html.hasClass("no-scroll") ) {

				var tweenScrollTo = TweenMax.to([scrollTarget], $scrollToSpeed, {scrollTo: {y: $hash, offsetY: $scrollToOffsetY -100, autoKill: true}, ease: $scrollToEase});

			}

            
			// If supported by the browser we can even update the URL.
			if ( window.history && window.history.pushState ) {

					history.pushState("", document.title, $hash);
				
			}


			window.onerror = function () {
			 
				console.log("Hash location does not exist.");

				TweenMax.killAll(false, true, false, false);

				return false;

			}


			return false;

		});

	}
	*/
	
	
	/* -------------------------------------------------- */
	/* SCROLL TO TOP
	/* -------------------------------------------------- */
	
	scrollToTop.click(function(e) {
		e.preventDefault();

		if ( $isMobile ) {

			window.scrollTo(0, 0);

		} else {
			
			$(html, body).animate({ scrollTop: 0 }, 800, "easeInOutExpo");

		}

		return false;

	});


    /*
	scrollToTop.on("click", function(e) {
		e.preventDefault();
		
		if ( $isMobile ) {
			
			window.scrollTo(0, 0);
		
		} else {
		
			TweenMax.to([html, body, scrollTarget], $scrollToSpeed, {scrollTo: {y: 0, offsetY: 0, autoKill: true}, ease: $scrollToEase});
	
		}

		return false;

	});
	*/


	/* -------------------------------------------------- */
	/* HASH CHECK
	/* -------------------------------------------------- */
	
	var $hash = getHash(location.hash);

	window.scrollTo(0, 0);
	
	function getHash(h) {
		
		if (h !== "") {
			
			h = h.split("?");
			h = h[0];
			
		} else {
			
			h = false;
			
		} 
		
		return h;
	}


	/* -------------------------------------------------- */
	/* HASH
	/* -------------------------------------------------- */

	var checkHash = function() {
		//"use strict";

		var $hash = $(window.location.hash);
		window.opener = null;

		if ( location.hash ) {

			//console.log($hash);
			//location.hash = $currentAnchorLink;

			if ( !$hasTouch && main.find($hash).length ) {

				$(html, body).animate({ scrollTop: $hash.offset().top }, 800, "easeInOutExpo");

				//TweenMax.to($$(window), $scrollToSpeed, {scrollTo: {y: $hash, offsetY: navbar.height() +25, autoKill: true}, ease: $scrollToEase});

			} else if ( $hasTouch ) {

				location.hash = $hash;
				window.opener = null;

				return false;

			} else if ( !main.find($hash).length ) {

				console.log("Error: Section does not exist");

				location.hash = "#";
				window.opener = null;

				return false;

			}
			

		}

	}; //checkHash();
	

	TweenMax.delayedCall($delayInterval, checkHash);

}; // END uiScrollTo


/* -------------------------------------------------- */
/* SCROLL TRACK
/* -------------------------------------------------- */

var uiScrollTrack = function() {

	var $windowScrollTop = $(window).scrollTop() + 90;

	var currentSection = $("section").filter(function() {

		return $windowScrollTop <= $(this).offset().top + $(this).height();

	});


	$$(".accordion-item").find("a").removeClass("is-active");
	$$(".accordion-item").find("a[href=\\#" + currentSection.attr("id") + "]").addClass("is-active");




	/*
	if ( $$(".accordion-item").find("a").hasClass("is-active") ) {

		console.log( "has class" );

	} else {

		console.log( "does not has class" );

	}
	*/

	//$$(".accordion").find("a").removeClass("is-active");
	//$$(".accordion").find("a[href=\\#" + currentSection.attr("id") + "]").addClass("is-active");


	if ( $$(window).scrollTop() > 100 ) {

		// Add sticky classes.

	} else if ( $$(window).scrollTop() < 100 ) {

		// Remove sticky classes.

	}

}; // END uiScrollTrack


$$(window).on("scrollstop", { latency: 500 }, uiScrollTrack);


/* -------------------------------------------------- */
/* STICKY
/* -------------------------------------------------- */

var uiSticky = function() {

	$$(".sticky").stick_in_parent({

		//parent: null,
		inner_scrolling: true,
		sticky_class: "is-stuck",
		offset_top: 0,
		//spacer: null,
		bottoming: true,
		//recalc_every: null

	});

}; // END uiSticky


/* -------------------------------------------------- */
/* UI BUTTONS
/* -------------------------------------------------- */

var uiButtons = function() {
	"use strict";
	//console.log("Initializing uButtons...");
	
	/* -------------------------------------------------- */
	/* CACHE SELECTORS
	/* -------------------------------------------------- */
	
	var	button = $(".button"),

		/*
		buttonWavesDarkGrey = $(".button.background-dark-grey"),
		buttonWavesCharcoal = $(".button.background-charcoal"),
		buttonWavesBlack = $(".button.background-black"),

		buttonWavesPrimary = $(".button.background-primary"),
		buttonWavesSecondary = $(".button.background-secondary"),
		buttonWavesAccent = $(".button.background-accent"),
		buttonWavesLightgrey = $(".button.background-light-grey"),
		buttonWavesWhite = $(".button.background-white"),

		buttonWavesDefault = $(".button.button-fx-waves-button"),
		buttonWavesCircle = $(".button.button-fx-waves-circle"),
		buttonWavesLight = $(".button.button-fx-waves-light"),
		buttonWavesFloat = $(".button.button-fx-float"),
		buttonWavesBlock = $(".button.button-fx-waves-block"),
		*/

		buttonNoTouchFeedback = $(".no-touch-feedback"),
		buttonNoWaves = $(".no-waves");
	
	
	/* -------------------------------------------------- */
	/* BUTTONS / TOUCH FEEDBACK
	/* -------------------------------------------------- */
	
	if ( $hasTouch ) {
		
		button.not(buttonNoTouchFeedback).on("mousedown touchstart", function() {
		
			var self = $(this);

			TweenMax.set(self, {x: 1, y: 1, scale: 0.95, boxShadow: "0 8px 10px 1px rgba(0,0,0,0.06), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.08)"});
		
		}).on("mouseup mouseleave touchend touchleave touchmove", function() {
		
			var self = $(this);
			
			TweenMax.set(self, {clearProps: "all"});
			
		});
		
	}
	
	
	/* -------------------------------------------------- */
	/* WAVES
	/* -------------------------------------------------- */

	if ( !$isExplorer && $hasTouch ) {
		
		var options = {
			// How long Waves effect duration 
			// when it's clicked (in milliseconds)
			duration: 400,

			// Delay showing Waves effect on touch
			// and hide the effect if user scrolls
			// (0 to disable delay) (in milliseconds)
			delay: 200
		};
       
		
		button.addClass("overflow-hidden");


		Waves.attach(navbarToggle, ["waves-block", "waves-light"]);
		Waves.attach(navPanelToggle, ["waves-block", "waves-light"]);
		Waves.attach(navToggleLabel, ["waves-block", "waves-light"]);
		Waves.attach($$(".scroll-to").not(buttonNoWaves), ["waves-block", "waves-light"]);
		
		Waves.attach(button.not(buttonNoWaves), ["waves-block", "waves-light"]);

		/*
		Waves.attach(buttonWavesDarkGrey, ["waves-light"]);
		Waves.attach(buttonWavesCharcoal, ["waves-light"]);
		Waves.attach(buttonWavesBlack, ["waves-light"]);

		Waves.attach(buttonWavesPrimary, ["waves-button"]);
		Waves.attach(buttonWavesSecondary, ["waves-button"]);
		Waves.attach(buttonWavesAccent, ["waves-button"]);
		Waves.attach(buttonWavesLightgrey, ["waves-button"]);
		Waves.attach(buttonWavesWhite, ["waves-button"]);


		Waves.attach(buttonWavesDefault, ["waves-button"]);
		Waves.attach(buttonWavesCircle, ["waves-circle"]);
		Waves.attach(buttonWavesLight, ["waves-light"]);
		Waves.attach(buttonWavesFloat, ["waves-float"]);
		Waves.attach(buttonWavesBlock, ["waves-block"]);
		*/

		Waves.init(options);
		
		// Remove '.waves-effect' if element has '.no-waves' class.
		//buttonNoWaves.removeClass("waves-effect");

	}

}; // END uiButtons


/* -------------------------------------------------- */
/* UI LAYOUT
/* -------------------------------------------------- */

//removeIf(production)
var uiRelayout = function() {  
	"use strict";
	//console.log("Initializing uiRelayout...");

	/* -------------------------------------------------- */
	/* CACHE SELECTORS
	/* -------------------------------------------------- */
	
	var	menubarLogo = $(".menubar .logo"),
		menubarCallout = $(".menubar .callout"),
		menubarNavToggleLabel = $(".menubar .nav-toggle-label"),
		menubarNavToggle = $(".menubar .nav-toggle");
	
	
	/* -------------------------------------------------- */
	/* RESETS / RECALC
	/* -------------------------------------------------- */
	
	//TweenMax.delayedCall($delayInterval, Foundation.reInit, ["equalizer"]);


	// Reset '.height-vh-full' class.
	//$(".height-vh-full").css({"height" : "100vh"});

	
	/* -------------------------------------------------- */
	/* NAV PANEL
	/* -------------------------------------------------- */
	
	if ( $hasTouch ) {
		
		navPanelContents.addClass("is-touch");
		
	} else {
		
		navPanelContents.removeClass("is-touch");
		
	}

	
	/* -------------------------------------------------- */
	/* NAVBAR
	/* -------------------------------------------------- */

	if ( $navbarOrder === "left" ) {
		
		// NAVBAR
		navbarContents.addClass("small-order-1 medium-order-1 large-order-1");
		
		menubarNavToggle.addClass("small-order-1 medium-order-1 large-order-1 flip-x");
		menubarNavToggleLabel.addClass("small-order-2 medium-order-2 large-order-2");
		
		menubarCallout.addClass("small-order-3 medium-order-3 large-order-3");
		
		menubarLogo.addClass("small-order-4 medium-order-4 large-order-4");
		menubarLogo.children().children().addClass("margin-right-auto");
		
	}
	
	
	if ( $isMobile || Modernizr.mq('(min-width: 0) and (max-width: '+$navbarBreakpoint+' )') ) {

		menubarLogo.removeClass("shrink").addClass("auto");
		menubarNavToggle.removeClass("hide");
		menubarNavToggleLabel.removeClass("hide");
		
		navbarContents.addClass("hide");
		navbarCallout.addClass("hide");

	} else {
		
		menubarLogo.removeClass("auto").addClass("shrink");
		menubarNavToggle.addClass("hide");
		menubarNavToggleLabel.addClass("hide");
		
		navbarContents.removeClass("hide");
		navbarCallout.removeClass("hide");

	}
	
	
	if ( $navbarOrder === "right" ) {
		
		navbarMenubar.addClass("align-right");
		
	}
	
	
	/* -------------------------------------------------- */
	/* TOOLBAR
	/* -------------------------------------------------- */

	// SPACING
	if ( $toolbarHideOnScrollDown || $toolbarShowOnPageEnd ) {

		 // First we remove 'margin-bottom' and add '10px' to 'padding-bottom' attribute.
		main.css({"margin-bottom" : "0", 
				  "padding-bottom" : "0"});

		// Then we take the value from 'toolbarShowOnPageEndHeight' apply it to 'margin-bottom' to 'main' selector.
		//main.children(block + ":last-child").css({"padding-bottom" : (parseFloat($toolbarShowOnPageEndHeight.replace(/px/,"")) / 16 + 0) + "rem"});

		//footer.css({"padding-bottom" : (parseFloat($toolbarShowOnPageEndHeight.replace(/px/,"")) / 12) + "rem"});

	}


	// SHOW / HIDE
	if ( !$toolbarShowOnMobileOnly && Modernizr.mq('(min-width: 0) and (max-width: '+$toolbarBreakpoint+' )') ) {
		//console.log("Show Toolbar");

		toolbar.removeClass("hide");
		//TweenMax.to(toolbar, 0.5, {autoAlpha: 1, ease: Power4.easeOut});

	} else if ( $hasTouch && $toolbarShowOnMobileOnly && Modernizr.mq('(min-width: 0) and (max-width: '+$toolbarMobileBreakpoint+')') ) {
		//console.log("Mobile Toolbar");

		toolbar.removeClass("hide");
		//TweenMax.to(toolbar, 0.5, {autoAlpha: 1, ease: Power4.easeOut});

	}


	// STYLES
	if ( Modernizr.mq('(min-width: 0) and (max-width: 600px)') ) {

		/*
		var fontSize = parseFloat(toolbarMenubar.find(".cell a div .fa").css("font-size"));
			fontSize = (fontSize / 0.02) + "em";
		*/

		toolbarMenubar.find(".cell a div span").css({"display" : "none"});

		toolbarMenubar.find(".cell a div .fa").css({"display" : "block",
													"margin" : "0 0 0 0"});

	}
		
}; // END uiRelayout


$$(window).on("resize", _.debounce(uiRelayout, $delayInterval));

// Delay 'uiRelayout' function.
//TweenMax.delayedCall(tlPreloaderEnd.duration() + $delayInterval, uiRelayout);

//endRemoveIf(production)
