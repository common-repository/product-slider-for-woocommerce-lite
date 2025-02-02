/* Icon Picker */

(function($) {

    $.fn.iconPicker = function(options) {
        var options = ['dashicons', 'font-awesome']; // default font set
        var icons;
        $list = $('');
        function font_set() {
            if (options[0] == 'dashicons') {
                icons = [
                    "blank", // there is no "blank" but we need the option
                    "menu",
                    "admin-site",
                    "dashboard",
                    "admin-media",
                    "admin-page",
                    "admin-comments",
                    "admin-appearance",
                    "admin-plugins",
                    "admin-users",
                    "admin-tools",
                    "admin-settings",
                    "admin-network",
                    "admin-generic",
                    "admin-home",
                    "admin-collapse",
                    "admin-links",
                    "format-links",
                    "admin-post",
                    "format-standard",
                    "format-image",
                    "format-gallery",
                    "format-audio",
                    "format-video",
                    "format-chat",
                    "format-status",
                    "format-aside",
                    "format-quote",
                    "welcome-write-blog",
                    "welcome-edit-page",
                    "welcome-add-page",
                    "welcome-view-site",
                    "welcome-widgets-menus",
                    "welcome-comments",
                    "welcome-learn-more",
                    "image-crop",
                    "image-rotate-left",
                    "image-rotate-right",
                    "image-flip-vertical",
                    "image-flip-horizontal",
                    "undo",
                    "redo",
                    "editor-bold",
                    "editor-italic",
                    "editor-ul",
                    "editor-ol",
                    "editor-quote",
                    "editor-alignleft",
                    "editor-aligncenter",
                    "editor-alignright",
                    "editor-insertmore",
                    "editor-spellcheck",
                    "editor-distractionfree",
                    "editor-kitchensink",
                    "editor-underline",
                    "editor-justify",
                    "editor-textcolor",
                    "editor-paste-word",
                    "editor-paste-text",
                    "editor-removeformatting",
                    "editor-video",
                    "editor-customchar",
                    "editor-outdent",
                    "editor-indent",
                    "editor-help",
                    "editor-strikethrough",
                    "editor-unlink",
                    "editor-rtl",
                    "align-left",
                    "align-right",
                    "align-center",
                    "align-none",
                    "lock",
                    "calendar",
                    "visibility",
                    "post-status",
                    "post-trash",
                    "edit",
                    "trash",
                    "arrow-up",
                    "arrow-down",
                    "arrow-left",
                    "arrow-right",
                    "arrow-up-alt",
                    "arrow-down-alt",
                    "arrow-left-alt",
                    "arrow-right-alt",
                    "arrow-up-alt2",
                    "arrow-down-alt2",
                    "arrow-left-alt2",
                    "arrow-right-alt2",
                    "leftright",
                    "sort",
                    "list-view",
                    "exerpt-view",
                    "share",
                    "share1",
                    "share-alt",
                    "share-alt2",
                    "twitter",
                    "rss",
                    "facebook",
                    "facebook-alt",
                    "networking",
                    "googleplus",
                    "hammer",
                    "art",
                    "migrate",
                    "performance",
                    "wordpress",
                    "wordpress-alt",
                    "pressthis",
                    "update",
                    "screenoptions",
                    "info",
                    "cart",
                    "feedback",
                    "cloud",
                    "translation",
                    "tag",
                    "category",
                    "yes",
                    "no",
                    "no-alt",
                    "plus",
                    "minus",
                    "dismiss",
                    "marker",
                    "star-filled",
                    "star-half",
                    "star-empty",
                    "flag",
                    "location",
                    "location-alt",
                    "camera",
                    "images-alt",
                    "images-alt2",
                    "video-alt",
                    "video-alt2",
                    "video-alt3",
                    "vault",
                    "shield",
                    "shield-alt",
                    "search",
                    "slides",
                    "analytics",
                    "chart-pie",
                    "chart-bar",
                    "chart-line",
                    "chart-area",
                    "groups",
                    "businessman",
                    "id",
                    "id-alt",
                    "products",
                    "awards",
                    "forms",
                    "portfolio",
                    "book",
                    "book-alt",
                    "download",
                    "upload",
                    "backup",
                    "lightbulb",
                    "smiley"
                ];
                options[1] = 'dashicons';
            } else {
                icons = [
                    "blank",
                    // Mail
                    "inbox",
                    "envelope",
                    "envelope-o",
                    "paperclip",
                    "reply-all",
                    "mail-reply-all",
                    "mail-forward",
                    "mail-reply",
                    "reply",
                    // Media
                    "music",
                    "film",
                    "step-backward",
                    "fast-backward",
                    "backward",
                    "play",
                    "play-circle",
                    "play-circle-o",
                    "pause",
                    "stop",
                    "forward",
                    "fast-forward",
                    "step-forward",
                    "eject",
                    "repeat",
                    "refresh",
                    "random",
                    "headphones",
                    "volume-off",
                    "volume-down",
                    "volume-up",
                    // Arrows
                    "angle-double-left",
                    "angle-double-right",
                    "angle-double-up",
                    "angle-double-down",
                    "angle-left",
                    "angle-right",
                    "angle-up",
                    "angle-down",
                    "arrows",
                    "arrow-left",
                    "arrow-right",
                    "arrow-up",
                    "arrow-down",
                    "arrows-alt",
                    "arrows-v",
                    "arrows-h",
                    "arrow-circle-left",
                    "arrow-circle-right",
                    "arrow-circle-up",
                    "arrow-circle-down",
                    "arrow-circle-o-down",
                    "arrow-circle-o-up",
                    "arrow-circle-o-right",
                    "arrow-circle-o-left",
                    "caret-down",
                    "caret-up",
                    "caret-left",
                    "caret-right",
                    "chevron-left",
                    "chevron-right",
                    "chevron-up",
                    "chevron-down",
                    "chevron-circle-left",
                    "chevron-circle-right",
                    "chevron-circle-up",
                    "chevron-circle-down",
                    "expand",
                    "compress",
                    "hand-o-right",
                    "hand-o-left",
                    "hand-o-up",
                    "hand-o-down",
                    "level-up",
                    "level-down",
                    "long-arrow-down",
                    "long-arrow-up",
                    "long-arrow-left",
                    "long-arrow-right",
                    "rotate-right",
                    "toggle-left",
                    "toggle-down",
                    "toggle-up",
                    "toggle-right",
                    // Search
                    "search",
                    "search-plus",
                    "search-minus",
                    // File Editing
                    "cut",
                    "crop",
                    "copy",
                    "paste",
                    "font",
                    "bold",
                    "italic",
                    "anchor",
                    "link",
                    "unlink",
                    "chain-broken",
                    "external-link",
                    "external-link-square",
                    "text-height",
                    "text-width",
                    "align-left",
                    "align-center",
                    "align-right",
                    "align-justify",
                    "list",
                    "quote-left",
                    "quote-right",
                    "outdent",
                    "indent",
                    "undo",
                    "adjust",
                    "tint",
                    "edit",
                    "list-ul",
                    "list-ol",
                    "list-alt",
                    "th-large",
                    "th",
                    "th-list",
                    "strikethrough",
                    "underline",
                    "magic",
                    "superscript",
                    "subscript",
                    "eraser",
                    "pagelines",
                    // Punctuation
                    "asterisk",
                    "question",
                    "info",
                    "exclamation",
                    // Emoticons
                    "smile-o",
                    "frown-o",
                    "meh-o",
                    // Math + Geometry
                    "check",
                    "times",
                    "plus",
                    "minus",
                    "crosshairs",
                    "spinner",
                    "circle",
                    "circle-o",
                    "dot-circle-o",
                    "minus-circle",
                    "times-circle",
                    "check-circle",
                    "exclamation-circle",
                    "question-circle",
                    "info-circle",
                    "plus-circle",
                    "plus-square",
                    "plus-square-o",
                    "square",
                    "square-o",
                    "h-square",
                    "share-square",
                    "share-square-o",
                    "check-square-o",
                    "times-circle-o",
                    "check-circle-o",
                    "ellipsis-h",
                    "ellipsis-v",
                    "minus-square",
                    "check-square",
                    "bullseye",
                    // Rate
                    "thumbs-o-up",
                    "thumbs-o-down",
                    "star",
                    "star-o",
                    "star-half",
                    "star-half-o",
                    "heart",
                    "heart-o",
                    "lemon-o",
                    "trophy",
                    "thumbs-up",
                    "thumbs-down",
                    // Accounts
                    "user",
                    "user-md",
                    "group",
                    "sign-in",
                    "sign-out",
                    "key",
                    "lock",
                    "unlock",
                    "unlock-alt",
                    "gear",
                    "gears",
                    "ban",
                    "female",
                    "male",
                    "comment",
                    "comments",
                    "ticket",
                    "tasks",
                    "calendar",
                    "calendar-o",
                    // Time
                    "sun-o",
                    "moon-o",
                    "clock-o",
                    // Site
                    "home",
                    "comment-o",
                    "comments-o",
                    "sitemap",
                    // File Operations
                    "upload",
                    "download",
                    "exchange",
                    "file-o",
                    "files-o",
                    "file",
                    "file-text",
                    "file-text-o",
                    "folder",
                    "folder-o",
                    "folder-open",
                    "hdd-o",
                    "cloud",
                    "cloud-download",
                    "cloud-upload",
                    "save",
                    "trash-o",
                    "print",
                    // Social Networks
                    "adn",
                    "dribbble",
                    "dropbox",
                    "facebook",
                    "facebook-square",
                    "flickr",
                    "foursquare",
                    "github",
                    "github-square",
                    "github-alt",
                    "gittip",
                    "google-plus",
                    "google-plus-square",
                    "instagram",
                    "linkedin",
                    "linkedin-square",
                    "pinterest",
                    "pinterest-square",
                    "renren",
                    "rss",
                    "rss-square",
                    "skype",
                    "stack-exchange",
                    "stack-overflow",
                    "trello",
                    "tumblr",
                    "tumblr-square",
                    "twitter",
                    "twitter-square",
                    "retweet",
                    "vimeo-square",
                    "vk",
                    "weibo",
                    "xing",
                    "xing-square",
                    "youtube",
                    "youtube-square",
                    "youtube-play",
                    // Computer
                    "desktop",
                    "laptop",
                    "tablet",
                    "mobile-phone",
                    "phone",
                    "phone-square",
                    "microphone",
                    "microphone-slash",
                    "apple",
                    "windows",
                    "android",
                    "linux",
                    "html5",
                    "css3",
                    "gamepad",
                    "keyboard-o",
                    "signal",
                    "power-off",
                    "terminal",
                    "code",
                    "code-fork",
                    "bug",
                    // Maps
                    "glass",
                    "globe",
                    "map-marker",
                    "thumb-tack",
                    "building-o",
                    "hospital-o",
                    "location-arrow",
                    "compass",
                    "road",
                    // Tools & Objects
                    "bell",
                    "book",
                    "bookmark",
                    "bookmark-o",
                    "bullhorn",
                    "camera",
                    "camera-retro",
                    "video-camera",
                    "picture-o",
                    "pencil",
                    "pencil-square",
                    "flask",
                    "briefcase",
                    "table",
                    "truck",
                    "wrench",
                    "plane",
                    "lightbulb-o",
                    "stethoscope",
                    "suitcase",
                    "bell-o",
                    "coffee",
                    "cutlery",
                    "umbrella",
                    "ambulance",
                    "medkit",
                    "fighter-jet",
                    "beer",
                    "wheelchair",
                    "gift",
                    "leaf",
                    "fire",
                    "eye",
                    "eye-slash",
                    "warning",
                    "magnet",
                    "flag",
                    "flag-o",
                    "flag-checkered",
                    "fire-extinguisher",
                    "rocket",
                    "shield",
                    "puzzle-piece",
                    "legal",
                    "dashboard",
                    "flash",
                    "bars",
                    "bar-chart-o",
                    "bed",
                    // Sorting
                    "columns",
                    "filter",
                    "sort",
                    "sort-down",
                    "sort-up",
                    "sort-alpha-asc",
                    "sort-alpha-desc",
                    "sort-amount-asc",
                    "sort-amount-desc",
                    "sort-numeric-asc",
                    "sort-numeric-desc",
                    // e-Commerce
                    "money",
                    "certificate",
                    "credit-card",
                    "shopping-cart",
                    "euro",
                    "gbp",
                    "dollar",
                    "rupee",
                    "yen",
                    "ruble",
                    "won",
                    "bitcoin",
                    "bitbucket-square",
                    "turkish-lira",
                    "tag",
                    "tags",
                    "qrcode",
                    "barcode"
                ];
                options[1] = "fa";
            }
            ;
        }
        ;
        font_set();

        function build_list($popup, $button, clear) {
            $list = $popup.find('.icon-picker-list');
            if (clear == 1) {
                $list.empty(); // clear list //
            }
            for (var i in icons) {
                $list.append('<li data-icon="' + icons[i] + '"><a href="#" title="' + icons[i] + '"><span class="' + options[0] + ' ' + options[1] + '-' + icons[i] + '"></span></a></li>');
            }
            ;
            $('a', $list).click(function(e) {
                e.preventDefault();
                var title = $(this).attr("title");
                $target.val(options[0] + "|" + options[1] + "-" + title);
                $button.removeClass().addClass("button icon-picker " + options[0] + " " + options[1] + "-" + title);
                removePopup();
            });
        }
        ;

        function removePopup() {
            $(".icon-picker-container").remove();
        }


        $button = $('.icon-picker');
        $button.each(function() {
            $(this).on('click.iconPicker', function() {
                createPopup($(this));
            });
        });


        function createPopup($button) {
            $target = $($button.data('target'));
            $popup = $('<div class="icon-picker-container"> \
						<span class="icon-picker-close">X</span> \
                        <div class="icon-picker-control" /> \
						<ul class="icon-picker-list" /> \
					</div>')
                    .css({
                        'top': $button.offset().top,
                        'left': $button.offset().left
                    });
            build_list($popup, $button, 0);
            var $control = $popup.find('.icon-picker-control');
            $control.html('<p>Select Font: <select><option value="dashicons">Dashicons</option><option value="fa">Font Awesome</option></select></p>' +
                    '<a data-direction="back" href="#"><span class="dashicons dashicons-arrow-left-alt2"></span></a> ' +
                    '<input type="text" class="" placeholder="Search" />' +
                    '<a data-direction="forward" href="#"><span class="dashicons dashicons-arrow-right-alt2"></span></a>' +
                    '');

            $('select', $control).on('change', function(e) {
                e.preventDefault();
                if (this.value != options[0]) {
                    options[0] = this.value;
                    font_set();
                    build_list($popup, $button, 1);
                }
                ;
            });

            $('a', $control).click(function(e) {
                e.preventDefault();
                if ($(this).data('direction') === 'back') {
                    //move last 25 elements to front
                    $('li:gt(' + (icons.length - 26) + ')', $list).each(function() {
                        $(this).prependTo($list);
                    });
                } else {
                    //move first 25 elements to the end
                    $('li:lt(25)', $list).each(function() {
                        $(this).appendTo($list);
                    });
                }
            });

            $popup.appendTo('body').show();

            $('input', $control).on('keyup', function(e) {
                var search = $(this).val();
                if (search === '') {
                    //show all again
                    $('li:lt(25)', $list).show();
                } else {
                    $('li', $list).each(function() {
                        if ($(this).data('icon').toString().toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    });
                }
            });

            $(document).mouseup(function(e) {
                if (!$popup.is(e.target) && $popup.has(e.target).length === 0) {
                    removePopup();
                }
            });

            $(document).on("click", ".icon-picker-close", function(e) {
                removePopup();
            });

            $(document).on('keydown', function(e) {
                if (e.keyCode === 27) {
                    removePopup();
                }
            });
        }
    }

    $(function() {

        /** Icon picker Initialization For Menu & Custom Template **/
        //$('.icon-picker').iconPicker();
    });

}(jQuery));
