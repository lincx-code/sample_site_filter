$(document).ready(function ($) {
	"use strict";

	// filter click function *************************************
	$('a[id^=filter_]').click(function (e) {
		e.preventDefault();
		let filter_name = $(this).attr('id').replace('filter_', '');
		//console.log(filter_name);

		if (filter_name === "all") {
			//display all news block
			$('.news-block').hide();
			$('.news-block').showArticle();
		} else {
			//display selected blocks
			$('.news-block').hide();

			// loop though all articles
			$('.news-block .description').each(function () {
				let thisArticle = $(this).parent();
				let thisTags = $(this).attr('data-tags');

				let copy = thisTags.toLowerCase();
				//console.log(copy);

				// check if the article contains filter
				if ((searchFlag(filter_name, copy)) === 1) {
					thisArticle.showArticle();
				} else {
					thisArticle.hideArticle();
				}
			});
		}
	});
});

/*
 * search news that contains the filter
 */
function searchFlag(filter, copy) {
	"use strict";
	var flag = 0;
	if (copy.indexOf(filter) !== -1) {
		flag = 1;
	}
	return flag;
}

/*
 * showArticle function creates jQuery animation * and then displays the news block
 */
(function ($) {
	"use strict";
	$.fn.showArticle = function () {
		return this.fadeIn(700);
	};
})(jQuery);

/*
 * hideArticle function creates jQuery animation * and then hide the news block
 */
(function ($) {
	"use strict";
	$.fn.hideArticle = function () {
		return this.css('display', 'none');
	};
})(jQuery);